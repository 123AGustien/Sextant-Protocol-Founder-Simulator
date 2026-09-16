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
     *
     * DomainIntegration is the authoritative integration boundary.
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
     *
     * Scenario provides authoritative scenario inputs.
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
     *
     * Used only for UI visibility.
     * No rules are created here.
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

            scenarioEngineAvailable:
                false,

            scenarioComputeAvailable:
                false
        };


        if (
            integration &&
            typeof integration.validateDependencies ===
            "function"
        ) {

            integrationDependencies =
                integration.validateDependencies();
        }


        return {

            domainIntegrationAvailable:
                integration !== null,

            scenarioAvailable:
                scenario !== null,

            scenarioDataAvailable:
                scenarioData !== null,

            scenarioEngineAvailable:
                Boolean(
                    integrationDependencies
                        .scenarioEngineAvailable
                ),

            scenarioComputeAvailable:
                Boolean(
                    integrationDependencies
                        .scenarioComputeAvailable
                ),

            valid:
                Boolean(
                    integration &&
                    scenario &&
                    integrationDependencies.valid
                )
        };
    }


    /*
     * ============================================================
     * DOMAIN DATA
     * ============================================================
     *
     * Read-only UI representation of the scenario data.
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

            return scenarioData.getData();
        }


        if (
            typeof scenarioData.getScenarioData ===
            "function"
        ) {

            return scenarioData.getScenarioData();
        }


        return scenarioData;
    }


    /*
     * ============================================================
     * SYSTEM STATE
     * ============================================================
     *
     * The authoritative system state comes from Scenario inputs.
     */

    function getSystemState() {

        const scenario =
            getScenario();

        if (
            scenario &&
            typeof scenario.getInputs ===
            "function"
        ) {

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

            return integration.getStatus();
        }


        const dependencies =
            getDependencies();


        return {

            domainIntegrationVersion:
                VERSION,

            ready:
                false,

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

            ready:
                dependencies.valid &&
                integrationStatus.ready,

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
     * IMPORTANT:
     *
     * DomainIntegration.process()
     * already owns the processing chain.
     *
     * Therefore the UI controller does NOT:
     *
     * - execute rules
     * - construct compute input
     * - call ScenarioCompute directly
     * - duplicate ScenarioEngine logic
     *
     * It simply delegates to DomainIntegration.
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


        /*
         * Authoritative domain processing.
         */

        const result =
            integration.process();


        return result;
    }


    /*
     * ============================================================
     * DETERMINISM TEST
     * ============================================================
     *
     * Delegates directly to the authoritative
     * DomainIntegration deterministic test.
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


        /*
         * Authoritative deterministic test.
         */

        const result =
            integration.testDeterminism();


        return result;
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
     *
     * Reset is delegated only if DomainIntegration
     * explicitly exposes it.
     */

    function reset() {

        const integration =
            getDomainIntegration();


        if (
            integration &&
            typeof integration.reset ===
            "function"
        ) {

            return integration.reset();
        }


        return {

            reset:
                false,

            status:
                "DOMAIN_RESET_API_UNAVAILABLE",

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


    /*
     * ============================================================
     * PUBLIC UI API
     * ============================================================
     *
     * These are the functions expected by the
     * Technology Domain Simulator HTML.
     */

    global.SextantDomainSimulatorUI = {

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
     * INITIAL CONTROLLER STATUS
     * ============================================================
     */

    global.SextantDomainSimulatorUIStatus =
        getStatus();


})(window);