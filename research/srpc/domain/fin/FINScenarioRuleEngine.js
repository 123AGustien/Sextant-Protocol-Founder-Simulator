/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Engine
 *
 * SCENARIO EXECUTION ORCHESTRATION
 *
 * V2.0.0
 *
 * Coordinates:
 * FINScenario
 * FINScenarioData
 * FINScenarioRuleEngine
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 *
 * Architecture:
 * DATA → ALGORITHMS → COMPUTE
 *
 * This layer orchestrates execution.
 * It does not duplicate financial rules.
 * It does not create financial thresholds.
 * It does not perform financial execution.
 * It does not perform market execution.
 * Human Decision Authority remains final.
 */

(function (global) {

    "use strict";


    const FINScenarioEngine = {

        name: "FINScenarioEngine",

        version: "2.0.0",

        domain: "FIN",


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


        goldenRule: [

            "OBSERVE",

            "VERIFY",

            "ASSESS",

            "DECIDE",

            "ACT",

            "UPDATE"

        ],


        /*
         * =====================================================
         * DEPENDENCY VALIDATION
         * =====================================================
         */

        validateDependencies: function () {

            const required = [

                "FINScenario",

                "FINScenarioData",

                "FINScenarioRuleEngine"

            ];


            const missing = [];


            required.forEach(function (name) {

                if (!global[name]) {

                    missing.push(name);

                }

            });


            if (missing.length > 0) {

                return {

                    valid: false,

                    missing: missing

                };

            }


            return {

                valid: true,

                missing: []

            };

        },


        /*
         * =====================================================
         * OBSERVE
         * =====================================================
         */

        observe: function () {

            const scenario =
                global.FINScenario;


            const scenarioId =
                typeof scenario.getScenarioId === "function"
                    ? scenario.getScenarioId()
                    : null;


            const riskState =
                typeof scenario.getRiskState === "function"
                    ? scenario.getRiskState()
                    : null;


            const inputs =
                typeof scenario.getInputs === "function"
                    ? scenario.getInputs()
                    : {};


            return {

                stage: "OBSERVE",

                scenarioId: scenarioId,

                riskState: riskState,

                inputs: Object.assign(
                    {},
                    inputs
                )

            };

        },


        /*
         * =====================================================
         * VERIFY
         * =====================================================
         */

        verify: function (observation) {

            const scenario =
                global.FINScenario;


            let valid = false;

            let validationError = null;


            try {

                /*
                 * FINScenario.validate()
                 * is authoritative and returns
                 * true / false.
                 */

                valid =
                    scenario.validate() === true;


            } catch (error) {

                valid = false;

                validationError =
                    error.message;

            }


            let scenarioData = null;

            if (valid) {

                try {

                    if (
                        typeof scenario.getScenarioData ===
                        "function"
                    ) {

                        scenarioData =
                            scenario.getScenarioData();

                    }

                } catch (error) {

                    valid = false;

                    validationError =
                        error.message;

                }

            }


            return {

                stage: "VERIFY",

                valid: valid,

                scenarioId:
                    observation.scenarioId,

                riskState:
                    observation.riskState,

                scenarioData:
                    scenarioData,

                error:
                    validationError

            };

        },


        /*
         * =====================================================
         * ASSESS / COMPUTE
         * =====================================================
         *
         * The Scenario Rule Engine is the
         * authoritative bridge into FINRuleEngine.
         *
         * No financial rule is duplicated here.
         */

        compute: function (
            observation,
            verification
        ) {

            if (!verification.valid) {

                return {

                    stage: "ASSESS",

                    status: "VERIFICATION_FAILED",

                    ruleEvaluation: null

                };

            }


            const engine =
                global.FINScenarioRuleEngine;


            if (
                !engine ||
                typeof engine.evaluate !==
                "function"
            ) {

                return {

                    stage: "ASSESS",

                    status:
                        "SCENARIO_RULE_ENGINE_UNAVAILABLE",

                    ruleEvaluation: null

                };

            }


            const result =
                engine.evaluate(

                    observation.scenarioId,

                    observation.riskState,

                    observation.inputs

                );


            return {

                stage: "ASSESS",

                status: "COMPUTE_COMPLETE",

                ruleEvaluation: result

            };

        },


        /*
         * =====================================================
         * DECIDE
         * =====================================================
         */

        decide: function (assessment) {

            if (
                !assessment ||
                !assessment.ruleEvaluation
            ) {

                return {

                    stage: "DECIDE",

                    status: "DECISION_REVIEW_REQUIRED",

                    decision: null

                };

            }


            const result =
                assessment.ruleEvaluation.result;


            return {

                stage: "DECIDE",

                status:
                    result &&
                    result.status
                        ? result.status
                        : "REVIEW_REQUIRED",

                decision:
                    result &&
                    result.decision
                        ? result.decision
                        : null,

                decisionOptions:
                    result &&
                    result.decisionOptions
                        ? result.decisionOptions
                        : null

            };

        },


        /*
         * =====================================================
         * ACT
         * =====================================================
         *
         * ACT is simulation-only.
         * No banking transaction,
         * market order or external
         * system command is executed.
         */

        act: function (decision) {

            return {

                stage: "ACT",

                status:
                    "SIMULATED_ACTION_ONLY",

                decision:
                    decision,

                execution: {

                    physicalExecution: false,

                    financialExecution: false,

                    marketExecution: false,

                    externalExecution: false,

                    autonomousAuthority: false,

                    humanAuthorizationRequired: true

                }

            };

        },


        /*
         * =====================================================
         * UPDATE
         * =====================================================
         */

        update: function (
            observation,
            verification,
            assessment,
            decision,
            action
        ) {

            return {

                stage: "UPDATE",

                scenarioId:
                    observation
                        ? observation.scenarioId
                        : null,

                riskState:
                    observation
                        ? observation.riskState
                        : null,

                updatedState: {

                    simulationOnly: true,

                    stateChanged: false,

                    externalSystemsChanged: false,

                    financialAccountsChanged: false,

                    marketPositionsChanged: false

                },

                audit: {

                    scenarioId:
                        observation
                            ? observation.scenarioId
                            : null,

                    verification:
                        verification
                            ? verification.valid
                            : false,

                    assessment:
                        assessment
                            ? assessment.status
                            : null,

                    decision:
                        decision
                            ? decision.status
                            : null,

                    action:
                        action
                            ? action.status
                            : null

                }

            };

        },


        /*
         * =====================================================
         * EXECUTE
         * =====================================================
         */

        execute: function () {

            const dependencyStatus =
                this.validateDependencies();


            if (!dependencyStatus.valid) {

                return {

                    engine:
                        "FIN_SCENARIO_ENGINE",

                    version:
                        this.version,

                    domain:
                        this.domain,

                    status:
                        "DEPENDENCY_MISSING",

                    dependencies:
                        dependencyStatus,

                    safety:
                        this.safety

                };

            }


            try {

                /*
                 * OBSERVE
                 */

                const observation =
                    this.observe();


                /*
                 * VERIFY
                 */

                const verification =
                    this.verify(
                        observation
                    );


                if (!verification.valid) {

                    return {

                        engine:
                            "FIN_SCENARIO_ENGINE",

                        version:
                            this.version,

                        domain:
                            this.domain,

                        status:
                            "VALIDATION_FAILED",

                        observation:
                            observation,

                        verification:
                            verification,

                        safety:
                            this.safety

                    };

                }


                /*
                 * ASSESS / COMPUTE
                 */

                const assessment =
                    this.compute(

                        observation,

                        verification

                    );


                /*
                 * DECIDE
                 */

                const decision =
                    this.decide(
                        assessment
                    );


                /*
                 * ACT
                 */

                const action =
                    this.act(
                        decision
                    );


                /*
                 * UPDATE
                 */

                const update =
                    this.update(

                        observation,

                        verification,

                        assessment,

                        decision,

                        action

                    );


                /*
                 * COMPLETE RESULT
                 */

                return {

                    engine:
                        "FIN_SCENARIO_ENGINE",

                    name:
                        this.name,

                    version:
                        this.version,

                    domain:
                        this.domain,

                    architecture:
                        "DATA → ALGORITHMS → COMPUTE",

                    goldenRule:
                        this.goldenRule,

                    scenario:
                        typeof global.FINScenario
                            .getScenarioData ===
                            "function"
                            ? global.FINScenario
                                .getScenarioData()
                            : {},

                    observation:
                        observation,

                    verification:
                        verification,

                    assessment:
                        assessment,

                    decision:
                        decision,

                    action:
                        action,

                    update:
                        update,

                    /*
                     * Compatibility field
                     */

                    ruleEvaluation:
                        assessment.ruleEvaluation,

                    status:
                        assessment.status ===
                        "COMPUTE_COMPLETE"
                            ? "PASS"
                            : "REVIEW_REQUIRED",

                    safety:
                        this.safety

                };

            } catch (error) {

                return {

                    engine:
                        "FIN_SCENARIO_ENGINE",

                    version:
                        this.version,

                    domain:
                        this.domain,

                    status:
                        "FIN_SCENARIO_ENGINE_ERROR",

                    error:
                        error.message,

                    safety:
                        this.safety

                };

            }

        },


        /*
         * =====================================================
         * DETERMINISM TEST
         * =====================================================
         */

        testDeterminism: function () {

            const first =
                this.execute();


            const second =
                this.execute();


            const firstComparable =
                JSON.parse(
                    JSON.stringify(first)
                );


            const secondComparable =
                JSON.parse(
                    JSON.stringify(second)
                );


            /*
             * Remove timestamps if any
             * lower layer generates them.
             */

            function removeTimestamp(object) {

                if (
                    object &&
                    object.auditLogEntry &&
                    object.auditLogEntry.timestamp
                ) {

                    delete object
                        .auditLogEntry
                        .timestamp;

                }

            }


            removeTimestamp(
                firstComparable
            );


            removeTimestamp(
                secondComparable
            );


            const deterministic =
                JSON.stringify(
                    firstComparable
                ) ===
                JSON.stringify(
                    secondComparable
                );


            return {

                test:
                    "FIN_SCENARIO_DETERMINISM",

                deterministic:
                    deterministic,

                first:
                    firstComparable,

                second:
                    secondComparable

            };

        },


        /*
         * =====================================================
         * STATUS
         * =====================================================
         */

        getStatus: function () {

            const dependencies =
                this.validateDependencies();


            return {

                engine:
                    this.name,

                domain:
                    this.domain,

                version:
                    this.version,

                valid:
                    dependencies.valid,

                dependencies:
                    dependencies,

                safety:
                    this.safety

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


})(typeof window !== "undefined"
    ? window
    : globalThis);