/*
 * Sextant Protocol™
 * SRPC Technology Domain Simulator Factory
 *
 * File:
 * research/srpc/domain/Scenario.js
 *
 * Purpose:
 * Provide the domain scenario interface.
 *
 * Boundary:
 * SCENARIO DEFINITION AND ACCESS ONLY.
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

    function getScenarioData() {

        if (
            typeof global.SextantScenarioData ===
            "undefined"
        ) {
            return null;
        }

        return global.SextantScenarioData;
    }

    const Scenario = {

        version: VERSION,

        domain: "technology-domain",

        validateDependencies: function () {

            const dataAvailable =
                getScenarioData() !== null;

            return {
                valid: dataAvailable,

                scenarioDataAvailable:
                    dataAvailable
            };
        },

        getData: function () {

            const dependencies =
                this.validateDependencies();

            if (!dependencies.valid) {
                return null;
            }

            return getScenarioData().getData();
        },

        getScenario: function () {

            const dependencies =
                this.validateDependencies();

            if (!dependencies.valid) {
                return null;
            }

            return getScenarioData()
                .getScenario();
        },

        getInputs: function () {

            const dependencies =
                this.validateDependencies();

            if (!dependencies.valid) {
                return null;
            }

            return getScenarioData()
                .getInputs();
        },

        getThresholds: function () {

            const dependencies =
                this.validateDependencies();

            if (!dependencies.valid) {
                return null;
            }

            return getScenarioData()
                .getThresholds();
        },

        validate: function () {

            const dependencies =
                this.validateDependencies();

            if (!dependencies.valid) {

                return {
                    valid: false,

                    reason:
                        "ScenarioData is unavailable.",

                    dependencies:
                        dependencies
                };
            }

            const validation =
                getScenarioData()
                    .validate();

            return {

                valid:
                    validation.valid,

                version:
                    VERSION,

                domain:
                    validation.domain,

                scenarioId:
                    validation.scenarioId,

                dependencies:
                    dependencies
            };
        },

        getStatus: function () {

            const dependencies =
                this.validateDependencies();

            return {

                scenarioVersion:
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

    global.SextantScenario =
        Scenario;

})(window);