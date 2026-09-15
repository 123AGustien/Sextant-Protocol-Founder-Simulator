/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Data
 *
 * DATA LAYER ONLY
 *
 * Purpose:
 * Deterministic financial resilience scenario data
 * for simulation and contingency-planning research.
 *
 * No prediction.
 * No investment advice.
 * No banking transaction execution.
 * No market execution.
 * No physical execution.
 * Human Decision Authority remains final.
 */

(function (global) {
    "use strict";

    const FINScenarioData = {

        domain: "FIN",
        domainName: "Financial Resilience",
        version: "1.0.0",

        purpose:
            "Deterministic financial resilience simulation " +
            "and contingency-planning support.",

        governance: {
            owner: "Financial Resilience Domain",
            approvalStatus: "Institution Review",
            reviewCycle:
                "Periodic review or when market conditions materially change.",
            permittedUse: [
                "Simulation",
                "Resilience assessment",
                "Contingency planning",
                "Research"
            ],
            prohibitedUse: [
                "Future market prediction",
                "Investment advice",
                "Monetary policy advice",
                "Banking transaction execution",
                "Market execution"
            ]
        },

        safetyBoundary: {
            simulationOnly: true,
            deterministic: true,
            physicalExecution: false,
            externalExecution: false,
            autonomousAuthority: false,
            humanDecisionAuthority: true
        },

        riskStates: {
            GREEN: {
                level: "GREEN",
                description: "Normal or resilient operating conditions."
            },

            YELLOW: {
                level: "YELLOW",
                description: "Early warning or increased stress."
            },

            ORANGE: {
                level: "ORANGE",
                description: "Significant stress requiring contingency preparation."
            },

            RED: {
                level: "RED",
                description: "Severe instability requiring escalation."
            }
        },

        scenarios: {

            "FIN-001": {

                id: "FIN-001",

                name: "FX Stress (SGD/IDR)",

                category: "Foreign Exchange (FX)",

                purpose:
                    "Evaluate resilience during significant SGD/IDR " +
                    "volatility and potential financial cascades.",

                scenario:
                    "Sudden foreign capital outflows pressure the " +
                    "Indonesian Rupiah against the Singapore Dollar.",

                evaluates: [
                    "Exchange rate volatility",
                    "Liquidity",
                    "Inflation pressure",
                    "Interest rate pressure",
                    "Financial market confidence"
                ],

                primaryIndicators: [
                    "SGD/IDR exchange rate",
                    "Daily FX volatility",
                    "Capital inflow/outflow trends",
                    "Foreign reserve pressure",
                    "Government bond market activity",
                    "Central bank policy actions"
                ],

                states: {

                    GREEN:
                        "Normal conditions and exchange-rate movements " +
                        "within the expected operating range.",

                    YELLOW:
                        "Early increase in FX volatility requiring " +
                        "closer monitoring of exchange rate, liquidity " +
                        "and bond-market conditions.",

                    ORANGE:
                        "Sustained currency pressure, rapid depreciation, " +
                        "increased outflows and rising uncertainty.",

                    RED:
                        "Severe FX instability, extreme volatility, " +
                        "significant capital flight, liquidity deterioration " +
                        "and broad financial-market stress."
                },

                cascades: {

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
                ],

                contingencyActions: [
                    "Continuous FX monitoring",
                    "Liquidity assessment",
                    "Funding exposure review",
                    "Systemic risk propagation evaluation",
                    "Increased reporting",
                    "Escalate to institutional risk management if thresholds are exceeded"
                ]
            },

            "FIN-002": {

                id: "FIN-002",

                name: "Bond Outflow Stress",

                category: "Sovereign Bond Market",

                purpose:
                    "Evaluate resilience during significant foreign " +
                    "investor withdrawals from sovereign bond markets " +
                    "and associated financial cascades.",

                scenario:
                    "Sustained government bond selling by domestic or " +
                    "foreign investors reduces liquidity and increases " +
                    "borrowing costs.",

                evaluates: [
                    "Bond liquidity",
                    "Sovereign yields",
                    "Foreign participation",
                    "Capital outflows",
                    "Market confidence"
                ],

                primaryIndicators: [
                    "Government bond yields",
                    "Foreign investor bond holdings",
                    "Daily bond trading volume",
                    "Bond volatility",
                    "Capital outflow trends",
                    "Credit spread movements"
                ],

                states: {

                    GREEN:
                        "Normal bond-market liquidity and investor confidence.",

                    YELLOW:
                        "Early reduction in liquidity requiring monitoring " +
                        "of yields, foreign activity and trading volumes.",

                    ORANGE:
                        "Significant outflows, rapid yield increases, " +
                        "accelerating withdrawals, reduced liquidity " +
                        "and increased volatility.",

                    RED:
                        "Severe bond-market disruption, extreme yield movements, " +
                        "major withdrawals, liquidity breakdown and broad instability."
                },

                cascades: {

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
                ],

                contingencyActions: [
                    "Continuous bond-market monitoring",
                    "Liquidity assessment",
                    "Funding requirement review",
                    "Systemic contagion evaluation",
                    "Increased reporting",
                    "Escalation to institutional risk management"
                ]
            },

            "FIN-003": {

                id: "FIN-003",

                name: "Liquidity Stress",

                category: "Liquidity Risk",

                purpose:
                    "Evaluate resilience during financial liquidity " +
                    "stress and potential funding cascades.",

                scenario:
                    "Funding liquidity tightens as institutions experience " +
                    "difficulty obtaining short-term financing while " +
                    "market liquidity deteriorates.",

                evaluates: [
                    "Banking liquidity",
                    "Interbank funding",
                    "Short-term funding markets",
                    "Cash flow resilience",
                    "Market confidence"
                ],

                primaryIndicators: [
                    "Interbank lending rates",
                    "Liquidity coverage ratios",
                    "Cash reserves",
                    "Funding spreads",
                    "Overnight borrowing",
                    "Short-term money-market conditions"
                ],

                states: {

                    GREEN:
                        "Normal and efficient funding and liquidity conditions.",

                    YELLOW:
                        "Early liquidity tightening requiring monitoring " +
                        "of interbank activity, funding spreads and reserves.",

                    ORANGE:
                        "Significant liquidity stress with reduced liquidity, " +
                        "rising funding costs, higher interbank rates " +
                        "and declining confidence.",

                    RED:
                        "Severe liquidity disruption, funding-market dysfunction, " +
                        "critical shortages, rapid funding withdrawal " +
                        "and elevated systemic stress."
                },

                cascades: {

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
                ],

                contingencyActions: [
                    "Continuous liquidity monitoring",
                    "Funding-source review",
                    "Cash-flow resilience assessment",
                    "Contagion-risk evaluation",
                    "Increased reporting",
                    "Escalation to institutional risk management"
                ]
            },

            "FIN-004": {

                id: "FIN-004",

                name: "Banking Stress",

                category: "Banking System Stability",

                purpose:
                    "Evaluate banking-sector resilience under financial " +
                    "stress and potential systemic cascades.",

                scenario:
                    "Banks experience pressure from deteriorating asset quality, " +
                    "funding constraints, declining confidence and market volatility.",

                evaluates: [
                    "Capital adequacy",
                    "Asset quality",
                    "Liquidity",
                    "Deposit stability",
                    "Funding resilience",
                    "Market confidence"
                ],

                primaryIndicators: [
                    "Capital adequacy ratio (CAR)",
                    "Non-performing loan (NPL) ratio",
                    "Loan-to-deposit ratio (LDR)",
                    "Deposit withdrawal trends",
                    "Interbank lending activity",
                    "Bank funding spreads",
                    "Credit default indicators"
                ],

                states: {

                    GREEN:
                        "Banks remain well-capitalised with stable funding " +
                        "and adequate liquidity.",

                    YELLOW:
                        "Early banking stress requiring increased monitoring " +
                        "of capital adequacy, liquidity, deposits and credit quality.",

                    ORANGE:
                        "Significant banking stress with rising NPLs, reduced " +
                        "liquidity, funding pressure and declining confidence.",

                    RED:
                        "Severe banking instability with critical liquidity shortages, " +
                        "rapid withdrawals, capital deterioration and widespread stress."
                },

                cascades: {

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
                ],

                contingencyActions: [
                    "Continuous banking-indicator monitoring",
                    "Capital and liquidity assessment",
                    "Funding resilience review",
                    "Systemic contagion evaluation",
                    "Increased reporting",
                    "Escalation to institutional risk management"
                ]
            },

            "FIN-005": {

                id: "FIN-005",

                name: "Inflation Shock",

                category: "Inflation Risk",

                purpose:
                    "Evaluate resilience during elevated inflation " +
                    "and associated economic and financial cascades.",

                scenario:
                    "Sustained inflation caused by supply disruptions, " +
                    "energy prices, currency depreciation or demand pressures " +
                    "affects households, businesses, financial institutions " +
                    "and public finances.",

                evaluates: [
                    "Consumer price pressure",
                    "Core inflation",
                    "Producer prices",
                    "Interest-rate pressure",
                    "Wage growth",
                    "Exchange-rate effects",
                    "Energy and commodity pressures"
                ],

                primaryIndicators: [
                    "Consumer Price Index (CPI)",
                    "Core inflation",
                    "Producer Price Index (PPI)",
                    "Interest-rate changes",
                    "Wage growth",
                    "Exchange-rate movements",
                    "Energy and commodity prices"
                ],

                states: {

                    GREEN:
                        "Inflation remains within the intended target range " +
                        "with relatively stable price conditions.",

                    YELLOW:
                        "Early inflationary pressure requiring monitoring " +
                        "of CPI, food and energy prices, rate expectations " +
                        "and currency movements.",

                    ORANGE:
                        "Persistent above-target inflation with rising borrowing " +
                        "costs, declining purchasing power and increasing business costs.",

                    RED:
                        "Severe inflation instability with rapid acceleration, " +
                        "significant monetary tightening, sharp confidence decline " +
                        "and widespread financial stress."
                },

                cascades: {

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
                ],

                contingencyActions: [
                    "Continuous inflation monitoring",
                    "Interest-rate impact review",
                    "Consumer resilience assessment",
                    "Business resilience assessment",
                    "Contagion-risk evaluation",
                    "Increased reporting",
                    "Escalation to institutional risk management"
                ]
            }
        },

        crossDomainModel: {

            description:
                "Financial stress may propagate into connected domains " +
                "for resilience analysis. The dependency model does not " +
                "represent an inevitable failure chain.",

            propagationPath: [
                "FIN",
                "INF",
                "CYB",
                "DC"
            ],

            note:
                "Cross-domain propagation is a simulation relationship " +
                "for resilience assessment only."
        },

        networkModel: {

            enabled: true,

            nodes: [
                "FIN",
                "INF",
                "CYB",
                "DC"
            ],

            edges: [
                {
                    from: "FIN",
                    to: "INF"
                },
                {
                    from: "FIN",
                    to: "CYB"
                },
                {
                    from: "FIN",
                    to: "DC"
                }
            ],

            deterministic: true
        },

        outputSchema: [
            "Risk Level",
            "Cascade Path",
            "Affected Domains",
            "Recommended Contingency Actions",
            "Audit Log Entry"
        ],

        governanceNotes: [
            "Rules are versioned financial-resilience research inputs.",
            "Scenario states are qualitative simulation states.",
            "No numerical threshold is invented by the data layer.",
            "No future market outcome is predicted.",
            "Human Decision Authority remains final.",
            "ACT represents simulated action only."
        ]
    };

    global.FINScenarioData = FINScenarioData;

    if (typeof module !== "undefined" && module.exports) {
        module.exports = FINScenarioData;
    }

})(typeof window !== "undefined" ? window : globalThis);