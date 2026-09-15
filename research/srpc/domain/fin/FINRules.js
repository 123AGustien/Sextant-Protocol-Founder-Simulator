/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Rules
 *
 * ALGORITHMS / RULE DEFINITION LAYER
 *
 * DATA remains in FINScenarioData.js.
 * Execution remains in FINRuleEngine.js.
 *
 * No prediction.
 * No investment advice.
 * No banking transaction execution.
 * Human Decision Authority remains final.
 */

(function (global) {
    "use strict";

    const FINRules = {

        domain: "FIN",
        domainName: "Financial Resilience",
        version: "1.0.0",

        purpose:
            "Deterministic financial resilience decision rules " +
            "for simulation and contingency planning.",

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

        rules: {

            "FIN-001": {

                id: "FIN-001",
                name: "FX Stress (SGD/IDR)",
                category: "Foreign Exchange (FX)",

                observe: [
                    "SGD/IDR exchange rate",
                    "Daily FX volatility",
                    "Capital inflow/outflow trends",
                    "Foreign reserve pressure",
                    "Government bond market activity",
                    "Central bank policy actions"
                ],

                verify: [
                    "Confirm selected FX risk state.",
                    "Confirm scenario data is available.",
                    "Confirm required indicators are represented.",
                    "Confirm no unsupported numerical threshold is introduced."
                ],

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

                cascade: {
                    GREEN: [],
                    YELLOW: [
                        "FX Volatility → Increased Monitoring"
                    ],
                    ORANGE: [
                        "FX Stress → Inflation Pressure",
                        "Inflation Pressure → Interest Rate Pressure",
                        "Interest Rate Pressure → Liquidity Tightening"
                    ],
                    RED: [
                        "FX Crisis → Banking Stress",
                        "Banking Stress → Corporate Funding Stress",
                        "Corporate Funding Stress → Cross-Domain Systemic Risk"
                    ]
                },

                affectedDomains: [
                    "FIN",
                    "INF",
                    "CYB",
                    "DC"
                ]
            },

            "FIN-002": {

                id: "FIN-002",
                name: "Bond Outflow Stress",
                category: "Sovereign Bond Market",

                observe: [
                    "Government bond yields",
                    "Foreign investor bond holdings",
                    "Daily bond trading volume",
                    "Bond volatility",
                    "Capital outflow trends",
                    "Credit spread movements"
                ],

                verify: [
                    "Confirm selected bond-market risk state.",
                    "Confirm scenario data is available.",
                    "Confirm required bond indicators are represented.",
                    "Confirm no unsupported numerical threshold is introduced."
                ],

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

                cascade: {
                    GREEN: [],
                    YELLOW: [
                        "Bond Liquidity Pressure → Increased Monitoring"
                    ],
                    ORANGE: [
                        "Bond Outflow → Higher Borrowing Costs",
                        "Higher Borrowing Costs → Liquidity Tightening",
                        "Liquidity Tightening → Financial Market Stress"
                    ],
                    RED: [
                        "Bond Market Crisis → Funding Stress",
                        "Funding Stress → Banking Sector Pressure",
                        "Banking Sector Pressure → Systemic Financial Risk"
                    ]
                },

                affectedDomains: [
                    "FIN",
                    "INF",
                    "CYB",
                    "DC"
                ]
            },

            "FIN-003": {

                id: "FIN-003",
                name: "Liquidity Stress",
                category: "Liquidity Risk",

                observe: [
                    "Interbank lending rates",
                    "Liquidity coverage ratios",
                    "Cash reserves",
                    "Funding spreads",
                    "Overnight borrowing",
                    "Short-term money-market conditions"
                ],

                verify: [
                    "Confirm selected liquidity risk state.",
                    "Confirm scenario data is available.",
                    "Confirm required liquidity indicators are represented.",
                    "Confirm no unsupported numerical threshold is introduced."
                ],

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

                cascade: {
                    GREEN: [],
                    YELLOW: [
                        "Liquidity Tightening → Increased Monitoring"
                    ],
                    ORANGE: [
                        "Liquidity Stress → Funding Constraints",
                        "Funding Constraints → Credit Tightening",
                        "Credit Tightening → Financial Market Pressure"
                    ],
                    RED: [
                        "Liquidity Crisis → Banking Sector Stress",
                        "Banking Sector Stress → Credit Market Disruption",
                        "Credit Market Disruption → Systemic Financial Instability"
                    ]
                },

                affectedDomains: [
                    "FIN",
                    "INF",
                    "CYB",
                    "DC"
                ]
            },

            "FIN-004": {

                id: "FIN-004",
                name: "Banking Stress",
                category: "Banking System Stability",

                observe: [
                    "Capital adequacy ratio (CAR)",
                    "Non-performing loan (NPL) ratio",
                    "Loan-to-deposit ratio (LDR)",
                    "Deposit withdrawal trends",
                    "Interbank lending activity",
                    "Bank funding spreads",
                    "Credit default indicators"
                ],

                verify: [
                    "Confirm selected banking risk state.",
                    "Confirm scenario data is available.",
                    "Confirm required banking indicators are represented.",
                    "Confirm no unsupported numerical threshold is introduced."
                ],

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

                cascade: {
                    GREEN: [],
                    YELLOW: [
                        "Early Banking Stress → Increased Supervisory Monitoring"
                    ],
                    ORANGE: [
                        "Banking Stress → Credit Tightening",
                        "Credit Tightening → Reduced Lending",
                        "Reduced Lending → Economic Slowdown"
                    ],
                    RED: [
                        "Banking Crisis → Financial Market Disruption",
                        "Financial Market Disruption → Economic Contraction",
                        "Economic Contraction → Cross-Domain Systemic Risk"
                    ]
                },

                affectedDomains: [
                    "FIN",
                    "INF",
                    "CYB",
                    "DC"
                ]
            },

            "FIN-005": {

                id: "FIN-005",
                name: "Inflation Shock",
                category: "Inflation Risk",

                observe: [
                    "Consumer Price Index (CPI)",
                    "Core inflation",
                    "Producer Price Index (PPI)",
                    "Interest-rate changes",
                    "Wage growth",
                    "Exchange-rate movements",
                    "Energy and commodity prices"
                ],

                verify: [
                    "Confirm selected inflation risk state.",
                    "Confirm scenario data is available.",
                    "Confirm required inflation indicators are represented.",
                    "Confirm no unsupported numerical threshold is introduced."
                ],

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

                cascade: {
                    GREEN: [],
                    YELLOW: [
                        "Inflation Pressure → Increased Monitoring"
                    ],
                    ORANGE: [
                        "Inflation Shock → Interest Rate Increases",
                        "Interest Rate Increases → Reduced Consumer Spending",
                        "Reduced Consumer Spending → Economic Slowdown"
                    ],
                    RED: [
                        "Inflation Crisis → Financial Market Stress",
                        "Financial Market Stress → Banking Sector Pressure",
                        "Banking Sector Pressure → Cross-Domain Systemic Risk"
                    ]
                },

                affectedDomains: [
                    "FIN",
                    "INF",
                    "CYB",
                    "DC"
                ]
            }
        },

        decisionMap: {

            GREEN: "MAINTAIN_NORMAL_MONITORING",

            YELLOW: "INCREASE_MONITORING",

            ORANGE: "PREPARE_CONTINGENCY",

            RED: "ESCALATE_SYSTEMIC_RISK_REVIEW"
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
                "The rule layer may recommend a simulated contingency " +
                "decision, but final authority remains with the human " +
                "decision-maker."
        }
    };

    global.FINRules = FINRules;

    if (typeof module !== "undefined" && module.exports) {
        module.exports = FINRules;
    }

})(typeof window !== "undefined" ? window : globalThis);