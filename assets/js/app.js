/*
 * Sextant Protocol™ Cockpit Pro
 * Edge Optimization Control Layer
 *
 * Purpose:
 * - Provide the missing Edge Optimization UI functions.
 * - Make optimizationIntensity the source of truth.
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
        return document.getElementById("optimizationIntensity");
    }

    function getIntensityValueElement() {
        return document.getElementById("intensityValue");
    }

    function getProgressFillElement() {
        return document.getElementById("fill");
    }

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function getOptimizationIntensity() {
        const slider = getOptimizationSlider();

        if (!slider) {
            return 50;
        }

        const value = Number(slider.value);

        if (!Number.isFinite(value)) {
            return 50;
        }

        return clamp(value, 0, 100);
    }

    /*
     * ------------------------------------------------------------
     * UPDATE EDGE OPTIMIZATION DISPLAY
     * ------------------------------------------------------------
     *
     * The slider is the single UI source of truth.
     *
     * All six domains receive the same optimization intensity.
     * This preserves the existing six-domain cockpit structure
     * without inventing independent domain values.
     */

    function updateOptimizationIntensity() {
        const intensity = getOptimizationIntensity();

        const intensityValue = getIntensityValueElement();

        if (intensityValue) {
            intensityValue.textContent = intensity + "%";
        }

        const progressFill = getProgressFillElement();

        if (progressFill) {
            progressFill.style.width = intensity + "%";
        }

        EDGE_DOMAINS.forEach(function (domainId) {
            const element = document.getElementById(domainId);

            if (element) {
                element.textContent = String(intensity);
            }
        });

        /*
         * Keep a simple deterministic state available for other
         * cockpit functions without creating a backend connection.
         */
        window.sextantOptimizationState = {
            intensity: intensity,
            domains: {
                quantization: intensity,
                pruning: intensity,
                graph: intensity,
                memory: intensity,
                kernel: intensity,
                runtime: intensity
            },
            simulationOnly: true,
            externalExecution: false,
            autonomousAuthority: false
        };

        return window.sextantOptimizationState;
    }

    /*
     * ------------------------------------------------------------
     * RUN OPTIMIZATION SYSTEM
     * ------------------------------------------------------------
     */

    function runOptimizationSystem() {
        const state = updateOptimizationIntensity();

        /*
         * Optional status elements are updated only if they already
         * exist in the stable cockpit. No new UI is required.
         */

        const statusElements = [
            "optimizationStatus",
            "edgeOptimizationStatus",
            "systemStatus"
        ];

        statusElements.forEach(function (id) {
            const element = document.getElementById(id);

            if (element && id !== "systemStatus") {
                element.textContent =
                    "EDGE OPTIMIZATION — SIMULATION COMPLETE";
            }
        });

        return {
            status: "PASS",
            intensity: state.intensity,
            domains: state.domains,
            simulationOnly: true,
            externalExecution: false,
            autonomousAuthority: false
        };
    }

    /*
     * ------------------------------------------------------------
     * ACTIVATE OPTIMIZATION SCENARIO
     * ------------------------------------------------------------
     */

    function activateOptimizationScenario() {
        return runOptimizationSystem();
    }

    /*
     * ------------------------------------------------------------
     * RESET OPTIMIZATION
     * ------------------------------------------------------------
     */

    function resetOptimizationIntensity() {
        const slider = getOptimizationSlider();

        if (slider) {
            slider.value = "50";
        }

        return updateOptimizationIntensity();
    }

    /*
     * ------------------------------------------------------------
     * PUBLIC API
     * ------------------------------------------------------------
     *
     * The existing HTML uses inline handlers, so these functions
     * must be available on window.
     */

    window.updateOptimizationIntensity = updateOptimizationIntensity;
    window.runOptimizationSystem = runOptimizationSystem;
    window.activateOptimizationScenario = activateOptimizationScenario;
    window.resetOptimizationIntensity = resetOptimizationIntensity;
    window.getOptimizationIntensity = getOptimizationIntensity;

    /*
     * ------------------------------------------------------------
     * INITIALIZE
     * ------------------------------------------------------------
     *
     * Wait until the DOM is ready before touching the existing UI.
     */

    function initializeEdgeOptimization() {
        updateOptimizationIntensity();
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeEdgeOptimization
        );
    } else {
        initializeEdgeOptimization();
    }

})();