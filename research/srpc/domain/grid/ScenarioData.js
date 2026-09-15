/*
 * Sextant Protocol™
 * Grid Energy Resilience Module
 *
 * File:
 * research/srpc/domain/grid/ScenarioData.js
 *
 * Purpose:
 * Grid domain scenario data definition.
 *
 * Boundary:
 * DATA ONLY.
 *
 * This file does not execute rules, perform computation,
 * make decisions, or perform physical actions.
 */

(function (global) {

    const VERSION = "0.1.0-GRID-RESEARCH";

    const GridScenarioData = {

        version: VERSION,

        domain: "grid",

        purpose:
            "Provide structured scenario input data for the Sextant Protocol™ Grid Energy Resilience research simulator.",

        safety: {
            localProcessingOnly: true,
            deterministic: true,
            backendConnection: false,
            externalConnection: false,
            physicalExecution: false,
            autonomousActuation: false,
            humanAuthorizationRequired: true
        },

        scenario: {
            id: "GRID-SCENARIO-001",
            name: "Grid Energy Resilience Baseline Scenario",
            description:
                "Baseline research scenario for deterministic validation of the Grid Energy Resilience processing chain.",
            status: "RESEARCH"
        },

        inputs: {

            systemState: {
                availability: 100,
                integrity: 100,
                stability: 100
            },

            energy: {
                demandPercent: 50,
                gridLoadPercent: 50,
                renewablePercent: 50,
                nonRenewablePercent: 50,
                carbonIntensity: 50
            },

            network: {
                connectivityPercent: 100,
                packetLossPercent: 0,
                dnsFailures: 0,
                latencyMs: 0
            },

            conditions: {
                operatingCondition: "NORMAL",
                environmentalCondition: "NORMAL",
                externalDependency: "AVAILABLE"
            },

            observations: [],

            failures: [],

            dependencies: [],

            constraints: []
        },

        thresholds: {

            observation: {
                minimum: 0,
                maximum: 100
            },

            integrity: {
                minimum: 0,
                maximum: 100
            },

            stability: {
                minimum: 0,
                maximum: 100
            },

            availability: {
                minimum: 0,
                maximum: 100
            },

            network: {
                connectivityMinimum: 0,
                connectivityMaximum: 100,
                packetLossMinimum: 0,
                packetLossMaximum: 100,
                dnsFailuresMinimum: 0,
                latencyMinimum: 0
            }
        },

        expectedProcessing:
            "Grid scenario data is supplied to the domain rule and compute layers for deterministic research validation.",

        authority: {
            decisionAuthority: "HUMAN_DECISION_AUTHORITY",
            autonomousDecision: false,
            autonomousActuation: false,
            finalAuthority: "HUMAN"
        },

        audit: {
            required: true,
            recordInputState: true,
            recordRuleResults: true,
            recordComputeResults: true,
            recordDecisionSupport: true,
            recordHumanAuthorization: true
        },

        getData: function () {
            return JSON.parse(JSON.stringify(this));
        },

        getScenario: function () {
            return JSON.parse(JSON.stringify(this.scenario));
        },

        getInputs: function () {
            return JSON.parse(JSON.stringify(this.inputs));
        },

        getThresholds: function () {
            return JSON.parse(JSON.stringify(this.thresholds));
        },

        validate: function () {

            return {
                valid:
                    this.safety.localProcessingOnly === true &&
                    this.safety.deterministic === true &&
                    this.safety.backendConnection === false &&
                    this.safety.externalConnection === false &&
                    this.safety.physicalExecution === false &&
                    this.safety.autonomousActuation === false &&
                    this.safety.humanAuthorizationRequired === true,

                version: VERSION,
                domain: this.domain,
                scenarioId: this.scenario.id
            };
        }
    };

    global.SextantGridScenarioData =
        GridScenarioData;

})(window);
