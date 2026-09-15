/*
 * Sextant Protocol™
 * SRPC Technology Domain Simulator Factory
 *
 * File:
 * research/srpc/domain/DomainSimulatorUI.js
 *
 * Purpose:
 * UI integration controller for the Technology Domain Simulator Factory.
 *
 * Boundary:
 * UI / PRESENTATION INTEGRATION ONLY.
 *
 * Doctrine:
 * DATA → ALGORITHMS → COMPUTE
 *
 * This file:
 * - Reads existing SRPC interfaces.
 * - Requests processing through DomainIntegration.
 * - Displays existing results.
 * - Supports deterministic validation.
 * - Does not contain domain rules.
 * - Does not perform computation.
 * - Does not make autonomous decisions.
 * - Does not perform physical actions.
 *
 * Safety:
 * - Local processing only.
 * - No backend connection.
 * - No external connection.
 * - No physical execution.
 * - No autonomous actuation.
 * - Human authority remains final.
 */

(function (global) {
    "use strict";

    const VERSION = "0.1.0-RESEARCH";

    function getScenarioData() {

        if (
            typeof global.SextantScenarioData ===
            "undefined"
        ) {
            return null;
        }

        return global.SextantScenarioData;
    }

    function getScenario() {

        if (
            typeof global.SextantScenario ===
            "undefined"
        ) {
            return null;
        }

        return global.SextantScenario;
    }

    function getScenarioEngine() {

        if (
            typeof global.SextantScenarioEngine ===
            "undefined"
        ) {
            return null;
        }

        return global.SextantScenarioEngine;
    }

    function getScenarioCompute() {

        if (
            typeof global.SextantScenarioCompute ===
            "undefined"
        ) {
            return null;
        }

        return global.SextantScenarioCompute;
    }

    function getDomainIntegration() {

        if (
            typeof global.SextantDomainIntegration ===
            "undefined"
        ) {
            return null;
        }

        return global.SextantDomainIntegration;
    }

    const DomainSimulatorUI = {

        version: VERSION,

        getStatus: function () {

            const scenarioData =
                getScenarioData();

            const scenario =
                getScenario();

            const scenarioEngine =
                getScenarioEngine();

            const scenarioCompute =
                getScenarioCompute();

            const domainIntegration =
                getDomainIntegration();

            return {

                uiVersion: VERSION,

                scenarioDataAvailable:
                    scenarioData !== null,

                scenarioAvailable:
                    scenario !== null,

                scenarioEngineAvailable:
                    scenarioEngine !== null,

                scenarioComputeAvailable:
                    scenarioCompute !== null,

                domainIntegrationAvailable:
                    domainIntegration !== null,

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

        getDomainData: function () {

            const scenarioData =
                getScenarioData();

            if (!scenarioData) {
                return {
                    available: false,
                    reason:
                        "SextantScenarioData is unavailable."
                };
            }

            return {
                available: true,
                data:
                    scenarioData.getData()
            };
        },

        getScenarioStatus: function () {

            const scenario =
                getScenario();

            if (!scenario) {
                return {
                    available: false,
                    reason:
                        "SextantScenario is unavailable."
                };
            }

            return scenario.getStatus();
        },

        getIntegrationStatus: function () {

            const integration =
                getDomainIntegration();

            if (!integration) {
                return {
                    ready: false,
                    reason:
                        "SextantDomainIntegration is unavailable."
                };
            }

            return integration.getStatus();
        },

        process: function () {

            const integration =
                getDomainIntegration();

            if (!integration) {

                return {
                    success: false,

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

            return integration.process();
        },

        testDeterminism: function () {

            const integration =
                getDomainIntegration();

            if (!integration) {

                return {
                    deterministic: false,

                    status:
                        "DETERMINISM_TEST_ERROR",

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

            return integration.testDeterminism();
        },

        getSystemState: function () {

            const scenario =
                getScenario();

            if (!scenario) {
                return null;
            }

            const inputs =
                scenario.getInputs();

            if (!inputs) {
                return null;
            }

            return inputs.systemState || null;
        },

        getScenarioInputs: function () {

            const scenario =
                getScenario();

            if (!scenario) {
                return null;
            }

            return scenario.getInputs();
        },

        getScenarioDefinition: function () {

            const scenario =
                getScenario();

            if (!scenario) {
                return null;
            }

            return scenario.getScenario();
        },

        validate: function () {

            const scenario =
                getScenario();

            if (!scenario) {

                return {
                    valid: false,

                    reason:
                        "SextantScenario is unavailable."
                };
            }

            return scenario.validate();
        }
    };

    global.SextantDomainSimulatorUI =
        DomainSimulatorUI;

})(window);