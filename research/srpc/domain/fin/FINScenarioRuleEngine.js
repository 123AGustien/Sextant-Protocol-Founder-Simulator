/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Rule Engine
 *
 * COMPUTE / EXECUTION BRIDGE
 *
 * Connects:
 *
 *     FINScenario
 *          ↓
 *     FINScenarioRules
 *          ↓
 *     FINRules
 *          ↓
 *     FINScenarioRuleEngine
 *          ↓
 *     FINScenarioEngine
 *
 * Architecture:
 *
 *     DATA → ALGORITHMS → COMPUTE
 *
 * Golden Rule:
 *
 *     OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 *
 * Safety Boundary:
 * - Simulation only
 * - No banking connection
 * - No customer account access
 * - No financial transaction execution
 * - No market order execution
 * - No autonomous authority
 * - Human Decision Authority remains final
 */

(function (global) {
    "use strict";

    const FINScenarioRuleEngine = {

        name: "FINScenarioRuleEngine",
        domain: "FIN",
        version: "2.0.0",

        architecture: "DATA → ALGORITHMS → COMPUTE",

        goldenRule:
            "OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE",

        safety: {
            simulationOnly: true,
            physicalExecution: false,
            financialExecution: false,
            marketExecution: false,
            backendConnection: false,
            externalConnection: false,
            autonomousAuthority: false,
            humanDecisionAuthority: true
        },

        /*
         * ------------------------------------------------------------
         * DEPENDENCY VALIDATION
         * ------------------------------------------------------------
         */

        validateDependencies: function () {

            if (!global.FINRules) {
                throw new Error(
                    "Missing FIN dependency: FINRules"
                );
            }

            if (!global.FINScenarioRules) {
                throw new Error(
                    "Missing FIN dependency: FINScenarioRules"
                );
            }

            if (
                typeof global.FINRules.rules !== "object"
            ) {
                throw new Error(
                    "Invalid FINRules dependency"
                );
            }

            if (
                typeof global.FINScenarioRules.scenarios !== "object"
            ) {
                throw new Error(
                    "Invalid FINScenarioRules dependency"
                );
            }

            if (
                typeof global.FINRules.validate === "function"
            ) {
                global.FINRules.validate();
            }

            return true;
        },

        /*
         * ------------------------------------------------------------
         * NORMALIZE RISK STATE
         * ------------------------------------------------------------
         */

        normalizeRiskState: function (riskState) {

            const state = String(
                riskState || "GREEN"
            ).toUpperCase();

            const validStates = [
                "GREEN",
                "YELLOW",
                "ORANGE",
                "RED"
            ];

            if (
                validStates.indexOf(state) === -1
            ) {
                throw new Error(
                    "Invalid FIN risk state: " + state
                );
            }

            return state;
        },

        /*
         * ------------------------------------------------------------
         * SCENARIO LOOKUP
         * ------------------------------------------------------------
         */

        getScenarioConfiguration: function (scenarioId) {

            const scenarioRules =
                global.FINScenarioRules.scenarios;

            const configuration =
                scenarioRules[scenarioId];

            if (!configuration) {
                throw new Error(
                    "Missing FIN scenario configuration: " +
                    scenarioId
                );
            }

            return configuration;
        },

        /*
         * ------------------------------------------------------------
         * RULE LOOKUP
         * ------------------------------------------------------------
         */

        getRule: function (scenarioId) {

            const rule =
                global.FINRules.rules[scenarioId];

            if (!rule) {
                throw new Error(
                    "Missing FIN algorithm rule: " +
                    scenarioId
                );
            }

            return rule;
        },

        /*
         * ------------------------------------------------------------
         * SCENARIO VERIFICATION
         * ------------------------------------------------------------
         *
         * FINScenarioRules remains authoritative for scenario-specific
         * verification configuration.
         *
         * This engine does not invent thresholds or numerical rules.
         */

        verifyScenario: function (
            scenarioId,
            riskState,
            inputs
        ) {

            const configuration =
                this.getScenarioConfiguration(
                    scenarioId
                );

            const state =
                this.normalizeRiskState(
                    riskState
                );

            const verification = {
                passed: true,
                scenarioId: scenarioId,
                riskState: state,
                requiredState:
                    configuration.requiredState || null,
                requiredScenarioData:
                    configuration.requiredScenarioData || [],
                executionConnectionRequired:
                    configuration.executionConnectionRequired === true,
                inputPresent:
                    inputs !== undefined &&
                    inputs !== null,
                message:
                    "Scenario configuration verified for controlled simulation."
            };

            /*
             * No external execution is permitted.
             */

            if (
                verification.executionConnectionRequired
            ) {
                throw new Error(
                    "FIN scenario requires prohibited execution connection: " +
                    scenarioId
                );
            }

            return verification;
        },

        /*
         * ------------------------------------------------------------
         * ASSESS
         * ------------------------------------------------------------
         */

        assess: function (
            scenarioId,
            riskState
        ) {

            const state =
                this.normalizeRiskState(
                    riskState
                );

            const rule =
                this.getRule(
                    scenarioId
                );

            const assessment =
                rule.assess[state];

            if (
                typeof assessment !== "string"
            ) {
                throw new Error(
                    "Missing FIN assessment rule for " +
                    scenarioId +
                    " / " +
                    state
                );
            }

            return assessment;
        },

        /*
         * ------------------------------------------------------------
         * DECIDE
         * ------------------------------------------------------------
         *
         * Decision is an available simulated option.
         * It does NOT authorize execution.
         */

        decide: function (
            scenarioId,
            riskState
        ) {

            const state =
                this.normalizeRiskState(
                    riskState
                );

            const rule =
                this.getRule(
                    scenarioId
                );

            const decision =
                rule.decide[state];

            if (
                typeof decision !== "string"
            ) {
                throw new Error(
                    "Missing FIN decision rule for " +
                    scenarioId +
                    " / " +
                    state
                );
            }

            return decision;
        },

        /*
         * ------------------------------------------------------------
         * CASCADE
         * ------------------------------------------------------------
         */

        getCascade: function (
            scenarioId,
            riskState
        ) {

            const state =
                this.normalizeRiskState(
                    riskState
                );

            const rule =
                this.getRule(
                    scenarioId
                );

            const cascade =
                rule.cascade[state];

            if (!Array.isArray(cascade)) {
                throw new Error(
                    "Invalid FIN cascade rule for " +
                    scenarioId +
                    " / " +
                    state
                );
            }

            return cascade.slice();
        },

        /*
         * ------------------------------------------------------------
         * AFFECTED DOMAINS
         * ------------------------------------------------------------
         *
         * The cascade rule is the deterministic source for affected
         * domains in this execution layer.
         */

        getAffectedDomains: function (
            scenarioId,
            riskState
        ) {

            return this.getCascade(
                scenarioId,
                riskState
            );
        },

        /*
         * ------------------------------------------------------------
         * EVALUATE
         * ------------------------------------------------------------
         *
         * Primary entry point expected by FINScenarioEngine.
         *
         * Signature:
         *
         * evaluate(
         *     scenarioId,
         *     riskState,
         *     inputs
         * )
         *
         * Returns deterministic assessment output.
         */

        evaluate: function (
            scenarioId,
            riskState,
            inputs
        ) {

            this.validateDependencies();

            if (!scenarioId) {
                throw new Error(
                    "Missing FIN scenario ID"
                );
            }

            const state =
                this.normalizeRiskState(
                    riskState
                );

            const configuration =
                this.getScenarioConfiguration(
                    scenarioId
                );

            const rule =
                this.getRule(
                    scenarioId
                );

            const verification =
                this.verifyScenario(
                    scenarioId,
                    state,
                    inputs
                );

            const assessment =
                this.assess(
                    scenarioId,
                    state
                );

            const decision =
                this.decide(
                    scenarioId,
                    state
                );

            const cascade =
                this.getCascade(
                    scenarioId,
                    state
                );

            return {

                engine: this.name,

                engineVersion: this.version,

                domain: this.domain,

                architecture: this.architecture,

                goldenRule: this.goldenRule,

                scenarioId: scenarioId,

                scenarioName:
                    configuration.name ||
                    configuration.scenarioName ||
                    scenarioId,

                riskState: state,

                inputs:
                    inputs || {},

                verification: verification,

                result: assessment,

                assessment: assessment,

                decision: decision,

                decisionOptions: [
                    decision
                ],

                cascadePath: cascade,

                affectedDomains:
                    cascade.slice(),

                ruleSource: {
                    component: "FINRules",
                    version:
                        global.FINRules.version
                },

                scenarioRuleSource: {
                    component:
                        "FINScenarioRules",
                    version:
                        global.FINScenarioRules.version
                },

                humanAuthorizationRequired: true,

                simulatedAction: true,

                externalExecution: false,

                financialExecution: false,

                marketExecution: false,

                autonomousAuthority: false,

                status: "COMPUTE_COMPLETE"
            };
        },

        /*
         * ------------------------------------------------------------
         * DETERMINISM TEST
         * ------------------------------------------------------------
         */

        testDeterminism: function (
            scenarioId,
            riskState,
            inputs
        ) {

            const first =
                this.evaluate(
                    scenarioId,
                    riskState,
                    inputs
                );

            const second =
                this.evaluate(
                    scenarioId,
                    riskState,
                    inputs
                );

            const firstJSON =
                JSON.stringify(first);

            const secondJSON =
                JSON.stringify(second);

            return {
                deterministic:
                    firstJSON === secondJSON,

                scenarioId:
                    scenarioId,

                riskState:
                    this.normalizeRiskState(
                        riskState
                    ),

                message:
                    firstJSON === secondJSON
                        ? "Deterministic evaluation confirmed."
                        : "Deterministic evaluation mismatch detected."
            };
        },

        /*
         * ------------------------------------------------------------
         * STATUS
         * ------------------------------------------------------------
         */

        getStatus: function () {

            let valid = false;

            try {
                valid =
                    this.validateDependencies();
            } catch (error) {
                valid = false;
            }

            return {
                component: this.name,
                domain: this.domain,
                version: this.version,
                architecture: this.architecture,
                goldenRule: this.goldenRule,
                valid: valid,
                safety: this.safety
            };
        }
    };

    /*
     * ------------------------------------------------------------
     * GLOBAL EXPORT
     * ------------------------------------------------------------
     */

    global.FINScenarioRuleEngine =
        FINScenarioRuleEngine;

    /*
     * ------------------------------------------------------------
     * COMMONJS EXPORT
     * ------------------------------------------------------------
     */

    if (
        typeof module !== "undefined" &&
        module.exports
    ) {
        module.exports =
            FINScenarioRuleEngine;
    }

})(typeof window !== "undefined"
    ? window
    : globalThis);