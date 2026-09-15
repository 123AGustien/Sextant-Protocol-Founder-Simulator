/*

* Sextant Protocol™
* Financial Resilience Domain
* FIN Scenario Data
* 
* DATA LAYER ONLY
* 
* Version:
* 2.0.0
* 
* Purpose:
* Deterministic financial and banking resilience scenario data
* for simulation, resilience assessment and contingency-planning
* research.
* 
* V2 EXTENSION:
* Banking resilience scenario family covering:
* 
* FIN-BANK-001  Liquidity Stress
* FIN-BANK-002  Capital Stress
* FIN-BANK-003  Credit / Counterparty Failure
* FIN-BANK-004  Market Shock
* FIN-BANK-005  FX Shock
* FIN-BANK-006  Cyber Incident
* FIN-BANK-007  Critical Infrastructure Failure
* FIN-BANK-008  Payment-System Disruption
* FIN-BANK-009  Third-Party / Vendor Failure
* FIN-BANK-010  Combined Cascading Banking Crisis
* 
* IMPORTANT:
* Existing FIN V1 scenarios FIN-001 through FIN-005 are preserved.
* 
* No prediction.
* No investment advice.
* No banking transaction execution.
* No market execution.
* No physical execution.
* No autonomous financial authority.
* Human Decision Authority remains final.
* 
* Golden Rule:
* OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
  */

