"use strict";

/*
 * Sextant Protocol™
 * Technology Domain Scenario Compute Adapter
 *
 * PURPOSE:
 * Provide the domain-level compute interface while preserving
 * the protected SRPC foundation.
 *
 * ARCHITECTURE:
 *
 * DOMAIN DATA
 *     ↓
 * DOMAIN RULES
 *     ↓
 * DOMAIN SCENARIO
 *     ↓
 * SCENARIO COMPUTE ADAPTER
 *     ↓
 * PROTECTED SRPC COMPUTE
 *     ↓
 * SRPC KERNEL + SRPC RULES
 *
 * DOCTRINE:
 * DATA → ALGORITHMS → COMPUTE
 *
 * SAFETY:
 * - Uses the protected SRPC Compute API.
 * - No replacement of SRPC Kernel.
 * - No replacement of SRPC Rules.
 * - No backend connection.
 * - No external connection.
 * - No physical execution.
 * - No autonomous actuation.
 * - Human authority remains external.
 */

const SEXTANT_SCENARIO_COMPUTE_VERSION =
    "0.1.0-RESEARCH";


/**
 * Validate that the protected SRPC Compute layer
 * is available.
 *
 * This adapter does not recreate SRPC Compute.
 */
function validateScenarioComputeDependencies() {

    const srpcComputeAvailable =
        typeof window.SRPCCompute !== "undefined";

    const srpcKernelAvailable =
        typeof window.SRPCKernel !== "undefined";

    const srpcRulesAvailable =
        typeof window.SRPCRules !== "undefined";

    return {
        valid:
            srpcComputeAvailable &&
            srpcKernelAvailable &&
            srpcRulesAvailable,

        srpcComputeAvailable:
            srpcComputeAvailable,

        srpcKernelAvailable:
            srpcKernelAvailable,

        srpcRulesAvailable:
            srpcRulesAvailable
    };
}


/**
 * Execute the technology-domain scenario through
 * the protected SRPC Compute layer.
 *
 * The domain adapter supplies the input.
 *
 * The protected SRPC Compute layer remains responsible
 * for the actual SRPC processing sequence.
 */
function executeScenarioCompute(input) {

    const dependencies =
        validateScenarioComputeDependencies();

    if (!dependencies.valid) {

        return {
            scenarioComputeVersion:
                SEXTANT_SCENARIO_COMPUTE_VERSION,

            executed: false,

            dependencies:
                dependencies,

            output: null,

            error:
                "Protected SRPC Compute dependencies are unavailable.",

            physicalExecution: false,
            backendConnection: false,
            externalConnection: false,
            autonomousActuation: false,
            humanAuthorizationRequired: true
        };
    }


    /*
     * Delegate directly to the protected SRPC Compute API.
     *
     * Do not duplicate:
     * - SRPCKernel.execute()
     * - SRPCRules.assess()
     * - SRPC determinism logic
     */
    const result =
        window.SRPCCompute.execute(input);


    return {

        scenarioComputeVersion:
            SEXTANT_SCENARIO_COMPUTE_VERSION,

        executed:
            result.executed,

        deterministic:
            result.deterministic,

        computeVersion:
            result.computeVersion,

        kernelVersion:
            result.kernelVersion,

        kernelOutput:
            result.kernelOutput,

        error:
            result.error || null,

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


/**
 * Test deterministic behaviour through the
 * protected SRPC Compute layer.
 */
function testScenarioComputeDeterminism(input) {

    const dependencies =
        validateScenarioComputeDependencies();

    if (!dependencies.valid) {

        return {
            scenarioComputeVersion:
                SEXTANT_SCENARIO_COMPUTE_VERSION,

            deterministic: false,

            status:
                "SCENARIO_COMPUTE_DEPENDENCY_FAILURE",

            dependencies:
                dependencies,

            physicalExecution: false,
            backendConnection: false,
            externalConnection: false,
            autonomousActuation: false,
            humanAuthorizationRequired: true
        };
    }


    /*
     * Delegate deterministic testing to the
     * protected SRPC Compute API.
     */
    const result =
        window.SRPCCompute.testDeterminism(input);


    return {

        scenarioComputeVersion:
            SEXTANT_SCENARIO_COMPUTE_VERSION,

        deterministic:
            result.deterministic,

        status:
            result.deterministic
                ? "SCENARIO_COMPUTE_DETERMINISM_PASS"
                : "SCENARIO_COMPUTE_DETERMINISM_FAIL",

        computeVersion:
            result.computeVersion,

        firstOutput:
            result.firstOutput,

        secondOutput:
            result.secondOutput,

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


/**
 * Return the current domain scenario-compute status.
 */
function getScenarioComputeStatus() {

    const dependencies =
        validateScenarioComputeDependencies();


    let protectedComputeStatus = null;

    if (
        dependencies.srpcComputeAvailable &&
        typeof window.SRPCCompute.getStatus === "function"
    ) {
        protectedComputeStatus =
            window.SRPCCompute.getStatus();
    }


    return {

        scenarioComputeVersion:
            SEXTANT_SCENARIO_COMPUTE_VERSION,

        ready:
            dependencies.valid,

        dependencies:
            dependencies,

        protectedSRPCCompute:
            protectedComputeStatus,

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


/**
 * Public Sextant Protocol™
 * Technology Domain Scenario Compute API.
 *
 * This is an adapter above the protected SRPC layer.
 */
window.SextantScenarioCompute = {

    version:
        SEXTANT_SCENARIO_COMPUTE_VERSION,

    validateDependencies:
        validateScenarioComputeDependencies,

    execute:
        executeScenarioCompute,

    testDeterminism:
        testScenarioComputeDeterminism,

    getStatus:
        getScenarioComputeStatus
};