 /*
  * Sextant Protocol™
  * Grid Energy Resilience Scenario
  *
  * File:
  * research/srpc/domain/grid/Scenario.js
  *
  * Purpose:
  * Provide the Grid scenario facade used by the
  * Grid Scenario Engine.
  *
  * Boundary:
  * SCENARIO ONLY.
  *
  * This file does not execute rules, perform computation,
  * make decisions, or perform physical actions.
  */

(function (global) {

    const GridScenario = {

        version: "0.1.0-GRID-RESEARCH",

        domain: "grid",

        scenarioId: "GRID-SCENARIO-001",

        name:
            "Grid Energy Resilience Baseline Scenario",

        getScenario: function () {

            if (
                !global.SextantGridScenarioData
            ) {

                return {
                    id: this.scenarioId,
                    name: this.name,
                    status: "SCENARIO_DATA_UNAVAILABLE"
                };

            }

            return global.SextantGridScenarioData
                .getScenario();

        },

        getInputs: function () {

            if (
                !global.SextantGridScenarioData
            ) {

                return {};

            }

            return global.SextantGridScenarioData
                .getInputs();

        },

        getThresholds: function () {

            if (
                !global.SextantGridScenarioData
            ) {

                return {};

            }

            return global.SextantGridScenarioData
                .getThresholds();

        },

        validate: function () {

            if (
                !global.SextantGridScenarioData
            ) {

                return {

                    valid: false,

                    version:
                        this.version,

                    domain:
                        this.domain,

                    scenarioId:
                        this.scenarioId,

                    reason:
                        "GRID_SCENARIO_DATA_UNAVAILABLE"

                };

            }

            return global.SextantGridScenarioData
                .validate();

        }

    };

    global.SextantGridScenario =
        GridScenario;

})(window);