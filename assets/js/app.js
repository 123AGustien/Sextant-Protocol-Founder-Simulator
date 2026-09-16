/*
 * Sextant Protocol™ Cockpit Pro
 * Edge Optimization Control Layer
 *
 * Purpose:
 * - Provide the Edge Optimization UI functions.
 * - Make optimizationIntensity the source of truth.
 * - Support deterministic optimization scenario selection.
 * - Update all six Edge Optimization domain indicators.
 * - Keep the existing Cockpit UI architecture unchanged.
 *
 * Safety:
 * - UI/simulation only.
 * - No backend connection.
 * - No external execution.
 * - No autonomous actuation.
 */

(function () {
    "use strict";


    /*
     * ------------------------------------------------------------
     * EDGE OPTIMIZATION DOMAIN MODEL
     * ------------------------------------------------------------
     */

    const EDGE_DOMAINS = [
        "domainQuantization",
        "domainPruning",
        "domainGraph",
        "domainMemory",
        "domainKernel",
        "domainRuntime"
    ];


    /*
     * ------------------------------------------------------------
     * HELPERS
     * ------------------------------------------------------------
     */

    function getOptimizationSlider() {

        return document.getElementById(
            "optimizationIntensity"
        );

    }


    function getIntensityValueElement() {

        return document.getElementById(
            "intensityValue"
        );

    }


    function getProgressFillElement() {

        return document.getElementById(
            "fill"
        );

    }


    function clamp(value, min, max) {

        return Math.min(
            Math.max(value, min),
            max
        );

    }


    function getOptimizationIntensity() {

        const slider =
            getOptimizationSlider();


        if (!slider) {

            return 50;

        }


        const value =
            Number(slider.value);


        if (!Number.isFinite(value)) {

            return 50;

        }


        return clamp(
            value,
            0,
            100
        );

    }


    /*
     * ------------------------------------------------------------
     * UPDATE EDGE OPTIMIZATION DISPLAY
     * ------------------------------------------------------------
     *
     * The slider remains the single UI source of truth
     * for optimization intensity.
     *
     * Scenario selection is maintained separately.
     *
     * All six domains receive the same optimization intensity.
     */

    function updateOptimizationIntensity() {

        const intensity =
            getOptimizationIntensity();


        const intensityValue =
            getIntensityValueElement();


        if (intensityValue) {

            intensityValue.textContent =
                intensity + "%";

        }


        const progressFill =
            getProgressFillElement();


        if (progressFill) {

            progressFill.style.width =
                intensity + "%";

        }


        EDGE_DOMAINS.forEach(
            function (domainId) {

                const element =
                    document.getElementById(
                        domainId
                    );


                if (element) {

                    element.textContent =
                        String(intensity);

                }

            }
        );


        /*
         * Preserve the currently selected scenario
         * when intensity changes.
         */

        const currentScenario =
            window.sextantOptimizationState &&
            window.sextantOptimizationState.scenario
                ? window.sextantOptimizationState.scenario
                : "NORMAL";


        /*
         * Keep a deterministic local state available
         * for other cockpit functions.
         */

        window.sextantOptimizationState = {

            intensity:
                intensity,

            scenario:
                currentScenario,

            domains: {

                quantization:
                    intensity,

                pruning:
                    intensity,

                graph:
                    intensity,

                memory:
                    intensity,

                kernel:
                    intensity,

                runtime:
                    intensity

            },

            simulationOnly:
                true,

            externalExecution:
                false,

            autonomousAuthority:
                false

        };


        return window.sextantOptimizationState;

    }


    /*
     * ------------------------------------------------------------
     * RUN OPTIMIZATION SYSTEM
     * ------------------------------------------------------------
     */

    function runOptimizationSystem() {

        const state =
            updateOptimizationIntensity();


        /*
         * Optional status elements are updated only
         * if they already exist in the stable cockpit.
         */

        const statusElements = [

            "optimizationStatus",

            "edgeOptimizationStatus",

            "systemStatus"

        ];


        statusElements.forEach(
            function (id) {

                const element =
                    document.getElementById(id);


                if (
                    element &&
                    id !== "systemStatus"
                ) {

                    element.textContent =
                        "EDGE OPTIMIZATION — SIMULATION COMPLETE";

                }

            }
        );


        return {

            status:
                "PASS",

            intensity:
                state.intensity,

            scenario:
                state.scenario,

            domains:
                state.domains,

            simulationOnly:
                true,

            externalExecution:
                false,

            autonomousAuthority:
                false

        };

    }


    /*
     * ------------------------------------------------------------
     * ACTIVATE OPTIMIZATION SCENARIO
     * ------------------------------------------------------------
     *
     * Existing HTML calls:
     *
     * activateOptimizationScenario("NORMAL")
     * activateOptimizationScenario("QUANTIZATION_STRESS")
     * etc.
     *
     * The selected scenario is now retained in the
     * deterministic local optimization state.
     */

    function activateOptimizationScenario(
        scenario
    ) {

        const allowedScenarios = [

            "NORMAL",

            "QUANTIZATION_STRESS",

            "PRUNING_STRESS",

            "GRAPH_OPTIMIZATION",

            "MEMORY_PRESSURE",

            "KERNEL_STRESS",

            "RUNTIME",

            "EDGE_LOAD",

            "LATENCY_STRESS",

            "THERMAL_STRESS"

        ];


        /*
         * Reject unknown scenario names
         * without creating unsafe state.
         */

        if (
            !allowedScenarios.includes(
                scenario
            )
        ) {

            scenario =
                "NORMAL";

        }


        const state =
            updateOptimizationIntensity();


        /*
         * Preserve the existing state model
         * while adding the selected scenario.
         */

        window.sextantOptimizationState = {

            ...state,

            scenario:
                scenario,

            simulationOnly:
                true,

            externalExecution:
                false,

            autonomousAuthority:
                false

        };


        /*
         * Update the existing scenario panel.
         */

        const panel =
            document.getElementById(
                "scenarioPanel"
            );


        if (panel) {

            panel.textContent =

                "EDGE OPTIMIZATION SCENARIO\n\n" +

                "Scenario: " +
                scenario +
                "\n" +

                "Intensity: " +
                state.intensity +
                "%\n\n" +

                "Status: ACTIVE — SIMULATION ONLY";

        }


        /*
         * Update the existing system status.
         */

        const systemStatus =
            document.getElementById(
                "systemStatus"
            );


        if (systemStatus) {

            systemStatus.textContent =
                "SYSTEM STATUS: EDGE SCENARIO — " +
                scenario;

        }


        console.log(
            "EDGE SCENARIO ACTIVATED:",
            scenario
        );


        return window.sextantOptimizationState;

    }


    /*
     * ------------------------------------------------------------
     * RESET OPTIMIZATION INTENSITY
     * ------------------------------------------------------------
     */

    function resetOptimizationIntensity() {

        const slider =
            getOptimizationSlider();


        if (slider) {

            slider.value =
                "50";

        }


        return updateOptimizationIntensity();

    }


    /*
     * ------------------------------------------------------------
     * RESET OPTIMIZATION SCENARIO
     * ------------------------------------------------------------
     *
     * Existing HTML uses:
     *
     * resetOptimizationScenario()
     *
     * This restores the scenario to NORMAL,
     * restores intensity to 50%,
     * and resets the existing scenario display.
     */

    function resetOptimizationScenario() {

        const slider =
            getOptimizationSlider();


        if (slider) {

            slider.value =
                "50";

        }


        const state =
            updateOptimizationIntensity();


        window.sextantOptimizationState = {

            ...state,

            scenario:
                "NORMAL",

            intensity:
                50,

            simulationOnly:
                true,

            externalExecution:
                false,

            autonomousAuthority:
                false

        };


        const panel =
            document.getElementById(
                "scenarioPanel"
            );


        if (panel) {

            panel.textContent =
                "Waiting...";

        }


        const systemStatus =
            document.getElementById(
                "systemStatus"
            );


        if (systemStatus) {

            systemStatus.textContent =
                "SYSTEM STATUS: READY — EDGE OPTIMIZATION + GRID RESEARCH";

        }


        console.log(
            "EDGE OPTIMIZATION SCENARIO RESET"
        );


        return window.sextantOptimizationState;

    }


    /*
     * ------------------------------------------------------------
     * PUBLIC API
     * ------------------------------------------------------------
     *
     * The existing HTML uses inline handlers,
     * therefore these functions must be available
     * on window.
     */

    window.updateOptimizationIntensity =
        updateOptimizationIntensity;


    window.runOptimizationSystem =
        runOptimizationSystem;


    window.activateOptimizationScenario =
        activateOptimizationScenario;


    window.resetOptimizationIntensity =
        resetOptimizationIntensity;


    window.resetOptimizationScenario =
        resetOptimizationScenario;


    window.getOptimizationIntensity =
        getOptimizationIntensity;


    /*
     * ------------------------------------------------------------
     * INITIALIZE
     * ------------------------------------------------------------
     *
     * Wait until the DOM is ready before touching
     * the existing cockpit UI.
     */

    function initializeEdgeOptimization() {

        updateOptimizationIntensity();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeEdgeOptimization
        );

    } else {

        initializeEdgeOptimization();

    }


})();