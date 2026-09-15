/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Engine
 *
 * SCENARIO LIFECYCLE / COMPUTE ORCHESTRATION LAYER
 *
 * Coordinates the FIN scenario lifecycle through
 * FINScenarioRuleEngine.
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 *
 * Simulation only.
 * No financial transaction execution.
 * No market execution.
 * No physical execution.
 * Human Decision Authority remains final.
 */

(function (global) {
    "use strict";

    const FINScenarioEngine = {

        name: "FINScenarioEngine",
        domain: "FIN",
        version: "1.0.0",

        safety: {
            simulationOnly: true,
            physicalExecution: false,
            financialExecution: false,
            marketExecution: false,
            autonomousAuthority: false,
            humanDecisionAuthority: true
        },

        validateDependencies: function () {

            const required = [
                "FINScenario",
                "FINScenarioData",
                "FINScenarioRules",
                "FINRules",
                "FINRuleEngine",
                "FINScenarioRuleEngine"
            ];

            const missing = [];

            required.forEach(function (name) {

                if (!global[name]) {
                    missing.push(name);
                }
            });

            if (missing.length > 0) {
                throw new Error(
                    "Missing FIN Scenario Engine dependencies: " +
                    missing.join(", ")
                );
            }

            return true;
        },

        validate: function (
            scenarioId,
            riskState
        ) {

            this.validateDependencies();

            if (
                typeof scenarioId !== "string" ||
                !global.FINScenarioData.scenarios ||
                !global.FINScenarioData.scenarios[scenarioId]
            ) {
                throw new Error(
                    "Invalid FIN scenario: " +
                    scenarioId
                );
            }

            const validStates = [
                "GREEN",
                "YELLOW",
                "ORANGE",
                "RED"
            ];

            if (!validStates.includes(riskState)) {
                throw new Error(
                    "Invalid FIN risk state: " +
                    riskState
                );
            }

            if (
                !global.FINScenarioRules.scenarios ||
                !global.FINScenarioRules.scenarios[scenarioId]
            ) {
                throw new Error(
                    "FIN scenario rule mapping not found: " +
                    scenarioId
                );
            }

            return true;
        },

        process: function (
            scenarioId,
            riskState,
            input
        ) {

            this.validate(
                scenarioId,
                riskState
            );

            const safeInput = input || {};

            const result =
                global.FINScenarioRuleEngine.evaluate(
                    scenarioId,
                    riskState,
                    safeInput
                );

            return {
                engine: this.name,
                domain: this.domain,
                version: this.version,
                scenarioId: scenarioId,
                riskState: riskState,
                result: result,
                safety: this.safety
            };
        },

        testDeterminism: function (
            scenarioId,
            riskState,
            input
        ) {

            this.validate(
                scenarioId,
                riskState
            );

            const first =
                this.process(
                    scenarioId,
                    riskState,
                    input || {}
                );

            const second =
                this.process(
                    scenarioId,
                    riskState,
                    input || {}
                );

            const firstComparable =
                JSON.parse(
                    JSON.stringify(first)
                );

            const secondComparable =
                JSON.parse(
                    JSON.stringify(second)
                );

            if (
                firstComparable.result &&
                firstComparable.result.result &&
                firstComparable.result.result.auditLogEntry &&
                secondComparable.result &&
                secondComparable.result.result &&
                secondComparable.result.result.auditLogEntry
            ) {
                delete firstComparable.result
                    .result
                    .auditLogEntry
                    .timestamp;

                delete secondComparable.result
                    .result
                    .auditLogEntry
                    .timestamp;
            }

            const deterministic =
                JSON.stringify(firstComparable) ===
                JSON.stringify(secondComparable);

            return {
                deterministic: deterministic,
                first: firstComparable,
                second: secondComparable
            };
        },

        getCurrentScenario: function () {

            this.validateDependencies();

            return {
                scenarioId:
                    global.FINScenario.getScenarioId(),

                riskState:
                    global.FINScenario.getRiskState(),

                inputs:
                    global.FINScenario.getInputs()
            };
        },

        reset: function () {

            this.validateDependencies();

            return global.FINScenario.reset();
        },

        getStatus: function () {

            let valid = false;

            try {
                this.validateDependencies();
                valid = true;
            } catch (error) {
                valid = false;
            }

            return {
                engine: this.name,
                domain: this.domain,
                version: this.version,
                valid: valid,
                safety: this.safety,
                evaluationSequence: [
                    "OBSERVE",
                    "VERIFY",
                    "ASSESS",
                    "DECIDE",
                    "ACT",
                    "UPDATE"
                ]
            };
        }
    };

    global.FINScenarioEngine =
        FINScenarioEngine;

    if (
        typeof module !== "undefined" &&
        module.exports
    ) {
        module.exports =
            FINScenarioEngine;
    }

})(typeof window !== "undefined" ? window : globalThis);