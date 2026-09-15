/*
 * Sextant Protocol™
 * SRPC Technology Domain Simulator Factory
 *
 * File:
 * research/srpc/domain/ScenarioData.js
 *
 * Purpose:
 * Domain scenario data definition.
 *
 * Boundary:
 * DATA ONLY.
 *
 * This file does not execute rules, perform computation,
 * make decisions, or perform physical actions.
 */

(function (global) {
    "use strict";

    const VERSION = "0.1.0-RESEARCH";

    const ScenarioData = {

        version: VERSION,

        domain: "technology-domain",

        purpose:
            "Provide structured scenario input data for the Sextant Protocol™ SRPC domain simulator.",

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
            id: "DOMAIN-SCENARIO-001",
            name: "Technology Domain Baseline Scenario",
            description:
                "Baseline research scenario for validation of the technology-domain SRPC processing chain.",
            status: "RESEARCH"
        },

        inputs: {
            systemState: {
                availability: 100,
                integrity: 100,
                stability: 100
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
            }
        },

        expectedProcessing:

            "Scenario data is supplied to the domain rule and compute layers for deterministic research validation.",

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

    global.SextantScenarioData = ScenarioData;

})(window);