(function (global) {
"use strict";

const FINScenarioData = {

    domain: "FIN",
    domainName: "Financial Resilience",
    version: "2.0.0",

    purpose:
        "Deterministic financial and banking resilience simulation " +
        "and contingency-planning support.",

    architecture:

        "DATA → ALGORITHMS → COMPUTE",

    goldenRule:

        "OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE",

    governance: {

        owner: "Financial Resilience Domain",

        approvalStatus:
            "Institution Review",

        reviewCycle:
            "Periodic review or when market conditions, " +
            "institutional conditions or research requirements materially change.",

        permittedUse: [
            "Simulation",
            "Resilience assessment",
            "Contingency planning",
            "Research",
            "Controlled V&V",
            "Scenario testing"
        ],

        prohibitedUse: [
            "Future market prediction",
            "Investment advice",
            "Monetary policy advice",
            "Banking transaction execution",
            "Market execution",
            "Customer-account control",
            "Autonomous financial execution",
            "Physical execution"
        ]
    },

    safetyBoundary: {

        simulationOnly: true,

        deterministic: true,

        physicalExecution: false,

        externalExecution: false,

        bankingSystemConnection: false,

        customerAccountAccess: false,

        transactionExecution: false,

        marketExecution: false,

        autonomousAuthority: false,

        humanDecisionAuthority: true
    },

    riskStates: {

        GREEN: {
            level: "GREEN",
            description:
                "Normal or resilient operating conditions."
        },

        YELLOW: {
            level: "YELLOW",
            description:
                "Early warning or increased stress."
        },

        ORANGE: {
            level: "ORANGE",
            description:
                "Significant stress requiring contingency preparation."
        },

        RED: {
            level: "RED",
            description:
                "Severe instability requiring escalation."
        }
    },

    /*
     * ============================================================
     * EXISTING FIN V1 SCENARIOS
     * ============================================================
     *
     * These scenarios are intentionally preserved so existing
     * FIN V1 rule-engine and scenario-engine wiring remains valid.
     */

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
        },


        /*
         * ========================================================
         * FIN BANKING RESILIENCE V2
         * ========================================================
         */

        "FIN-BANK-001": {

            id: "FIN-BANK-001",

            name: "Banking Liquidity Stress",

            category: "Banking — Liquidity",

            version: "2.0.0",

            purpose:
                "Evaluate banking resilience when funding liquidity, " +
                "cash availability or market liquidity becomes stressed.",

            scenario:
                "A hypothetical banking institution experiences " +
                "increasing funding pressure and reduced liquidity " +
                "across relevant funding channels.",

            evaluates: [
                "Liquidity resilience",
                "Funding resilience",
                "Cash-flow resilience",
                "Liquidity concentration",
                "Market liquidity",
                "Funding dependency"
            ],

            primaryIndicators: [
                "Liquidity position",
                "Cash availability",
                "Funding concentration",
                "Short-term funding conditions",
                "Liquidity buffer condition",
                "Funding rollover condition",
                "Market liquidity condition"
            ],

            states: {

                GREEN:
                    "Liquidity and funding conditions remain within the " +
                    "defined scenario operating condition.",

                YELLOW:
                    "Early liquidity pressure requires increased monitoring " +
                    "and verification of available funding resources.",

                ORANGE:
                    "Material liquidity stress requires contingency preparation " +
                    "and assessment of funding resilience.",

                RED:
                    "Severe simulated liquidity disruption requiring escalation " +
                    "and human-authorised contingency decision support."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Liquidity Pressure → Increased Monitoring"
                ],

                ORANGE: [
                    "Liquidity Stress → Funding Pressure",
                    "Funding Pressure → Credit Tightening",
                    "Credit Tightening → Market Pressure"
                ],

                RED: [
                    "Liquidity Crisis → Funding Disruption",
                    "Funding Disruption → Banking Stress",
                    "Banking Stress → Credit and Market Contagion"
                ]
            },

            affectedDomains: [
                "FIN"
            ],

            contingencyActions: [
                "Verify liquidity condition",
                "Assess funding resilience",
                "Review funding concentration",
                "Evaluate simulated contingency options",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-002": {

            id: "FIN-BANK-002",

            name: "Banking Capital Stress",

            category: "Banking — Capital",

            version: "2.0.0",

            purpose:
                "Evaluate resilience when a hypothetical banking institution " +
                "experiences deterioration in capital resources or capital resilience.",

            scenario:
                "A hypothetical combination of losses, asset deterioration " +
                "or balance-sheet pressure reduces simulated capital resilience.",

            evaluates: [
                "Capital resilience",
                "Loss absorption capacity",
                "Balance-sheet resilience",
                "Capital deterioration",
                "Interaction with liquidity"
            ],

            primaryIndicators: [
                "Capital position",
                "Capital buffer condition",
                "Asset quality condition",
                "Simulated loss condition",
                "Balance-sheet stress",
                "Capital recovery condition"
            ],

            states: {

                GREEN:
                    "Capital resources remain resilient within the scenario.",

                YELLOW:
                    "Early capital pressure requires verification and closer monitoring.",

                ORANGE:
                    "Significant capital deterioration requires contingency assessment.",

                RED:
                    "Severe simulated capital stress requires escalation and " +
                    "human-authorised decision support."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Capital Pressure → Increased Monitoring"
                ],

                ORANGE: [
                    "Capital Stress → Reduced Loss Absorption",
                    "Reduced Loss Absorption → Credit Constraint",
                    "Credit Constraint → Financial Pressure"
                ],

                RED: [
                    "Capital Crisis → Banking Stress",
                    "Banking Stress → Credit Disruption",
                    "Credit Disruption → Systemic Financial Stress"
                ]
            },

            affectedDomains: [
                "FIN"
            ],

            contingencyActions: [
                "Verify capital condition",
                "Assess loss-absorption resilience",
                "Review balance-sheet dependencies",
                "Evaluate contingency options",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-003": {

            id: "FIN-BANK-003",

            name: "Credit / Counterparty Failure",

            category: "Banking — Credit and Counterparty",

            version: "2.0.0",

            purpose:
                "Evaluate resilience when a significant hypothetical " +
                "borrower or counterparty experiences failure or deterioration.",

            scenario:
                "A major counterparty becomes unable to meet simulated " +
                "financial obligations, creating secondary exposures.",

            evaluates: [
                "Counterparty exposure",
                "Credit concentration",
                "Loss propagation",
                "Collateral condition",
                "Secondary exposure",
                "Credit contagion"
            ],

            primaryIndicators: [
                "Counterparty exposure",
                "Credit concentration",
                "Obligation condition",
                "Collateral condition",
                "Recovery condition",
                "Connected counterparty exposure"
            ],

            states: {

                GREEN:
                    "Counterparty exposure remains within the defined scenario condition.",

                YELLOW:
                    "Early counterparty deterioration requires verification and monitoring.",

                ORANGE:
                    "Material counterparty stress requires exposure and contagion assessment.",

                RED:
                    "Severe simulated counterparty failure requires escalation and " +
                    "human-authorised contingency decision support."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Counterparty Deterioration → Increased Monitoring"
                ],

                ORANGE: [
                    "Counterparty Stress → Credit Exposure Pressure",
                    "Credit Exposure Pressure → Loss Absorption Pressure",
                    "Loss Absorption Pressure → Capital Stress"
                ],

                RED: [
                    "Counterparty Failure → Credit Loss",
                    "Credit Loss → Capital Pressure",
                    "Capital Pressure → Liquidity and Banking Stress"
                ]
            },

            affectedDomains: [
                "FIN"
            ],

            contingencyActions: [
                "Verify counterparty exposure",
                "Assess concentration",
                "Evaluate loss propagation",
                "Review collateral condition",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-004": {

            id: "FIN-BANK-004",

            name: "Market Shock",

            category: "Banking — Market Risk",

            version: "2.0.0",

            purpose:
                "Evaluate resilience under a hypothetical broad market shock.",

            scenario:
                "A simulated market shock produces rapid changes in asset " +
                "values, market liquidity and funding conditions.",

            evaluates: [
                "Market exposure",
                "Market liquidity",
                "Valuation pressure",
                "Funding interaction",
                "Capital interaction"
            ],

            primaryIndicators: [
                "Market exposure",
                "Asset valuation condition",
                "Market liquidity",
                "Volatility condition",
                "Funding condition",
                "Capital sensitivity"
            ],

            states: {

                GREEN:
                    "Market conditions remain within the defined scenario range.",

                YELLOW:
                    "Increased market stress requires enhanced monitoring.",

                ORANGE:
                    "Significant market disruption requires contingency assessment.",

                RED:
                    "Severe simulated market disruption requires escalation and " +
                    "human-authorised decision support."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Market Stress → Increased Monitoring"
                ],

                ORANGE: [
                    "Market Shock → Valuation Pressure",
                    "Valuation Pressure → Capital Pressure",
                    "Capital Pressure → Funding Pressure"
                ],

                RED: [
                    "Market Crisis → Liquidity Stress",
                    "Liquidity Stress → Banking Stress",
                    "Banking Stress → Credit and Financial Contagion"
                ]
            },

            affectedDomains: [
                "FIN"
            ],

            contingencyActions: [
                "Verify market exposure",
                "Assess liquidity interaction",
                "Assess capital sensitivity",
                "Evaluate contingency options",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-005": {

            id: "FIN-BANK-005",

            name: "FX Shock",

            category: "Banking — Foreign Exchange",

            version: "2.0.0",

            purpose:
                "Evaluate banking resilience under a hypothetical foreign " +
                "exchange shock affecting currency exposures and funding.",

            scenario:
                "A simulated rapid currency movement affects foreign-currency " +
                "assets, liabilities, funding and counterparty exposures.",

            evaluates: [
                "FX exposure",
                "Currency mismatch",
                "Foreign-currency liquidity",
                "Funding resilience",
                "Counterparty exposure"
            ],

            primaryIndicators: [
                "Currency exposure",
                "Currency mismatch",
                "FX liquidity condition",
                "Foreign-currency funding",
                "FX volatility condition",
                "Counterparty exposure"
            ],

            states: {

                GREEN:
                    "FX exposure remains resilient within the scenario.",

                YELLOW:
                    "Increasing FX pressure requires verification and monitoring.",

                ORANGE:
                    "Significant FX stress requires exposure and liquidity assessment.",

                RED:
                    "Severe simulated FX disruption requires escalation and " +
                    "human-authorised contingency decision support."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "FX Pressure → Increased Monitoring"
                ],

                ORANGE: [
                    "FX Shock → Currency Exposure Pressure",
                    "Currency Exposure Pressure → Liquidity Pressure",
                    "Liquidity Pressure → Funding Stress"
                ],

                RED: [
                    "FX Crisis → Funding Stress",
                    "Funding Stress → Banking Stress",
                    "Banking Stress → Credit and Market Contagion"
                ]
            },

            affectedDomains: [
                "FIN"
            ],

            contingencyActions: [
                "Verify FX exposure",
                "Assess currency mismatch",
                "Review foreign-currency liquidity",
                "Evaluate funding resilience",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-006": {

            id: "FIN-BANK-006",

            name: "Banking Cyber Incident",

            category: "Banking — Cyber Resilience",

            version: "2.0.0",

            purpose:
                "Evaluate banking resilience when a hypothetical cyber " +
                "incident disrupts critical financial information systems.",

            scenario:
                "A simulated cyber incident affects selected banking services, " +
                "creating operational and financial dependencies.",

            evaluates: [
                "Cyber resilience",
                "Service availability",
                "Operational continuity",
                "Data integrity",
                "Financial-system dependency",
                "Recovery resilience"
            ],

            primaryIndicators: [
                "Service availability",
                "System integrity",
                "Transaction-processing availability",
                "Critical-service dependency",
                "Recovery condition",
                "Third-party dependency"
            ],

            states: {

                GREEN:
                    "Critical simulated banking services remain available.",

                YELLOW:
                    "Early cyber disruption requires verification and increased monitoring.",

                ORANGE:
                    "Material service disruption requires contingency preparation.",

                RED:
                    "Severe simulated cyber disruption requires escalation and " +
                    "human-authorised continuity decisions."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Cyber Warning → Increased Monitoring"
                ],

                ORANGE: [
                    "Cyber Incident → Service Disruption",
                    "Service Disruption → Operational Stress",
                    "Operational Stress → Financial-Service Pressure"
                ],

                RED: [
                    "Cyber Crisis → Critical Service Disruption",
                    "Critical Service Disruption → Payment / Liquidity Pressure",
                    "Payment / Liquidity Pressure → Banking Stress"
                ]
            },

            affectedDomains: [
                "FIN",
                "CYB"
            ],

            contingencyActions: [
                "Verify affected services",
                "Assess operational continuity",
                "Assess financial-system dependencies",
                "Evaluate recovery options",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-007": {

            id: "FIN-BANK-007",

            name: "Critical Infrastructure Failure",

            category: "Banking — Infrastructure Resilience",

            version: "2.0.0",

            purpose:
                "Evaluate banking resilience when critical infrastructure " +
                "supporting financial services becomes unavailable.",

            scenario:
                "A simulated infrastructure failure affects facilities, " +
                "communications, computing or other critical dependencies.",

            evaluates: [
                "Infrastructure dependency",
                "Service continuity",
                "Operational resilience",
                "Recovery capability",
                "Cross-domain dependency"
            ],

            primaryIndicators: [
                "Critical-service availability",
                "Infrastructure availability",
                "Communications condition",
                "Computing availability",
                "Recovery condition",
                "Dependency concentration"
            ],

            states: {

                GREEN:
                    "Critical infrastructure remains available within the scenario.",

                YELLOW:
                    "Infrastructure degradation requires increased monitoring.",

                ORANGE:
                    "Material infrastructure disruption requires continuity assessment.",

                RED:
                    "Severe simulated infrastructure failure requires escalation " +
                    "and human-authorised continuity decisions."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Infrastructure Degradation → Increased Monitoring"
                ],

                ORANGE: [
                    "Infrastructure Failure → Service Disruption",
                    "Service Disruption → Operational Stress",
                    "Operational Stress → Financial-Service Pressure"
                ],

                RED: [
                    "Infrastructure Crisis → Critical Service Disruption",
                    "Critical Service Disruption → Payment Pressure",
                    "Payment Pressure → Liquidity and Banking Stress"
                ]
            },

            affectedDomains: [
                "FIN",
                "INF"
            ],

            contingencyActions: [
                "Verify infrastructure dependency",
                "Assess service continuity",
                "Evaluate recovery condition",
                "Assess cross-domain propagation",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-008": {

            id: "FIN-BANK-008",

            name: "Payment-System Disruption",

            category: "Banking — Payments",

            version: "2.0.0",

            purpose:
                "Evaluate resilience when a hypothetical payment-processing " +
                "service becomes disrupted.",

            scenario:
                "A simulated disruption affects payment processing and " +
                "creates delays, queues or dependency pressure.",

            evaluates: [
                "Payment continuity",
                "Settlement dependency",
                "Liquidity interaction",
                "Operational continuity",
                "Customer-service dependency",
                "Recovery resilience"
            ],

            primaryIndicators: [
                "Payment-service availability",
                "Processing condition",
                "Settlement condition",
                "Payment queue condition",
                "Liquidity dependency",
                "Recovery condition"
            ],

            states: {

                GREEN:
                    "Payment services remain available within the scenario.",

                YELLOW:
                    "Payment degradation requires monitoring and verification.",

                ORANGE:
                    "Material payment disruption requires continuity assessment.",

                RED:
                    "Severe simulated payment disruption requires escalation " +
                    "and human-authorised contingency decisions."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Payment Degradation → Increased Monitoring"
                ],

                ORANGE: [
                    "Payment Disruption → Processing Pressure",
                    "Processing Pressure → Settlement Pressure",
                    "Settlement Pressure → Liquidity Pressure"
                ],

                RED: [
                    "Payment Crisis → Settlement Disruption",
                    "Settlement Disruption → Liquidity Stress",
                    "Liquidity Stress → Banking and Financial Contagion"
                ]
            },

            affectedDomains: [
                "FIN"
            ],

            contingencyActions: [
                "Verify payment-service condition",
                "Assess settlement dependency",
                "Assess liquidity interaction",
                "Evaluate continuity options",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-009": {

            id: "FIN-BANK-009",

            name: "Third-Party / Vendor Failure",

            category: "Banking — Third-Party Resilience",

            version: "2.0.0",

            purpose:
                "Evaluate banking resilience when a critical third-party " +
                "or technology/service provider becomes unavailable.",

            scenario:
                "A simulated critical vendor failure affects one or more " +
                "banking services or operational dependencies.",

            evaluates: [
                "Third-party dependency",
                "Concentration risk",
                "Service continuity",
                "Recovery capability",
                "Substitution capability",
                "Operational resilience"
            ],

            primaryIndicators: [
                "Critical vendor availability",
                "Service dependency",
                "Vendor concentration",
                "Substitution capability",
                "Recovery condition",
                "Connected service impact"
            ],

            states: {

                GREEN:
                    "Critical third-party services remain available.",

                YELLOW:
                    "Vendor degradation requires increased monitoring.",

                ORANGE:
                    "Material vendor failure requires continuity and substitution assessment.",

                RED:
                    "Severe simulated vendor failure requires escalation and " +
                    "human-authorised contingency decisions."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Vendor Warning → Increased Monitoring"
                ],

                ORANGE: [
                    "Vendor Failure → Service Disruption",
                    "Service Disruption → Operational Stress",
                    "Operational Stress → Financial-Service Pressure"
                ],

                RED: [
                    "Critical Vendor Failure → Multiple Service Disruption",
                    "Multiple Service Disruption → Payment / Liquidity Pressure",
                    "Payment / Liquidity Pressure → Banking Stress"
                ]
            },

            affectedDomains: [
                "FIN",
                "INF",
                "CYB"
            ],

            contingencyActions: [
                "Verify third-party dependency",
                "Assess concentration risk",
                "Evaluate substitution capability",
                "Assess service continuity",
                "Escalate for human authorization"
            ]
        },


        "FIN-BANK-010": {

            id: "FIN-BANK-010",

            name: "Combined Cascading Banking Crisis",

            category: "Banking — Combined Cascading Resilience",

            version: "2.0.0",

            purpose:
                "Evaluate resilience when multiple hypothetical banking " +
                "stress conditions interact and propagate through connected " +
                "financial and operational dependencies.",

            scenario:
                "A controlled simulation combines multiple financial and " +
                "operational stress conditions to evaluate cascading effects. " +
                "The combined scenario does not represent a forecast or " +
                "prediction of an actual banking crisis.",

            evaluates: [
                "Liquidity resilience",
                "Capital resilience",
                "Credit and counterparty resilience",
                "Market resilience",
                "FX resilience",
                "Cyber resilience",
                "Infrastructure resilience",
                "Payment resilience",
                "Third-party resilience",
                "Cross-domain dependency",
                "Cascading-risk propagation",
                "Decision-support resilience",
                "Human authorization"
            ],

            primaryIndicators: [
                "Liquidity condition",
                "Capital condition",
                "Credit condition",
                "Market condition",
                "FX condition",
                "Cyber condition",
                "Infrastructure condition",
                "Payment condition",
                "Third-party condition",
                "Dependency concentration",
                "Cascade depth",
                "Affected-domain count",
                "Recovery condition"
            ],

            states: {

                GREEN:
                    "Combined scenario conditions remain resilient and " +
                    "no material cascade is identified.",

                YELLOW:
                    "Multiple early-warning conditions are present and " +
                    "require verification and increased monitoring.",

                ORANGE:
                    "Multiple material stress conditions interact, requiring " +
                    "contingency preparation and cascading-risk assessment.",

                RED:
                    "Severe combined simulated disruption produces broad " +
                    "cascading stress requiring escalation and human-authorised " +
                    "decision support."
            },

            cascades: {

                GREEN: [],

                YELLOW: [
                    "Multiple Early Warnings → Increased Verification",
                    "Increased Verification → Enhanced Monitoring"
                ],

                ORANGE: [
                    "Liquidity Stress → Funding Pressure",
                    "Funding Pressure → Credit Tightening",
                    "Credit Stress → Capital Pressure",
                    "Capital Pressure → Funding Resilience Pressure",
                    "Market Shock → Valuation Pressure",
                    "FX Shock → Currency Exposure Pressure",
                    "Cyber / Infrastructure Disruption → Service Pressure",
                    "Service Pressure → Payment Pressure",
                    "Payment Pressure → Liquidity Pressure"
                ],

                RED: [
                    "Multiple Stressors → Cross-Domain Propagation",
                    "Cross-Domain Propagation → Liquidity Stress",
                    "Liquidity Stress → Funding Disruption",
                    "Funding Disruption → Credit Stress",
                    "Credit Stress → Capital Pressure",
                    "Capital Pressure → Banking Stress",
                    "Banking Stress → Financial Contagion",
                    "Financial Contagion → Systemic Resilience Assessment"
                ]
            },

            affectedDomains: [
                "FIN",
                "CYB",
                "INF"
            ],

            contingencyActions: [
                "Verify each active stress condition",
                "Identify interacting dependencies",
                "Assess cascade path",
                "Assess affected domains",
                "Evaluate liquidity resilience",
                "Evaluate capital resilience",
                "Evaluate credit and counterparty exposure",
                "Evaluate operational and payment continuity",
                "Evaluate recovery condition",
                "Present simulated decision options",
                "Require human authorization before simulated action",
                "Record updated simulated state",
                "Create audit record"
            ],

            researchNotes: [
                "Combined scenario is a controlled simulation.",
                "Cascade relationships are scenario dependencies, not predictions.",
                "No probability of future failure is generated by this data layer.",
                "No financial transaction is executed.",
                "No market order is executed.",
                "Human Decision Authority remains final."
            ]
        }
    },


    /*
     * ============================================================
     * BANKING SCENARIO CATALOGUE
     * ============================================================
     */

    bankingScenarioCatalogue: {

        version: "2.0.0",

        description:
            "Banking resilience scenario catalogue for controlled " +
            "simulation and V&V research.",

        scenarioFamilies: [

            {
                id: "FIN-BANK-001",
                family: "Liquidity"
            },

            {
                id: "FIN-BANK-002",
                family: "Capital"
            },

            {
                id: "FIN-BANK-003",
                family: "Credit / Counterparty"
            },

            {
                id: "FIN-BANK-004",
                family: "Market"
            },

            {
                id: "FIN-BANK-005",
                family: "FX"
            },

            {
                id: "FIN-BANK-006",
                family: "Cyber"
            },

            {
                id: "FIN-BANK-007",
                family: "Infrastructure"
            },

            {
                id: "FIN-BANK-008",
                family: "Payments"
            },

            {
                id: "FIN-BANK-009",
                family: "Third-Party / Vendor"
            },

            {
                id: "FIN-BANK-010",
                family: "Combined Cascading Crisis"
            }
        ],

        executionBoundary:
            "Simulation only. No banking or market execution."
    },


    /*
     * ============================================================
     * CROSS-DOMAIN MODEL
     * ============================================================
     */

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


    /*
     * ============================================================
     * BANKING DEPENDENCY MODEL
     * ============================================================
     */

    bankingDependencyModel: {

        enabled: true,

        description:
            "Controlled banking dependency model representing " +
            "relationships between financial and operational " +
            "resilience conditions.",

        domains: [
            "LIQUIDITY",
            "CAPITAL",
            "CREDIT",
            "MARKET",
            "FX",
            "CYBER",
            "INFRASTRUCTURE",
            "PAYMENTS",
            "THIRD_PARTY"
        ],

        relationships: [

            {
                from: "LIQUIDITY",
                to: "CREDIT",
                relationship:
                    "Liquidity pressure may be evaluated alongside " +
                    "credit tightening."
            },

            {
                from: "CREDIT",
                to: "CAPITAL",
                relationship:
                    "Credit deterioration may be evaluated alongside " +
                    "capital pressure."
            },

            {
                from: "MARKET",
                to: "CAPITAL",
                relationship:
                    "Market valuation pressure may be evaluated alongside " +
                    "capital resilience."
            },

            {
                from: "FX",
                to: "LIQUIDITY",
                relationship:
                    "FX stress may be evaluated alongside liquidity pressure."
            },

            {
                from: "CYBER",
                to: "PAYMENTS",
                relationship:
                    "Cyber disruption may affect simulated payment-service availability."
            },

            {
                from: "INFRASTRUCTURE",
                to: "PAYMENTS",
                relationship:
                    "Infrastructure disruption may affect simulated payment continuity."
            },

            {
                from: "THIRD_PARTY",
                to: "INFRASTRUCTURE",
                relationship:
                    "Third-party dependency may affect simulated infrastructure or services."
            },

            {
                from: "PAYMENTS",
                to: "LIQUIDITY",
                relationship:
                    "Payment disruption may be evaluated alongside liquidity pressure."
            }
        ],

        deterministic: true,

        predictive: false
    },


    /*
     * ============================================================
     * NETWORK MODEL
     * ============================================================
     */

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


    /*
     * ============================================================
     * OUTPUT SCHEMA
     * ============================================================
     */

    outputSchema: [

        "Scenario ID",
        "Scenario Name",
        "Risk Level",
        "Scenario Inputs",
        "Verification Result",
        "Assessment",
        "Cascade Path",
        "Affected Domains",
        "Decision Options",
        "Human Authorization Status",
        "Simulated Action",
        "Updated System State",
        "Assessment Latency",
        "Determinism Result",
        "Audit Log Entry"
    ],


    /*
     * ============================================================
     * V&V MODEL
     * ============================================================
     */

    vAndVModel: {

        enabled: true,

        purpose:
            "Provide a structured basis for repeatable scenario " +
            "verification and resilience assessment.",

        stages: [

            "INPUT",

            "OBSERVE",

            "VERIFY",

            "ASSESS",

            "DECIDE",

            "HUMAN AUTHORIZE",

            "SIMULATE ACTION",

            "UPDATE",

            "AUDIT",

            "REPEAT"
        ],

        principles: [

            "Scenario inputs must be identifiable.",

            "Verification must be distinguishable from assessment.",

            "Assessment must be distinguishable from action.",

            "Decision support must not create autonomous authority.",

            "Simulated action must remain non-operational.",

            "Results must be repeatable under deterministic conditions.",

            "Audit information must identify the scenario and result."
        ]
    },


    /*
     * ============================================================
     * GOVERNANCE NOTES
     * ============================================================
     */

    governanceNotes: [

        "Rules are versioned financial-resilience research inputs.",

        "Scenario states are qualitative simulation states.",

        "No numerical threshold is invented by the data layer.",

        "No future market outcome is predicted.",

        "No probability of future banking failure is generated.",

        "Banking scenarios are controlled simulation conditions.",

        "Cascade relationships represent research dependencies only.",

        "Human Decision Authority remains final.",

        "ACT represents simulated action only.",

        "No banking transaction is executed.",

        "No market order is executed.",

        "No external banking system is controlled.",

        "The data layer does not contain autonomous execution authority."
    ]
};


/*
 * ================================================================
 * GLOBAL EXPORT
 * ================================================================
 */

global.FINScenarioData = FINScenarioData;


/*
 * NODE / MODULE EXPORT
 * ================================================================
 */

if (typeof module !== "undefined" && module.exports) {
    module.exports = FINScenarioData;
}

})(typeof window !== "undefined" ? window : globalThis);