/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario
 *
 * SCENARIO STATE / INPUT LAYER
 *
 * Provides the selected FIN scenario, risk state
 * and simulation inputs to the rule engine.
 *
 * No decision logic is duplicated here.
 * No physical execution.
 * Human Decision Authority remains final.
 */

(function (global) {
    "use strict";

    const FINScenario = {

        name: "FINScenario",
        domain: "FIN",
        version: "1.0.0",

        state: {
            scenarioId: "FIN-001",
            riskState: "GREEN",
            inputs: {}
        },

        safety: {
            simulationOnly: true,
            physicalExecution: false,
            financialExecution: false,
            marketExecution: false,
            autonomousAuthority: false,
            humanDecisionAuthority: true
        },

        getScenarioId: function () {

            return this.state.scenarioId;
        },

        setScenario: function (scenarioId) {

            if (
                typeof scenarioId !== "string" ||
                !global.FINScenarioData ||
                !global.FINScenarioData.scenarios ||
                !global.FINScenarioData.scenarios[scenarioId]
            ) {
                throw new Error(
                    "Invalid FIN scenario: " + scenarioId
                );
            }

            this.state.scenarioId = scenarioId;

            return this.getStatus();
        },

        getRiskState: function () {

            return this.state.riskState;
        },

        setRiskState: function (riskState) {

            const validStates = [
                "GREEN",
                "YELLOW",
                "ORANGE",
                "RED"
            ];

            if (!validStates.includes(riskState)) {
                throw new Error(
                    "Invalid FIN risk state: " + riskState
                );
            }

            this.state.riskState = riskState;

            return this.getStatus();
        },

        setInputs: function (inputs) {

            if (
                inputs === null ||
                typeof inputs !== "object" ||
                Array.isArray(inputs)
            ) {
                throw new Error(
                    "FIN scenario inputs must be an object."
                );
            }

            this.state.inputs = Object.assign(
                {},
                inputs
            );

            return this.state.inputs;
        },

        getInputs: function () {

            return Object.assign(
                {},
                this.state.inputs
            );
        },

        getScenarioData: function () {

            if (
                !global.FINScenarioData ||
                !global.FINScenarioData.scenarios
            ) {
                throw new Error(
                    "FINScenarioData is required."
                );
            }

            const data =
                global.FINScenarioData.scenarios[
                    this.state.scenarioId
                ];

            if (!data) {
                throw new Error(
                    "FIN scenario data not found: " +
                    this.state.scenarioId
                );
            }

            return data;
        },

        validate: function () {

            if (!global.FINScenarioData) {
                throw new Error(
                    "FINScenarioData is required."
                );
            }

            if (
                !global.FINScenarioData.scenarios ||
                !FINScenarioData.scenarios
            ) {
                throw new Error(
                    "FIN scenario data collection is required."
                );
            }

            if (
                !global.FINScenarioData.scenarios[
                    this.state.scenarioId
                ]
            ) {
                throw new Error(
                    "Current FIN scenario is invalid."
                );
            }

            const validStates = [
                "GREEN",
                "YELLOW",
                "ORANGE",
                "RED"
            ];

            if (
                !validStates.includes(
                    this.state.riskState
                )
            ) {
                throw new Error(
                    "Current FIN risk state is invalid."
                );
            }

            return true;
        },

        buildInput: function () {

            this.validate();

            return {
                scenarioId: this.state.scenarioId,
                riskState: this.state.riskState,
                inputs: this.getInputs()
            };
        },

        reset: function () {

            this.state.scenarioId = "FIN-001";
            this.state.riskState = "GREEN";
            this.state.inputs = {};

            return this.getStatus();
        },

        getStatus: function () {

            let valid = false;

            try {
                valid = this.validate();
            } catch (error) {
                valid = false;
            }

            return {
                component: this.name,
                domain: this.domain,
                version: this.version,
                scenarioId: this.state.scenarioId,
                riskState: this.state.riskState,
                valid: valid,
                safety: this.safety
            };
        }
    };

    global.FINScenario = FINScenario;

    if (
        typeof module !== "undefined" &&
        module.exports
    ) {
        module.exports = FINScenario;
    }

})(typeof window !== "undefined" ? window : globalThis);