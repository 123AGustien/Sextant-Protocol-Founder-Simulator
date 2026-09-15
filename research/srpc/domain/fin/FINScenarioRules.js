/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Rules
 *
 * SCENARIO ALGORITHM MAPPING LAYER
 *
 * Version: 2.0.0
 *
 * Maps each FIN scenario to its governed
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 * sequence.
 *
 * Does not execute rules.
 * Does not duplicate scenario data.
 * Does not perform physical or financial execution.
 *
 * Architecture:
 * DATA → ALGORITHMS → COMPUTE
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 */

(function (global) {
    "use strict";

    const FINScenarioRules = {

        domain: "FIN",
        domainName: "Financial Resilience",
        version: "2.0.0",

        architecture: "DATA → ALGORITHMS → COMPUTE",

        goldenRule: [
            "OBSERVE",
            "VERIFY",
            "ASSESS",
            "DECIDE",
            "ACT",
            "UPDATE"
        ],

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

        /*
         * ============================================================
         * FIN SCENARIO RULES
         * ============================================================
         */

        scenarios: {

            /*
             * --------------------------------------------------------
             * FIN-001
             * --------------------------------------------------------
             */

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

            /*
             * --------------------------------------------------------
             * FIN-002
             * --------------------------------------------------------
             */

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

            /*
             * --------------------------------------------------------
             * FIN-003
             * --------------------------------------------------------
             */

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

            /*
             * --------------------------------------------------------
             * FIN-004
             * --------------------------------------------------------
             */

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

            /*
             * --------------------------------------------------------
             * FIN-005
             * --------------------------------------------------------
             */

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
            },

            /*
             * ========================================================
             * BANKING RESILIENCE V2
             * ========================================================
             */

            /*
             * --------------------------------------------------------
             * FIN-BANK-001
             * --------------------------------------------------------
             */

            "FIN-BANK-001": {
                id: "FIN-BANK-001",
                ruleId: "FIN-BANK-001",
                name: "Banking Liquidity Stress",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Liquidity position",
                        "Funding availability",
                        "Deposit withdrawal pressure",
                        "Interbank funding conditions",
                        "Short-term funding concentration",
                        "Liquidity buffer condition"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "Banking liquidity remains stable.",
                    YELLOW: "Early liquidity pressure requires increased monitoring.",
                    ORANGE: "Material liquidity stress requires contingency preparation.",
                    RED: "Severe liquidity stress requires systemic liquidity review."
                },

                decide: {
                    GREEN: "MAINTAIN_LIQUIDITY_MONITORING",
                    YELLOW: "INCREASE_LIQUIDITY_MONITORING",
                    ORANGE: "PREPARE_LIQUIDITY_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_LIQUIDITY_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-002
             * --------------------------------------------------------
             */

            "FIN-BANK-002": {
                id: "FIN-BANK-002",
                ruleId: "FIN-BANK-002",
                name: "Banking Capital Stress",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Capital adequacy condition",
                        "Capital buffer condition",
                        "Asset-quality pressure",
                        "Loss absorption capacity",
                        "Risk-weighted asset pressure",
                        "Capital replenishment requirement"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "Capital condition remains stable.",
                    YELLOW: "Early capital pressure requires monitoring.",
                    ORANGE: "Material capital stress requires contingency preparation.",
                    RED: "Severe capital stress requires systemic banking review."
                },

                decide: {
                    GREEN: "MAINTAIN_CAPITAL_MONITORING",
                    YELLOW: "INCREASE_CAPITAL_MONITORING",
                    ORANGE: "PREPARE_CAPITAL_CONTINGENCY",
                    RED: "ESCALATE_BANKING_CAPITAL_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-003
             * --------------------------------------------------------
             */

            "FIN-BANK-003": {
                id: "FIN-BANK-003",
                ruleId: "FIN-BANK-003",
                name: "Credit / Counterparty Failure",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Counterparty exposure",
                        "Credit quality condition",
                        "Default indicators",
                        "Concentration exposure",
                        "Collateral condition",
                        "Interbank credit conditions"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "Counterparty and credit conditions remain stable.",
                    YELLOW: "Early credit deterioration requires monitoring.",
                    ORANGE: "Material counterparty stress creates elevated credit risk.",
                    RED: "Severe counterparty failure creates systemic credit concern."
                },

                decide: {
                    GREEN: "MAINTAIN_CREDIT_MONITORING",
                    YELLOW: "INCREASE_COUNTERPARTY_MONITORING",
                    ORANGE: "PREPARE_CREDIT_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_CREDIT_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-004
             * --------------------------------------------------------
             */

            "FIN-BANK-004": {
                id: "FIN-BANK-004",
                ruleId: "FIN-BANK-004",
                name: "Market Shock",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Market volatility",
                        "Asset-price movement",
                        "Market liquidity",
                        "Credit-spread movement",
                        "Investor outflow pressure",
                        "Market confidence condition"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "Market conditions remain orderly.",
                    YELLOW: "Early market volatility requires monitoring.",
                    ORANGE: "Material market stress requires contingency preparation.",
                    RED: "Severe market disruption requires systemic market review."
                },

                decide: {
                    GREEN: "MAINTAIN_MARKET_MONITORING",
                    YELLOW: "INCREASE_MARKET_MONITORING",
                    ORANGE: "PREPARE_MARKET_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_MARKET_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-005
             * --------------------------------------------------------
             */

            "FIN-BANK-005": {
                id: "FIN-BANK-005",
                ruleId: "FIN-BANK-005",
                name: "FX Shock",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Exchange-rate movement",
                        "FX volatility",
                        "Foreign-currency exposure",
                        "Funding currency mismatch",
                        "Capital-flow pressure",
                        "Foreign-reserve pressure"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "FX conditions remain orderly.",
                    YELLOW: "Early FX pressure requires monitoring.",
                    ORANGE: "Material FX stress creates funding and liquidity pressure.",
                    RED: "Severe FX disruption requires systemic FX review."
                },

                decide: {
                    GREEN: "MAINTAIN_FX_MONITORING",
                    YELLOW: "INCREASE_FX_MONITORING",
                    ORANGE: "PREPARE_FX_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_FX_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-006
             * --------------------------------------------------------
             */

            "FIN-BANK-006": {
                id: "FIN-BANK-006",
                ruleId: "FIN-BANK-006",
                name: "Banking Cyber Incident",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Banking system availability",
                        "Cyber incident status",
                        "Payment-system availability",
                        "Authentication-system condition",
                        "Operational technology condition",
                        "Incident containment status"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "No material banking cyber disruption identified.",
                    YELLOW: "Cyber indicators require heightened monitoring.",
                    ORANGE: "Material cyber disruption affects banking operations.",
                    RED: "Severe cyber disruption creates systemic operational risk."
                },

                decide: {
                    GREEN: "MAINTAIN_CYBER_MONITORING",
                    YELLOW: "INCREASE_CYBER_MONITORING",
                    ORANGE: "PREPARE_CYBER_CONTINGENCY",
                    RED: "ESCALATE_BANKING_CYBER_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-007
             * --------------------------------------------------------
             */

            "FIN-BANK-007": {
                id: "FIN-BANK-007",
                ruleId: "FIN-BANK-007",
                name: "Critical Infrastructure Failure",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Power availability",
                        "Telecommunications availability",
                        "Data-centre availability",
                        "Banking infrastructure condition",
                        "Physical infrastructure condition",
                        "Service continuity status"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "Critical infrastructure remains operational.",
                    YELLOW: "Infrastructure degradation requires monitoring.",
                    ORANGE: "Material infrastructure disruption affects financial operations.",
                    RED: "Severe infrastructure failure creates systemic continuity risk."
                },

                decide: {
                    GREEN: "MAINTAIN_INFRASTRUCTURE_MONITORING",
                    YELLOW: "INCREASE_INFRASTRUCTURE_MONITORING",
                    ORANGE: "PREPARE_INFRASTRUCTURE_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_INFRASTRUCTURE_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-008
             * --------------------------------------------------------
             */

            "FIN-BANK-008": {
                id: "FIN-BANK-008",
                ruleId: "FIN-BANK-008",
                name: "Payment-System Disruption",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Payment-system availability",
                        "Settlement-system availability",
                        "Transaction-processing condition",
                        "Payment queue condition",
                        "Clearing dependency condition",
                        "Service restoration status"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "Payment systems remain operational.",
                    YELLOW: "Early payment-system degradation requires monitoring.",
                    ORANGE: "Material payment disruption affects financial continuity.",
                    RED: "Severe payment-system disruption creates systemic continuity risk."
                },

                decide: {
                    GREEN: "MAINTAIN_PAYMENT_MONITORING",
                    YELLOW: "INCREASE_PAYMENT_MONITORING",
                    ORANGE: "PREPARE_PAYMENT_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_PAYMENT_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-009
             * --------------------------------------------------------
             */

            "FIN-BANK-009": {
                id: "FIN-BANK-009",
                ruleId: "FIN-BANK-009",
                name: "Third-Party / Vendor Failure",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Critical vendor availability",
                        "Third-party service condition",
                        "Technology dependency condition",
                        "Outsourced service continuity",
                        "Recovery capability",
                        "Concentration dependency"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false
                },

                assess: {
                    GREEN: "Critical third-party services remain stable.",
                    YELLOW: "Vendor degradation requires increased monitoring.",
                    ORANGE: "Material third-party failure affects operational resilience.",
                    RED: "Severe third-party failure creates systemic continuity concern."
                },

                decide: {
                    GREEN: "MAINTAIN_THIRD_PARTY_MONITORING",
                    YELLOW: "INCREASE_VENDOR_MONITORING",
                    ORANGE: "PREPARE_THIRD_PARTY_CONTINGENCY",
                    RED: "ESCALATE_THIRD_PARTY_RESILIENCE_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules"
            },

            /*
             * --------------------------------------------------------
             * FIN-BANK-010
             * --------------------------------------------------------
             */

            "FIN-BANK-010": {
                id: "FIN-BANK-010",
                ruleId: "FIN-BANK-010",
                name: "Combined Cascading Banking Crisis",

                observe: {
                    source: "FINScenarioData",
                    indicators: [
                        "Liquidity condition",
                        "Capital condition",
                        "Credit condition",
                        "Market condition",
                        "FX condition",
                        "Cyber condition",
                        "Infrastructure condition",
                        "Payment-system condition",
                        "Third-party dependency condition"
                    ]
                },

                verify: {
                    requiredState: true,
                    requiredScenarioData: true,
                    numericalThresholdGeneration: false,
                    executionConnectionRequired: false,
                    cascadeModelRequired: true
                },

                assess: {
                    GREEN: "Combined banking conditions remain stable.",
                    YELLOW: "Multiple interacting stress indicators require heightened monitoring.",
                    ORANGE: "Multiple financial and operational stresses create significant cascading risk.",
                    RED: "Severe multi-domain banking disruption requires systemic resilience review."
                },

                decide: {
                    GREEN: "MAINTAIN_SYSTEM_MONITORING",
                    YELLOW: "INCREASE_CROSS_DOMAIN_MONITORING",
                    ORANGE: "PREPARE_CASCADING_CONTINGENCY",
                    RED: "ESCALATE_SYSTEMIC_RESILIENCE_REVIEW"
                },

                cascadeSource: "FINRules",
                affectedDomainsSource: "FINRules",

                cascadeModel: {
                    enabled: true,

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

                    note:
                        "Cascade relationships represent controlled simulation " +
                        "dependencies and possible propagation paths only. " +
                        "They do not represent inevitable outcomes."
                }
            }
        },

        /*
         * ============================================================
         * CROSS-SCENARIO MODEL
         * ============================================================
         */

        crossScenarioModel: {

            enabled: true,

            scenarios: [
                "FIN-001",
                "FIN-002",
                "FIN-003",
                "FIN-004",
                "FIN-005",
                "FIN-BANK-001",
                "FIN-BANK-002",
                "FIN-BANK-003",
                "FIN-BANK-004",
                "FIN-BANK-005",
                "FIN-BANK-006",
                "FIN-BANK-007",
                "FIN-BANK-008",
                "FIN-BANK-009",
                "FIN-BANK-010"
            ],

            relationships: [

                /*
                 * Existing FIN relationships
                 */

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
                },

                /*
                 * Banking V2 relationships
                 */

                {
                    from: "FIN-BANK-001",
                    to: "FIN-BANK-003",
                    relationship: "potential_credit_pressure"
                },

                {
                    from: "FIN-BANK-001",
                    to: "FIN-BANK-002",
                    relationship: "potential_capital_pressure"
                },

                {
                    from: "FIN-BANK-003",
                    to: "FIN-BANK-002",
                    relationship: "potential_capital_pressure"
                },

                {
                    from: "FIN-BANK-004",
                    to: "FIN-BANK-002",
                    relationship: "potential_capital_pressure"
                },

                {
                    from: "FIN-BANK-005",
                    to: "FIN-BANK-001",
                    relationship: "potential_liquidity_pressure"
                },

                {
                    from: "FIN-BANK-006",
                    to: "FIN-BANK-008",
                    relationship: "potential_payment_disruption"
                },

                {
                    from: "FIN-BANK-007",
                    to: "FIN-BANK-008",
                    relationship: "potential_payment_disruption"
                },

                {
                    from: "FIN-BANK-008",
                    to: "FIN-BANK-001",
                    relationship: "potential_liquidity_pressure"
                },

                {
                    from: "FIN-BANK-009",
                    to: "FIN-BANK-007",
                    relationship: "potential_infrastructure_pressure"
                },

                {
                    from: "FIN-BANK-010",
                    to: "FIN-BANK-001",
                    relationship: "combined_cascading_stress"
                },

                {
                    from: "FIN-BANK-010",
                    to: "FIN-BANK-002",
                    relationship: "combined_cascading_stress"
                },

                {
                    from: "FIN-BANK-010",
                    to: "FIN-BANK-003",
                    relationship: "combined_cascading_stress"
                },

                {
                    from: "FIN-BANK-010",
                    to: "FIN-BANK-006",
                    relationship: "combined_cascading_stress"
                },

                {
                    from: "FIN-BANK-010",
                    to: "FIN-BANK-007",
                    relationship: "combined_cascading_stress"
                },

                {
                    from: "FIN-BANK-010",
                    to: "FIN-BANK-008",
                    relationship: "combined_cascading_stress"
                }
            ],

            note:
                "Cross-scenario relationships represent simulation " +
                "dependencies and possible propagation paths only. " +
                "They do not represent inevitable outcomes."
        },

        /*
         * ============================================================
         * BANKING DEPENDENCY MODEL
         * ============================================================
         */

        bankingDependencyModel: {

            enabled: true,

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
                    relationship: "potential_dependency"
                },
                {
                    from: "CREDIT",
                    to: "CAPITAL",
                    relationship: "potential_dependency"
                },
                {
                    from: "MARKET",
                    to: "CAPITAL",
                    relationship: "potential_dependency"
                },
                {
                    from: "FX",
                    to: "LIQUIDITY",
                    relationship: "potential_dependency"
                },
                {
                    from: "CYBER",
                    to: "PAYMENTS",
                    relationship: "potential_dependency"
                },
                {
                    from: "INFRASTRUCTURE",
                    to: "PAYMENTS",
                    relationship: "potential_dependency"
                },
                {
                    from: "THIRD_PARTY",
                    to: "INFRASTRUCTURE",
                    relationship: "potential_dependency"
                },
                {
                    from: "PAYMENTS",
                    to: "LIQUIDITY",
                    relationship: "potential_dependency"
                }
            ],

            deterministic: true,
            predictive: false,

            note:
                "Dependency relationships are controlled simulation " +
                "mappings. They do not constitute forecasts or guaranteed outcomes."
        },

        /*
         * ============================================================
         * OUTPUT REQUIREMENTS
         * ============================================================
         */

        outputRequirements: [
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

            stages: [
                "INPUT",
                "OBSERVE",
                "VERIFY",
                "ASSESS",
                "DECIDE",
                "HUMAN_AUTHORIZE",
                "SIMULATE_ACTION",
                "UPDATE",
                "AUDIT",
                "REPEAT"
            ],

            deterministic: true,

            repeatabilityRequired: true,

            note:
                "Validation evaluates deterministic simulator behaviour " +
                "against controlled scenario inputs. It does not constitute " +
                "banking certification, financial advice, or live-system validation."
        },

        /*
         * ============================================================
         * AUTHORITY BOUNDARY
         * ============================================================
         */

        authorityBoundary: {

            autonomousDecision: false,

            autonomousActuation: false,

            physicalExecution: false,

            financialExecution: false,

            marketExecution: false,

            bankingSystemConnection: false,

            customerAccountAccess: false,

            transactionExecution: false,

            externalExecution: false,

            humanDecisionAuthority: true,

            note:
                "Scenario rules may structure and map a simulated " +
                "decision path. Final authority remains human. " +
                "ACT represents simulated action only."
        },

        /*
         * ============================================================
         * GOVERNANCE
         * ============================================================
         */

        governance: {

            rulesAreVersioned: true,

            numericalThresholdGeneration: false,

            futureMarketPrediction: false,

            bankingTransactionExecution: false,

            marketOrderExecution: false,

            externalSystemControl: false,

            autonomousAuthority: false,

            humanDecisionAuthority: true,

            note:
                "FIN rules are deterministic algorithm mappings for " +
                "controlled financial-resilience simulation. They do not " +
                "predict future financial outcomes and do not execute " +
                "banking, payment, or market transactions."
        }
    };

    /*
     * ================================================================
     * EXPORT
     * ================================================================
     */

    global.FINScenarioRules = FINScenarioRules;

    if (typeof module !== "undefined" && module.exports) {
        module.exports = FINScenarioRules;
    }

})(typeof window !== "undefined" ? window : globalThis);