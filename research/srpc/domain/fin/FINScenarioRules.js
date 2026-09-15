/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Rules
 *
 * SCENARIO ALGORITHM MAPPING LAYER
 *
 * Maps each FIN scenario to its governed
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 * sequence.
 *
 * Does not execute rules.
 * Does not duplicate scenario data.
 * Does not perform physical or financial execution.
 */

(function (global) {
    "use strict";

    const FINScenarioRules = {

        domain: "FIN",
        domainName: "Financial Resilience",
        version: "1.0.0",

        evaluationSequence: [
            "OBSERVE",
            "VERIFY",
            "ASSESS",
            "DECIDE",
            "ACT",
            "UPDATE"
        ],

        riskStates: [
            "GREEN",
            "YELLOW",
            "ORANGE",
            "RED"
        ],

        scenarios: {

            "FIN-001": {
                id: "FIN-001",
                ruleId: "FIN-001",
                name: "FX Stress (SGD/IDR)",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "SGD/IDR exchange rate",
                        "Daily FX volatility",
                        "Capital inflow/outflow trends",
                        "Foreign reserve pressure",
                        "Government bond market activity",
                        "Central bank policy actions"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false
                },

                assess: {
                    GREEN: "Normal FX conditions.",
                    YELLOW: "Early FX volatility and increased monitoring requirement.",
                    ORANGE: "Sustained currency pressure and elevated financial stress.",
                    RED: "Severe FX instability and broad financial-market stress."
                },

                decide: {
                    GREEN: "MAINTAIN_NORMAL_MONITORING",
                    YELLOW: "INCREASE_FX_MONITORING",
                    ORANGE: "PREPARE_FX_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_RISK_REVIEW"
                },

                cascadeSource: "FINRules",

                affectedDomainsSource: "FINRules"
            },

            "FIN-002": {
                id: "FIN-002",
                ruleId: "FIN-002",
                name: "Bond Outflow Stress",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Government bond yields",
                        "Foreign investor bond holdings",
                        "Daily bond trading volume",
                        "Bond volatility",
                        "Capital outflow trends",
                        "Credit spread movements"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false
                },

                assess: {
                    GREEN: "Normal bond-market liquidity and confidence.",
                    YELLOW: "Early reduction in bond-market liquidity.",
                    ORANGE: "Significant bond outflows and increased market stress.",
                    RED: "Severe bond-market disruption and broad instability."
                },

                decide: {
                    GREEN: "MAINTAIN_NORMAL_MONITORING",
                    YELLOW: "INCREASE_BOND_MARKET_MONITORING",
                    ORANGE: "PREPARE_BOND_MARKET_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_RISK_REVIEW"
                },

                cascadeSource: "FINRules",

                affectedDomainsSource: "FINRules"
            },

            "FIN-003": {
                id: "FIN-003",
                ruleId: "FIN-003",
                name: "Liquidity Stress",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Interbank lending rates",
                        "Liquidity coverage ratios",
                        "Cash reserves",
                        "Funding spreads",
                        "Overnight borrowing",
                        "Short-term money-market conditions"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false
                },

                assess: {
                    GREEN: "Normal funding and liquidity conditions.",
                    YELLOW: "Early liquidity tightening.",
                    ORANGE: "Significant liquidity and funding stress.",
                    RED: "Severe liquidity disruption and systemic funding stress."
                },

                decide: {
                    GREEN: "MAINTAIN_NORMAL_MONITORING",
                    YELLOW: "INCREASE_LIQUIDITY_MONITORING",
                    ORANGE: "PREPARE_LIQUIDITY_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_LIQUIDITY_REVIEW"
                },

                cascadeSource: "FINRules",

                affectedDomainsSource: "FINRules"
            },

            "FIN-004": {
                id: "FIN-004",
                ruleId: "FIN-004",
                name: "Banking Stress",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Capital adequacy ratio (CAR)",
                        "Non-performing loan (NPL) ratio",
                        "Loan-to-deposit ratio (LDR)",
                        "Deposit withdrawal trends",
                        "Interbank lending activity",
                        "Bank funding spreads",
                        "Credit default indicators"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false
                },

                assess: {
                    GREEN: "Stable banking conditions with adequate capital and liquidity.",
                    YELLOW: "Early banking stress requiring increased monitoring.",
                    ORANGE: "Significant banking stress with funding and credit pressure.",
                    RED: "Severe banking instability and widespread financial stress."
                },

                decide: {
                    GREEN: "MAINTAIN_NORMAL_MONITORING",
                    YELLOW: "INCREASE_BANKING_SUPERVISION",
                    ORANGE: "PREPARE_BANKING_CONTINGENCY",
                    RED: "ESCALATE_BANKING_SYSTEM_RISK_REVIEW"
                },

                cascadeSource: "FINRules",

                affectedDomainsSource: "FINRules"
            },

            "FIN-005": {
                id: "FIN-005",
                ruleId: "FIN-005",
                name: "Inflation Shock",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Consumer Price Index (CPI)",
                        "Core inflation",
                        "Producer Price Index (PPI)",
                        "Interest-rate changes",
                        "Wage growth",
                        "Exchange-rate movements",
                        "Energy and commodity prices"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false
                },

                assess: {
                    GREEN: "Stable inflation conditions.",
                    YELLOW: "Early inflationary pressure.",
                    ORANGE: "Persistent above-target inflation and increasing economic pressure.",
                    RED: "Severe inflation instability and widespread financial stress."
                },

                decide: {
                    GREEN: "MAINTAIN_NORMAL_MONITORING",
                    YELLOW: "INCREASE_INFLATION_MONITORING",
                    ORANGE: "PREPARE_INFLATION_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_RISK_REVIEW"
                },

                cascadeSource: "FINRules",

                affectedDomainsSource: "FINRules"
            }
        },

        crossScenarioModel: {

            enabled: true,

            scenarios: [
                "FIN-001",
                "FIN-002",
                "FIN-003",
                "FIN-004",
                "FIN-005"
            ],

            relationships: [
                {
                    from: "FIN-001",
                    to: "FIN-003",
                    relationship: "potential_liquidity_pressure"
                },
                {
                    from: "FIN-001",
                    to: "FIN-005",
                    relationship: "potential_inflation_pressure"
                },
                {
                    from: "FIN-002",
                    to: "FIN-003",
                    relationship: "potential_liquidity_pressure"
                },
                {
                    from: "FIN-003",
                    to: "FIN-004",
                    relationship: "potential_banking_stress"
                },
                {
                    from: "FIN-005",
                    to: "FIN-004",
                    relationship: "potential_financial_pressure"
                }
            ],

            note:
                "Cross-scenario relationships represent simulation " +
                "dependencies and possible propagation paths only. " +
                "They do not represent inevitable outcomes."
        },

        outputRequirements: [
            "Risk Level",
            "Cascade Path",
            "Affected Domains",
            "Recommended Contingency Actions",
            "Audit Log Entry"
        ],

        authorityBoundary: {

            autonomousDecision: false,

            autonomousActuation: false,

            physicalExecution: false,

            financialExecution: false,

            marketExecution: false,

            humanDecisionAuthority: true,

            note:
                "Scenario rules may structure and map a simulated " +
                "decision path. Final authority remains human."
        }
    };

    global.FINScenarioRules = FINScenarioRules;

    if (typeof module !== "undefined" && module.exports) {
        module.exports = FINScenarioRules;
    }

})(typeof window !== "undefined" ? window : globalThis);