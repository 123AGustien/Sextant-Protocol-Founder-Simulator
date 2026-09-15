/*
 * Sextant Protocol™
 * Grid Energy Resilience Scenario Rules
 *
 * File:
 * research/srpc/domain/grid/ScenarioRules.js
 *
 * Purpose:
 * Define deterministic scenario-specific Grid Energy Resilience rules.
 *
 * Boundary:
 * ALGORITHMS / SCENARIO RULES ONLY.
 *
 * This file does not contain primary scenario data,
 * execute physical actions, provide autonomous control,
 * or connect to external systems.
 */

(function (global) {

    const GridScenarioRules = {

        version: "0.1.0-GRID-RESEARCH",

        domain: "grid",

        scenarioId: "GRID-SCENARIO-001",

        rules: [

            /*
             * GRID-SCENARIO-RULE-001
             *
             * Grid Resilience Baseline
             *
             * Evaluate the combined condition of:
             * availability, integrity and stability.
             */

            {
                id: "GRID-SCENARIO-RULE-001",

                name:
                    "Grid Resilience Baseline",

                description:
                    "Evaluate baseline grid resilience from availability, integrity and stability.",

                evaluate: function (inputs) {

                    const systemState =
                        inputs &&
                        inputs.systemState
                            ? inputs.systemState
                            : {};

                    const availability =
                        typeof systemState.availability === "number"
                            ? systemState.availability
                            : null;

                    const integrity =
                        typeof systemState.integrity === "number"
                            ? systemState.integrity
                            : null;

                    const stability =
                        typeof systemState.stability === "number"
                            ? systemState.stability
                            : null;

                    const valid =
                        availability !== null &&
                        integrity !== null &&
                        stability !== null;

                    const average =
                        valid
                            ? (
                                availability +
                                integrity +
                                stability
                            ) / 3
                            : null;

                    const passed =
                        valid &&
                        average >= 0 &&
                        average <= 100;

                    let assessment =
                        "INVALID";

                    if (passed) {

                        if (average >= 80) {

                            assessment =
                                "RESILIENT";

                        } else if (average >= 60) {

                            assessment =
                                "DEGRADED";

                        } else {

                            assessment =
                                "CRITICAL";

                        }

                    }

                    return {

                        ruleId:
                            "GRID-SCENARIO-RULE-001",

                        passed:
                            passed,

                        availability:
                            availability,

                        integrity:
                            integrity,

                        stability:
                            stability,

                        averageResilience:
                            average,

                        assessment:
                            assessment

                    };

                }

            },

            /*
             * GRID-SCENARIO-RULE-002
             *
             * Demand and Load Alignment
             */

            {
                id: "GRID-SCENARIO-RULE-002",

                name:
                    "Demand and Load Alignment",

                description:
                    "Evaluate the variance between energy demand and grid load.",

                evaluate: function (inputs) {

                    const energy =
                        inputs &&
                        inputs.energy
                            ? inputs.energy
                            : {};

                    const demand =
                        typeof energy.demandPercent === "number"
                            ? energy.demandPercent
                            : null;

                    const load =
                        typeof energy.gridLoadPercent === "number"
                            ? energy.gridLoadPercent
                            : null;

                    const variance =
                        demand !== null &&
                        load !== null
                            ? Math.abs(demand - load)
                            : null;

                    const passed =
                        variance !== null &&
                        variance <= 20;

                    let assessment =
                        "INVALID";

                    if (passed) {

                        if (variance <= 10) {

                            assessment =
                                "ALIGNED";

                        } else {

                            assessment =
                                "ACCEPTABLE_VARIANCE";

                        }

                    } else if (variance !== null) {

                        assessment =
                            "SIGNIFICANT_VARIANCE";

                    }

                    return {

                        ruleId:
                            "GRID-SCENARIO-RULE-002",

                        passed:
                            passed,

                        demandPercent:
                            demand,

                        gridLoadPercent:
                            load,

                        variancePercent:
                            variance,

                        assessment:
                            assessment

                    };

                }

            },

            /*
             * GRID-SCENARIO-RULE-003
             *
             * Energy Composition Validation
             */

            {
                id: "GRID-SCENARIO-RULE-003",

                name:
                    "Energy Composition Validation",

                description:
                    "Validate that renewable and non-renewable energy composition totals 100 percent.",

                evaluate: function (inputs) {

                    const energy =
                        inputs &&
                        inputs.energy
                            ? inputs.energy
                            : {};

                    const renewable =
                        typeof energy.renewablePercent === "number"
                            ? energy.renewablePercent
                            : null;

                    const nonRenewable =
                        typeof energy.nonRenewablePercent === "number"
                            ? energy.nonRenewablePercent
                            : null;

                    const total =
                        renewable !== null &&
                        nonRenewable !== null
                            ? renewable + nonRenewable
                            : null;

                    const passed =
                        total === 100;

                    return {

                        ruleId:
                            "GRID-SCENARIO-RULE-003",

                        passed:
                            passed,

                        renewablePercent:
                            renewable,

                        nonRenewablePercent:
                            nonRenewable,

                        totalPercent:
                            total,

                        assessment:
                            passed
                                ? "VALID_COMPOSITION"
                                : "INVALID_COMPOSITION"

                    };

                }

            },

            /*
             * GRID-SCENARIO-RULE-004
             *
             * Regional Network Outage
             *
             * Research/V&V rule only.
             * No physical or autonomous action is executed.
             */

            {
                id: "GRID-SCENARIO-RULE-004",

                name:
                    "Regional Network Outage",

                description:
                    "Evaluate network connectivity conditions and identify potential cross-domain resilience exposure.",

                evaluate: function (inputs) {

                    const network =
                        inputs &&
                        inputs.network
                            ? inputs.network
                            : {};

                    const connectivity =
                        typeof network.connectivityPercent === "number"
                            ? network.connectivityPercent
                            : null;

                    const packetLoss =
                        typeof network.packetLossPercent === "number"
                            ? network.packetLossPercent
                            : null;

                    const dnsFailures =
                        typeof network.dnsFailures === "number"
                            ? network.dnsFailures
                            : null;

                    const latency =
                        typeof network.latencyMs === "number"
                            ? network.latencyMs
                            : null;

                    const valid =
                        connectivity !== null &&
                        packetLoss !== null &&
                        dnsFailures !== null &&
                        latency !== null;

                    let risk =
                        "UNKNOWN";

                    if (valid) {

                        if (
                            connectivity >= 95 &&
                            packetLoss <= 1 &&
                            dnsFailures === 0 &&
                            latency <= 50
                        ) {

                            risk =
                                "GREEN";

                        } else if (
                            connectivity >= 80 &&
                            packetLoss <= 5 &&
                            dnsFailures <= 2 &&
                            latency <= 150
                        ) {

                            risk =
                                "YELLOW";

                        } else if (
                            connectivity >= 60
                        ) {

                            risk =
                                "ORANGE";

                        } else {

                            risk =
                                "RED";

                        }

                    }

                    const passed =
                        valid &&
                        risk !== "RED";

                    const affectedDomains =
                        connectivity !== null &&
                        connectivity < 80
                            ? [
                                "INF",
                                "DC",
                                "CYB",
                                "FIN"
                            ]
                            : [];

                    const cascadePath =
                        affectedDomains.length > 0
                            ? [
                                "NETWORK",
                                "INFRASTRUCTURE",
                                "DATA_CENTRE",
                                "CYBER",
                                "FINANCIAL"
                            ]
                            : [];

                    const recommendedContingencyActions =
                        risk === "RED"
                            ? [
                                "REQUEST_DIAGNOSTICS",
                                "MAINTAIN_SAFE_STATE",
                                "ESCALATE"
                            ]
                            : risk === "ORANGE"
                                ? [
                                    "REQUEST_DIAGNOSTICS",
                                    "MAINTAIN_SAFE_STATE"
                                ]
                                : [
                                    "MAINTAIN_SAFE_STATE"
                                ];

                    return {

                        ruleId:
                            "GRID-SCENARIO-RULE-004",

                        passed:
                            passed,

                        connectivityPercent:
                            connectivity,

                        packetLossPercent:
                            packetLoss,

                        dnsFailures:
                            dnsFailures,

                        latencyMs:
                            latency,

                        risk:
                            risk,

                        affectedDomains:
                            affectedDomains,

                        cascadePath:
                            cascadePath,

                        recommendedContingencyActions:
                            recommendedContingencyActions,

                        humanAuthorizationRequired:
                            true,

                        autonomousDecision:
                            false,

                        autonomousActuation:
                            false,

                        physicalExecution:
                            false

                    };

                }

            }

        ],

        getRules: function () {

            return this.rules;

        },

        getRuleCount: function () {

            return this.rules.length;

        },

        getRule: function (ruleId) {

            return this.rules.find(

                function (rule) {

                    return rule.id === ruleId;

                }

            );

        }

    };

    /*
     * IMPORTANT:
     * This is deliberately a different global namespace
     * from Rules.js.
     */

    global.SextantGridScenarioRules =
        GridScenarioRules;

})(window);