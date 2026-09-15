/*
 * Sextant Protocol™
 * SRPC Technology Domain Simulator Factory
 *
 * File:
 * research/srpc/domain/RuleEngine.js
 *
 * Purpose:
 * Execute the domain rule definitions.
 *
 * Boundary:
 * RULE EXECUTION ONLY.
 *
 * Doctrine:
 * DATA → ALGORITHMS → COMPUTE
 *
 * Safety:
 * - No backend connection.
 * - No external connection.
 * - No physical execution.
 * - No autonomous actuation.
 * - Human authority remains external.
 */

(function (global) {
    "use strict";

    const VERSION = "0.1.0-RESEARCH";

    function getRulesModule() {

        if (
            typeof global.SextantDomainRules ===
            "undefined"
        ) {
            return null;
        }

        return global.SextantDomainRules;
    }

    const RuleEngine = {

        version: VERSION,

        domain: "technology-domain",

        validateDependencies: function () {

            const rulesAvailable =
                getRulesModule() !== null;

            return {
                valid: rulesAvailable,

                rulesAvailable:
                    rulesAvailable
            };
        },

        evaluate: function (inputs) {

            const dependencies =
                this.validateDependencies();

            if (!dependencies.valid) {

                return {
                    executed: false,

                    status:
                        "RULE_ENGINE_DEPENDENCY_FAILURE",

                    dependencies:
                        dependencies,

                    results: [],

                    assessment: null,

                    physicalExecution: false,

                    backendConnection: false,

                    externalConnection: false,

                    autonomousActuation: false,

                    humanAuthorizationRequired: true
                };
            }

            if (
                !inputs ||
                typeof inputs !== "object"
            ) {

                return {
                    executed: false,

                    status:
                        "RULE_ENGINE_INVALID_INPUT",

                    dependencies:
                        dependencies,

                    results: [],

                    assessment: null,

                    physicalExecution: false,

                    backendConnection: false,

                    externalConnection: false,

                    autonomousActuation: false,

                    humanAuthorizationRequired: true
                };
            }

            const rules =
                getRulesModule();

            const results =
                rules.evaluateAll(inputs);

            const assessment =
                rules.assess(results);

            return {

                executed: true,

                status:
                    assessment.status,

                dependencies:
                    dependencies,

                results:
                    results,

                assessment:
                    assessment,

                physicalExecution:
                    false,

                backendConnection:
                    false,

                externalConnection:
                    false,

                autonomousActuation:
                    false,

                humanAuthorizationRequired:
                    true
            };
        },

        getStatus: function () {

            const dependencies =
                this.validateDependencies();

            return {

                ruleEngineVersion:
                    VERSION,

                ready:
                    dependencies.valid,

                dependencies:
                    dependencies,

                physicalExecution:
                    false,

                backendConnection:
                    false,

                externalConnection:
                    false,

                autonomousActuation:
                    false,

                humanAuthorizationRequired:
                    true
            };
        }
    };

    global.SextantRuleEngine =
        RuleEngine;

})(window);