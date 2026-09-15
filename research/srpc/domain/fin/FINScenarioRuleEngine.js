/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Rule Engine
 *
 * ORCHESTRATION LAYER
 *
 * Coordinates:
 * FINScenario
 * FINScenarioData
 * FINScenarioRules
 * FINRuleEngine
 *
 * Does not duplicate FIN rules.
 * Does not create financial thresholds.
 * Does not perform external execution.
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 */

(function (global) {
    "use strict";

    const FINScenarioRuleEngine = {

        name: "FINScenarioRuleEngine",
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
                "FINRuleEngine"
            ];

            const missing = [];

            required.forEach(function (name) {

                if (!global[name]) {
                    missing.push(name);
                }
            });

            if (missing.length > 0) {
                throw new Error(
                    "Missing FIN dependencies: " +
                    missing.join(", ")
                );
            }

            return true;
        },

        getScenarioRule: function (scenarioId) {

            this.validateDependencies();

            if (
                !global.FINScenarioRules.scenarios ||
                !global.FINScenarioRules.scenarios[scenarioId]
            ) {
                throw new Error(
                    "FIN scenario rule not found: " +
                    scenarioId
                );
            }

            return global.FINScenarioRules.scenarios[
                scenarioId
            ];
        },

        validateScenario: function (scenarioId) {

            this.validateDependencies();

            if (
                !global.FINScenarioData.scenarios ||
                !global.FINScenarioData.scenarios[scenarioId]
            ) {
                throw new Error(
                    "Invalid FIN scenario: " +
                    scenarioId
                );
            }

            this.getScenarioRule(scenarioId);

            return true;
        },

        prepareInput: function (
            scenarioId,
            riskState,
            input
        ) {

            this.validateScenario(scenarioId);

            if (
                !global.FINScenario.riskStates &&
                typeof global.FINScenario.setRiskState !== "function"
            ) {
                // No alternate state authority exists.
            }

            const safeInput = input || {};

            return {
                scenarioId: scenarioId,
                riskState: riskState,
                inputs: Object.assign(
                    {},
                    safeInput
                )
            };
        },

        evaluate: function (
            scenarioId,
            riskState,
            input
        ) {

            this.validateDependencies();
            this.validateScenario(scenarioId);

            const preparedInput =
                this.prepareInput(
                    scenarioId,
                    riskState,
                    input
                );

            const result =
                global.FINRuleEngine.evaluate(
                    preparedInput.scenarioId,
                    preparedInput.riskState,
                    preparedInput.inputs
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

            this.validateDependencies();
            this.validateScenario(scenarioId);

            const first =
                this.evaluate(
                    scenarioId,
                    riskState,
                    input || {}
                );

            const second =
                this.evaluate(
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
                firstComparable.result.auditLogEntry &&
                secondComparable.result &&
                secondComparable.result.auditLogEntry
            ) {
                delete firstComparable.result
                    .auditLogEntry.timestamp;

                delete secondComparable.result
                    .auditLogEntry.timestamp;
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

        getStatus: function () {

            let valid = false;
            let dependencies = [];

            try {

                this.validateDependencies();

                valid = true;

                dependencies = [
                    "FINScenario",
                    "FINScenarioData",
                    "FINScenarioRules",
                    "FINRules",
                    "FINRuleEngine"
                ];

            } catch (error) {

                valid = false;
            }

            return {
                engine: this.name,
                domain: this.domain,
                version: this.version,
                valid: valid,
                dependencies: dependencies,
                safety: this.safety
            };
        }
    };

    global.FINScenarioRuleEngine =
        FINScenarioRuleEngine;

    if (
        typeof module !== "undefined" &&
        module.exports
    ) {
        module.exports =
            FINScenarioRuleEngine;
    }

})(typeof window !== "undefined" ? window : globalThis);