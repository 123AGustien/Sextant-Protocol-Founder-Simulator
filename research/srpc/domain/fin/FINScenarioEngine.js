/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Engine
 *
 * SCENARIO EXECUTION ORCHESTRATION
 *
 * Coordinates:
 * FINScenario
 * FINScenarioRuleEngine
 *
 * Does not modify the protected SRPC foundation.
 * Does not perform financial or physical execution.
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
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
            externalConnection: false,
            autonomousAuthority: false,
            humanDecisionAuthority: true
        },

        validateDependencies: function () {

            const required = [
                "FINScenario",
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
                scenarioId.trim() === ""
            ) {
                throw new Error(
                    "A valid FIN scenario ID is required."
                );
            }

            if (
                typeof riskState !== "string" ||
                riskState.trim() === ""
            ) {
                throw new Error(
                    "A valid FIN risk state is required."
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

            const result =
                global.FINScenarioRuleEngine.evaluate(
                    scenarioId,
                    riskState,
                    input || {}
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

            function removeAuditTimestamp(result) {

                if (
                    result &&
                    result.result &&
                    result.result.result &&
                    result.result.result.auditLogEntry
                ) {
                    delete result.result
                        .result
                        .result
                        .auditLogEntry
                        .timestamp;
                }
            }

            removeAuditTimestamp(firstComparable);
            removeAuditTimestamp(secondComparable);

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

            if (
                !global.FINScenario ||
                typeof global.FINScenario.getState !== "function"
            ) {
                throw new Error(
                    "FINScenario state access is required."
                );
            }

            return global.FINScenario.getState();
        },

        reset: function () {

            if (
                global.FINScenario &&
                typeof global.FINScenario.reset === "function"
            ) {
                return global.FINScenario.reset();
            }

            return {
                reset: false,
                reason: "FINScenario reset function unavailable."
            };
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
                safety: this.safety
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