"use strict"

/*
 * Sextant Protocol™
 * SRPC Technology Domain Simulator Factory
 *
 * File:
 * research/srpc/domain/DomainSimulatorUI.js
 *
 * Purpose:
 * Provide the UI/controller boundary for the
 * SRPC Technology Domain Simulator.
 *
 * Boundary:
 * UI CONTROLLER ONLY.
 *
 * Doctrine:
 * DATA → ALGORITHMS → COMPUTE
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 *
 * Architecture:
 *
 * UI
 *   ↓
 * DomainSimulatorUI
 *   ↓
 * DomainIntegration
 *   ↓
 * ScenarioEngine
 *   ↓
 * ScenarioCompute
 *   ↓
 * Protected SRPC Foundation
 *
 * Safety:
 * - Local processing only.
 * - No backend connection.
 * - No external connection.
 * - No physical execution.
 * - No autonomous actuation.
 * - Human authority remains external.
 *
 * IMPORTANT:
 * This file contains no domain rules.
 * This file contains no scenario algorithms.
 * This file does not replace DomainIntegration.
 * This file does not modify the protected SRPC foundation.
 */

(function (global) {

    "use strict";


    /*
     * ============================================================
     * VERSION
     * ============================================================
     */

    const VERSION =
        "0.1.0-RESEARCH";


    /*
     * ============================================================
     * SAFETY BOUNDARY
     * ============================================================
     */

    const SAFETY_BOUNDARY = {

        localProcessing:
            true,

        backendConnection:
            false,

        externalConnection:
            false,

        physicalExecution:
            false,

        autonomousActuation:
            false,

        humanAuthorityRequired:
            true
    };


    /*
     * ============================================================
     * DEFAULT SYSTEM STATE
     * ============================================================
     */

    const DEFAULT_SYSTEM_STATE = {

        availability:
            100,

        integrity:
            100,

        stability:
            100
    };


    /*
     * ============================================================
     * DOMAIN INTEGRATION
     * ============================================================
     */

    function getDomainIntegration() {

        if (
            typeof global.SextantDomainIntegration ===
            "undefined"
        ) {

            return null;
        }

        return global.SextantDomainIntegration;
    }


    /*
     * ============================================================
     * SCENARIO
     * ============================================================
     */

    function getScenario() {

        if (
            typeof global.SextantScenario ===
            "undefined"
        ) {

            return null;
        }

        return global.SextantScenario;
    }


    /*
     * ============================================================
     * SCENARIO DATA
     * ============================================================
     */

    function getScenarioData() {

        if (
            typeof global.SextantScenarioData ===
            "undefined"
        ) {

            return null;
        }

        return global.SextantScenarioData;
    }


    /*
     * ============================================================
     * DEPENDENCY STATUS
     * ============================================================
     *
     * DomainIntegration is the authoritative wiring boundary.
     *
     * The UI reads dependency information from that boundary.
     * It does not recreate the processing chain.
     */

    function getDependencies() {

        const integration =
            getDomainIntegration();

        const scenario =
            getScenario();

        const scenarioData =
            getScenarioData();


        let integrationDependencies = {

            valid:
                false,

            scenarioAvailable:
                false,

            scenarioEngineAvailable:
                false,

            scenarioComputeAvailable:
                false,

            scenarioInputsAvailable:
                false,

            scenarioEngineProcessAvailable:
                false,

            scenarioComputeExecuteAvailable:
                false,

            scenarioComputeDeterminismAvailable:
                false
        };


        if (
            integration &&
            typeof integration.validateDependencies ===
            "function"
        ) {

            try {

                integrationDependencies =
                    integration.validateDependencies();

            } catch (error) {

                integrationDependencies = {

                    valid:
                        false,

                    scenarioAvailable:
                        scenario !== null,

                    scenarioEngineAvailable:
                        false,

                    scenarioComputeAvailable:
                        false,

                    scenarioInputsAvailable:
                        false,

                    scenarioEngineProcessAvailable:
                        false,

                    scenarioComputeExecuteAvailable:
                        false,

                    scenarioComputeDeterminismAvailable:
                        false,

                    error:
                        error &&
                        error.message
                            ? error.message
                            : String(error)
                };
            }
        }


        const domainIntegrationAvailable =
            integration !== null;


        const scenarioAvailable =
            scenario !== null;


        const scenarioDataAvailable =
            scenarioData !== null;


        /*
         * Support both the expanded dependency model and
         * the original two-field model.
         */

        const scenarioEngineAvailable =
            Boolean(
                integrationDependencies
                    .scenarioEngineAvailable
            );


        const scenarioComputeAvailable =
            Boolean(
                integrationDependencies
                    .scenarioComputeAvailable
            );


        const valid =
            Boolean(
                domainIntegrationAvailable &&
                scenarioAvailable &&
                scenarioDataAvailable &&
                integrationDependencies.valid
            );


        return {

            domainIntegrationAvailable:
                domainIntegrationAvailable,

            scenarioAvailable:
                scenarioAvailable,

            scenarioDataAvailable:
                scenarioDataAvailable,

            scenarioEngineAvailable:
                scenarioEngineAvailable,

            scenarioComputeAvailable:
                scenarioComputeAvailable,

            scenarioInputsAvailable:
                Boolean(
                    integrationDependencies
                        .scenarioInputsAvailable
                ),

            scenarioEngineProcessAvailable:
                Boolean(
                    integrationDependencies
                        .scenarioEngineProcessAvailable
                ),

            scenarioComputeExecuteAvailable:
                Boolean(
                    integrationDependencies
                        .scenarioComputeExecuteAvailable
                ),

            scenarioComputeDeterminismAvailable:
                Boolean(
                    integrationDependencies
                        .scenarioComputeDeterminismAvailable
                ),

            integrationValid:
                Boolean(
                    integrationDependencies.valid
                ),

            valid:
                valid
        };
    }


    /*
     * ============================================================
     * DOMAIN DATA
     * ============================================================
     */

    function getDomainData() {

        const scenarioData =
            getScenarioData();


        if (!scenarioData) {

            return {

                domain:
                    "technology-domain",

                scenarioId:
                    "DOMAIN-SCENARIO-001",

                scenarioName:
                    "Technology Domain Baseline Scenario",

                classification:
                    "RESEARCH"
            };
        }


        if (
            typeof scenarioData.getData ===
            "function"
        ) {

            try {

                return scenarioData.getData();

            } catch (error) {

                return {

                    domain:
                        "technology-domain",

                    scenarioId:
                        "DOMAIN-SCENARIO-001",

                    scenarioName:
                        "Technology Domain Baseline Scenario",

                    classification:
                        "RESEARCH",

                    error:
                        error &&
                        error.message
                            ? error.message
                            : String(error)
                };
            }
        }


        if (
            typeof scenarioData.getScenarioData ===
            "function"
        ) {

            try {

                return scenarioData.getScenarioData();

            } catch (error) {

                return {

                    domain:
                        "technology-domain",

                    scenarioId:
                        "DOMAIN-SCENARIO-001",

                    scenarioName:
                        "Technology Domain Baseline Scenario",

                    classification:
                        "RESEARCH",

                    error:
                        error &&
                        error.message
                            ? error.message
                            : String(error)
                };
            }
        }


        return scenarioData;
    }


    /*
     * ============================================================
     * SYSTEM STATE
     * ============================================================
     */

    function getSystemState() {

        const scenario =
            getScenario();


        if (
            scenario &&
            typeof scenario.getInputs ===
            "function"
        ) {

            try {

                const inputs =
                    scenario.getInputs();


                if (
                    inputs &&
                    inputs.systemState
                ) {

                    return {
                        ...inputs.systemState
                    };
                }

            } catch (error) {

                /*
                 * Fall through to deterministic default state.
                 */
            }
        }


        return {
            ...DEFAULT_SYSTEM_STATE
        };
    }


    /*
     * ============================================================
     * INTEGRATION STATUS
     * ============================================================
     */

    function getIntegrationStatus() {

        const integration =
            getDomainIntegration();


        if (
            integration &&
            typeof integration.getStatus ===
            "function"
        ) {

            try {

                return integration.getStatus();

            } catch (error) {

                return {

                    domainIntegrationVersion:
                        VERSION,

                    domain:
                        "technology-domain",

                    ready:
                        false,

                    dependencies:
                        getDependencies(),

                    error:
                        error &&
                        error.message
                            ? error.message
                            : String(error),

                    ...SAFETY_BOUNDARY
                };
            }
        }


        const dependencies =
            getDependencies();


        return {

            domainIntegrationVersion:
                VERSION,

            domain:
                "technology-domain",

            ready:
                false,

            dependencies:
                dependencies,

            ...SAFETY_BOUNDARY
        };
    }


    /*
     * ============================================================
     * UI STATUS
     * ============================================================
     */

    function getStatus() {

        const dependencies =
            getDependencies();


        const integrationStatus =
            getIntegrationStatus();


        return {

            uiVersion:
                VERSION,

            domain:
                "technology-domain",

            ready:
                Boolean(
                    dependencies.valid &&
                    integrationStatus.ready
                ),

            dependencies:
                dependencies,

            integration:
                integrationStatus,

            safety:
                {
                    ...SAFETY_BOUNDARY
                },

            humanAuthorityRequired:
                true
        };
    }


    /*
     * ============================================================
     * SRPC PROCESSING
     * ============================================================
     *
     * DomainIntegration owns the processing chain.
     *
     * UI does not:
     *
     * - execute rules
     * - construct compute input
     * - call ScenarioCompute directly
     * - duplicate ScenarioEngine logic
     */

    function process() {

        const integration =
            getDomainIntegration();


        if (!integration) {

            return {

                executed:
                    false,

                status:
                    "DOMAIN_INTEGRATION_UNAVAILABLE",

                error:
                    "SextantDomainIntegration is unavailable.",

                ...SAFETY_BOUNDARY
            };
        }


        if (
            typeof integration.process !==
            "function"
        ) {

            return {

                executed:
                    false,

                status:
                    "DOMAIN_INTEGRATION_API_UNAVAILABLE",

                error:
                    "SextantDomainIntegration.process() is unavailable.",

                ...SAFETY_BOUNDARY
            };
        }


        try {

            return integration.process();

        } catch (error) {

            return {

                executed:
                    false,

                status:
                    "DOMAIN_INTEGRATION_PROCESSING_ERROR",

                error:
                    error &&
                    error.message
                        ? error.message
                        : String(error),

                ...SAFETY_BOUNDARY
            };
        }
    }


    /*
     * ============================================================
     * DETERMINISM TEST
     * ============================================================
     */

    function testDeterminism() {

        const integration =
            getDomainIntegration();


        if (!integration) {

            return {

                deterministic:
                    false,

                status:
                    "DOMAIN_INTEGRATION_UNAVAILABLE",

                error:
                    "SextantDomainIntegration is unavailable.",

                ...SAFETY_BOUNDARY
            };
        }


        if (
            typeof integration.testDeterminism !==
            "function"
        ) {

            return {

                deterministic:
                    false,

                status:
                    "DOMAIN_DETERMINISM_API_UNAVAILABLE",

                error:
                    "SextantDomainIntegration.testDeterminism() is unavailable.",

                ...SAFETY_BOUNDARY
            };
        }


        try {

            return integration.testDeterminism();

        } catch (error) {

            return {

                deterministic:
                    false,

                status:
                    "DOMAIN_DETERMINISM_EXECUTION_ERROR",

                error:
                    error &&
                    error.message
                        ? error.message
                        : String(error),

                ...SAFETY_BOUNDARY
            };
        }
    }


    /*
     * ============================================================
     * SAFETY STATUS
     * ============================================================
     */

    function getSafetyBoundary() {

        return {
            ...SAFETY_BOUNDARY
        };
    }


    /*
     * ============================================================
     * RESET
     * ============================================================
     */

    function reset() {

        const integration =
            getDomainIntegration();


        if (
            integration &&
            typeof integration.reset ===
            "function"
        ) {

            try {

                return integration.reset();

            } catch (error) {

                return {

                    reset:
                        false,

                    status:
                        "DOMAIN_RESET_ERROR",

                    error:
                        error &&
                        error.message
                            ? error.message
                            : String(error),

                    ...SAFETY_BOUNDARY
                };
            }
        }


        return {

            reset:
                false,

            status:
                "DOMAIN_RESET_API_UNAVAILABLE",

            ...SAFETY_BOUNDARY
        };
    }


    /*
     * ============================================================
     * PUBLIC UI API
     * ============================================================
     */

    const UIController = {

        version:
            VERSION,

        getStatus:
            getStatus,

        getDomainData:
            getDomainData,

        getSystemState:
            getSystemState,

        getIntegrationStatus:
            getIntegrationStatus,

        getDependencies:
            getDependencies,

        process:
            process,

        testDeterminism:
            testDeterminism,

        getSafetyBoundary:
            getSafetyBoundary,

        reset:
            reset
    };


    /*
     * ============================================================
     * PUBLIC EXPORT
     * ============================================================
     *
     * This assignment must execute even when downstream
     * dependencies are not yet available.
     *
     * That keeps the UI controller itself available while
     * accurately reporting the state of its wiring.
     */

    global.SextantDomainSimulatorUI =
        UIController;


    /*
     * ============================================================
     * INITIAL CONTROLLER STATUS
     * ============================================================
     */

    try {

        global.SextantDomainSimulatorUIStatus =
            getStatus();

    } catch (error) {

        global.SextantDomainSimulatorUIStatus = {

            uiVersion:
                VERSION,

            domain:
                "technology-domain",

            ready:
                false,

            error:
                error &&
                error.message
                    ? error.message
                    : String(error),

            safety:
                {
                    ...SAFETY_BOUNDARY
                },

            humanAuthorityRequired:
                true
        };
    }


})(window);