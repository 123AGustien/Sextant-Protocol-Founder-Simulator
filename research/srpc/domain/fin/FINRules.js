/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Rules
 *
 * ALGORITHM DEFINITION LAYER
 *
 * Defines deterministic assessment, decision and cascade rules
 * for the FIN resilience domain.
 *
 * DATA remains in:
 *     FINScenarioData
 *
 * Scenario-specific verification logic remains in:
 *     FINScenarioRules
 *
 * Execution remains in:
 *     FINRuleEngine
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 *
 * Safety Boundary:
 * - Simulation only
 * - No banking connection
 * - No customer account access
 * - No financial transaction execution
 * - No market order execution
 * - No autonomous authority
 * - Human Decision Authority remains final
 */

(function (global) {
    "use strict";

    const FINRules = {

        name: "FINRules",
        domain: "FIN",
        version: "2.0.0",

        architecture: "DATA → ALGORITHMS → COMPUTE",

        goldenRule:
            "OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE",

        safety: {
            simulationOnly: true,
            physicalExecution: false,
            financialExecution: false,
            marketExecution: false,
            autonomousAuthority: false,
            humanDecisionAuthority: true
        },

        /*
         * ------------------------------------------------------------
         * FIN RULE DEFINITIONS
         * ------------------------------------------------------------
         *
         * Each scenario contains deterministic rules for:
         *
         * assess[riskState]
         * decide[riskState]
         * cascade[riskState]
         *
         * No numerical thresholds are generated here.
         * Numerical values, when supplied in a future controlled
         * research configuration, must originate from authoritative
         * scenario data rather than being invented by this layer.
         */

        rules: {

            /*
             * --------------------------------------------------------
             * FIN V1 — FX STRESS
             * --------------------------------------------------------
             */

            "FIN-001": {

                assess: {
                    GREEN:
                        "FX environment within the configured research state. No escalation indicated.",
                    YELLOW:
                        "FX stress requires enhanced observation and verification.",
                    ORANGE:
                        "Material FX stress requires controlled resilience assessment.",
                    RED:
                        "Severe FX stress requires immediate simulated contingency assessment."
                },

                decide: {
                    GREEN:
                        "Continue monitoring under normal simulated resilience controls.",
                    YELLOW:
                        "Increase monitoring and prepare simulated FX contingency options.",
                    ORANGE:
                        "Activate simulated FX stress-response workflow subject to human authorization.",
                    RED:
                        "Escalate to human decision authority for simulated crisis-response selection."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["FX"],
                    ORANGE: ["FX", "LIQUIDITY"],
                    RED: ["FX", "LIQUIDITY", "CREDIT", "CAPITAL"]
                }
            },

            /*
             * --------------------------------------------------------
             * FIN V1 — LIQUIDITY STRESS
             * --------------------------------------------------------
             */

            "FIN-002": {

                assess: {
                    GREEN:
                        "Liquidity position remains within the configured research state.",
                    YELLOW:
                        "Liquidity pressure requires enhanced observation and verification.",
                    ORANGE:
                        "Significant liquidity pressure requires controlled resilience assessment.",
                    RED:
                        "Critical liquidity stress requires simulated crisis-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated liquidity monitoring.",
                    YELLOW:
                        "Increase liquidity monitoring and prepare contingency options.",
                    ORANGE:
                        "Prepare simulated liquidity preservation and escalation actions.",
                    RED:
                        "Escalate liquidity crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["LIQUIDITY", "CREDIT"],
                    RED: ["LIQUIDITY", "CREDIT", "CAPITAL", "PAYMENTS"]
                }
            },

            /*
             * --------------------------------------------------------
             * FIN V1 — CREDIT STRESS
             * --------------------------------------------------------
             */

            "FIN-003": {

                assess: {
                    GREEN:
                        "Credit environment remains within the configured research state.",
                    YELLOW:
                        "Credit deterioration requires enhanced counterparty observation.",
                    ORANGE:
                        "Material credit deterioration requires controlled counterparty assessment.",
                    RED:
                        "Critical credit stress requires simulated systemic-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated credit monitoring.",
                    YELLOW:
                        "Increase counterparty monitoring and prepare contingency options.",
                    ORANGE:
                        "Prepare simulated credit-risk containment options.",
                    RED:
                        "Escalate counterparty crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["CREDIT"],
                    ORANGE: ["CREDIT", "LIQUIDITY"],
                    RED: ["CREDIT", "LIQUIDITY", "CAPITAL", "MARKET"]
                }
            },

            /*
             * --------------------------------------------------------
             * FIN V1 — INTEREST-RATE SHOCK
             * --------------------------------------------------------
             */

            "FIN-004": {

                assess: {
                    GREEN:
                        "Interest-rate environment remains within the configured research state.",
                    YELLOW:
                        "Interest-rate movement requires enhanced observation.",
                    ORANGE:
                        "Material rate stress requires controlled balance-sheet resilience assessment.",
                    RED:
                        "Severe rate stress requires simulated crisis-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated rate monitoring.",
                    YELLOW:
                        "Increase rate-risk monitoring and prepare contingency options.",
                    ORANGE:
                        "Prepare simulated interest-rate stress-response options.",
                    RED:
                        "Escalate rate-stress options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["MARKET"],
                    ORANGE: ["MARKET", "CAPITAL"],
                    RED: ["MARKET", "CAPITAL", "LIQUIDITY", "CREDIT"]
                }
            },

            /*
             * --------------------------------------------------------
             * FIN V1 — INFLATION SHOCK
             * --------------------------------------------------------
             */

            "FIN-005": {

                assess: {
                    GREEN:
                        "Inflation environment remains within the configured research state.",
                    YELLOW:
                        "Inflation pressure requires enhanced observation.",
                    ORANGE:
                        "Material inflation stress requires controlled financial-resilience assessment.",
                    RED:
                        "Severe inflation stress requires simulated systemic-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated inflation monitoring.",
                    YELLOW:
                        "Increase macro-financial monitoring and prepare contingency options.",
                    ORANGE:
                        "Prepare simulated inflation-stress response options.",
                    RED:
                        "Escalate systemic inflation-response options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["MARKET"],
                    ORANGE: ["MARKET", "CAPITAL"],
                    RED: ["MARKET", "CAPITAL", "LIQUIDITY", "CREDIT"]
                }
            },

            /*
             * ========================================================
             * FIN BANKING V2
             * ========================================================
             */

            /*
             * FIN-BANK-001
             * Banking Liquidity Stress
             */

            "FIN-BANK-001": {

                assess: {
                    GREEN:
                        "Banking liquidity state remains within the configured research state.",
                    YELLOW:
                        "Liquidity pressure requires enhanced observation and verification.",
                    ORANGE:
                        "Material liquidity stress requires controlled banking resilience assessment.",
                    RED:
                        "Critical liquidity stress requires simulated banking crisis assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated liquidity resilience monitoring.",
                    YELLOW:
                        "Increase liquidity monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated liquidity preservation and escalation options.",
                    RED:
                        "Escalate simulated liquidity crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["LIQUIDITY", "CREDIT"],
                    RED: ["LIQUIDITY", "CREDIT", "CAPITAL", "PAYMENTS"]
                }
            },

            /*
             * FIN-BANK-002
             * Banking Capital Stress
             */

            "FIN-BANK-002": {

                assess: {
                    GREEN:
                        "Banking capital state remains within the configured research state.",
                    YELLOW:
                        "Capital pressure requires enhanced observation and verification.",
                    ORANGE:
                        "Material capital stress requires controlled resilience assessment.",
                    RED:
                        "Critical capital stress requires simulated crisis assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated capital-resilience monitoring.",
                    YELLOW:
                        "Increase capital monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated capital-preservation and escalation options.",
                    RED:
                        "Escalate capital crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["CAPITAL"],
                    ORANGE: ["CAPITAL", "LIQUIDITY"],
                    RED: ["CAPITAL", "LIQUIDITY", "CREDIT", "MARKET"]
                }
            },

            /*
             * FIN-BANK-003
             * Credit / Counterparty Failure
             */

            "FIN-BANK-003": {

                assess: {
                    GREEN:
                        "Counterparty environment remains within the configured research state.",
                    YELLOW:
                        "Counterparty deterioration requires enhanced observation.",
                    ORANGE:
                        "Material counterparty stress requires controlled credit-resilience assessment.",
                    RED:
                        "Critical counterparty failure requires simulated systemic assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated counterparty monitoring.",
                    YELLOW:
                        "Increase counterparty monitoring and prepare simulated containment options.",
                    ORANGE:
                        "Prepare simulated credit-containment and escalation options.",
                    RED:
                        "Escalate counterparty-failure options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["CREDIT"],
                    ORANGE: ["CREDIT", "LIQUIDITY"],
                    RED: ["CREDIT", "LIQUIDITY", "CAPITAL", "MARKET"]
                }
            },

            /*
             * FIN-BANK-004
             * Market Shock
             */

            "FIN-BANK-004": {

                assess: {
                    GREEN:
                        "Market environment remains within the configured research state.",
                    YELLOW:
                        "Market stress requires enhanced observation and verification.",
                    ORANGE:
                        "Material market stress requires controlled resilience assessment.",
                    RED:
                        "Severe market shock requires simulated crisis assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated market-risk monitoring.",
                    YELLOW:
                        "Increase market monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated market-stress response options.",
                    RED:
                        "Escalate market crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["MARKET"],
                    ORANGE: ["MARKET", "CAPITAL"],
                    RED: ["MARKET", "CAPITAL", "LIQUIDITY", "CREDIT"]
                }
            },

            /*
             * FIN-BANK-005
             * FX Shock
             */

            "FIN-BANK-005": {

                assess: {
                    GREEN:
                        "FX environment remains within the configured research state.",
                    YELLOW:
                        "FX pressure requires enhanced observation and verification.",
                    ORANGE:
                        "Material FX stress requires controlled banking resilience assessment.",
                    RED:
                        "Severe FX shock requires simulated systemic crisis assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated FX resilience monitoring.",
                    YELLOW:
                        "Increase FX monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated FX-stress response options.",
                    RED:
                        "Escalate FX crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["FX"],
                    ORANGE: ["FX", "LIQUIDITY"],
                    RED: ["FX", "LIQUIDITY", "CREDIT", "CAPITAL"]
                }
            },

            /*
             * FIN-BANK-006
             * Banking Cyber Incident
             */

            "FIN-BANK-006": {

                assess: {
                    GREEN:
                        "Cyber environment remains within the configured research state.",
                    YELLOW:
                        "Cyber indicators require enhanced observation and verification.",
                    ORANGE:
                        "Material cyber disruption requires controlled banking resilience assessment.",
                    RED:
                        "Critical cyber incident requires simulated systemic-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated cyber-resilience monitoring.",
                    YELLOW:
                        "Increase cyber monitoring and prepare simulated containment options.",
                    ORANGE:
                        "Prepare simulated cyber-containment and service-continuity options.",
                    RED:
                        "Escalate cyber crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["CYBER"],
                    ORANGE: ["CYBER", "PAYMENTS"],
                    RED: ["CYBER", "PAYMENTS", "INFRASTRUCTURE", "LIQUIDITY"]
                }
            },

            /*
             * FIN-BANK-007
             * Critical Infrastructure Failure
             */

            "FIN-BANK-007": {

                assess: {
                    GREEN:
                        "Critical infrastructure remains within the configured research state.",
                    YELLOW:
                        "Infrastructure degradation requires enhanced observation.",
                    ORANGE:
                        "Material infrastructure failure requires controlled resilience assessment.",
                    RED:
                        "Critical infrastructure failure requires simulated systemic-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated infrastructure-resilience monitoring.",
                    YELLOW:
                        "Increase infrastructure monitoring and prepare continuity options.",
                    ORANGE:
                        "Prepare simulated infrastructure-continuity options.",
                    RED:
                        "Escalate infrastructure crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["INFRASTRUCTURE"],
                    ORANGE: ["INFRASTRUCTURE", "PAYMENTS"],
                    RED: ["INFRASTRUCTURE", "PAYMENTS", "CYBER", "LIQUIDITY"]
                }
            },

            /*
             * FIN-BANK-008
             * Payment-System Disruption
             */

            "FIN-BANK-008": {

                assess: {
                    GREEN:
                        "Payment-system state remains within the configured research state.",
                    YELLOW:
                        "Payment-system degradation requires enhanced observation.",
                    ORANGE:
                        "Material payment disruption requires controlled resilience assessment.",
                    RED:
                        "Critical payment disruption requires simulated systemic-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated payment-system monitoring.",
                    YELLOW:
                        "Increase payment monitoring and prepare simulated continuity options.",
                    ORANGE:
                        "Prepare simulated payment-continuity and escalation options.",
                    RED:
                        "Escalate payment-system crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["PAYMENTS"],
                    ORANGE: ["PAYMENTS", "LIQUIDITY"],
                    RED: ["PAYMENTS", "LIQUIDITY", "INFRASTRUCTURE", "CYBER"]
                }
            },

            /*
             * FIN-BANK-009
             * Third-Party / Vendor Failure
             */

            "FIN-BANK-009": {

                assess: {
                    GREEN:
                        "Third-party dependency state remains within the configured research state.",
                    YELLOW:
                        "Third-party degradation requires enhanced dependency observation.",
                    ORANGE:
                        "Material vendor failure requires controlled resilience assessment.",
                    RED:
                        "Critical third-party failure requires simulated systemic-response assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated third-party dependency monitoring.",
                    YELLOW:
                        "Increase dependency monitoring and prepare simulated continuity options.",
                    ORANGE:
                        "Prepare simulated vendor-continuity and escalation options.",
                    RED:
                        "Escalate third-party crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["THIRD_PARTY"],
                    ORANGE: ["THIRD_PARTY", "INFRASTRUCTURE"],
                    RED: ["THIRD_PARTY", "INFRASTRUCTURE", "PAYMENTS", "LIQUIDITY"]
                }
            },

            /*
             * FIN-BANK-010
             * Combined Cascading Banking Crisis
             */

            "FIN-BANK-010": {

                assess: {
                    GREEN:
                        "Combined banking system remains within the configured research state.",
                    YELLOW:
                        "Multiple interacting risk domains require enhanced observation and verification.",
                    ORANGE:
                        "Multi-domain banking stress requires controlled cascade assessment.",
                    RED:
                        "Combined cascading banking crisis requires full simulated resilience assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated multi-domain resilience monitoring.",
                    YELLOW:
                        "Increase cross-domain monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated coordinated resilience-response options.",
                    RED:
                        "Escalate coordinated crisis-response options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["FIN"],
                    ORANGE: [
                        "FIN",
                        "LIQUIDITY",
                        "CREDIT",
                        "CAPITAL"
                    ],
                    RED: [
                        "FIN",
                        "LIQUIDITY",
                        "CREDIT",
                        "CAPITAL",
                        "MARKET",
                        "FX",
                        "CYBER",
                        "INFRASTRUCTURE",
                        "PAYMENTS",
                        "THIRD_PARTY"
                    ]
                }
            },

            /*
             * ========================================================
             * FIN FISCAL → BANKING RESILIENCE V2
             * ========================================================
             */

            /*
             * FIN-FISCAL-001
             * Fiscal / APBN Stress
             */

            "FIN-FISCAL-001": {

                assess: {
                    GREEN:
                        "Fiscal conditions remain within the configured research state.",
                    YELLOW:
                        "Emerging fiscal pressure requires enhanced observation and verification.",
                    ORANGE:
                        "Material fiscal pressure requires controlled financial-system resilience assessment.",
                    RED:
                        "Severe fiscal stress requires simulated banking-system contingency assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated fiscal and banking resilience monitoring.",
                    YELLOW:
                        "Increase fiscal-resilience monitoring and prepare simulated liquidity contingency options.",
                    ORANGE:
                        "Prepare simulated fiscal-to-banking resilience options subject to human authorization.",
                    RED:
                        "Escalate simulated fiscal-to-banking crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["LIQUIDITY", "CREDIT"],
                    RED: ["LIQUIDITY", "CREDIT", "CAPITAL", "PAYMENTS"]
                }
            },

            /*
             * FIN-FISCAL-002
             * FX & Sovereign Confidence Stress
             */

            "FIN-FISCAL-002": {

                assess: {
                    GREEN:
                        "Fiscal-to-FX conditions remain within the configured research state.",
                    YELLOW:
                        "Emerging fiscal-to-FX pressure requires enhanced observation and verification.",
                    ORANGE:
                        "Material fiscal-to-FX pressure requires controlled liquidity and banking resilience assessment.",
                    RED:
                        "Severe fiscal-to-FX pressure requires simulated systemic resilience assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated fiscal and FX resilience monitoring.",
                    YELLOW:
                        "Increase FX and liquidity monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated fiscal-to-FX-to-liquidity response options subject to human authorization.",
                    RED:
                        "Escalate simulated fiscal-to-FX crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["FX"],
                    ORANGE: ["FX", "LIQUIDITY"],
                    RED: ["FX", "LIQUIDITY", "CREDIT", "CAPITAL"]
                }
            },

            /*
             * FIN-FISCAL-003
             * Fiscal → Banking Liquidity Cascade
             */

            "FIN-FISCAL-003": {

                assess: {
                    GREEN:
                        "No material fiscal-to-banking liquidity pressure is indicated in the configured research state.",
                    YELLOW:
                        "Initial fiscal-to-banking liquidity propagation requires enhanced observation.",
                    ORANGE:
                        "Material fiscal-to-banking liquidity propagation requires controlled resilience assessment.",
                    RED:
                        "Severe fiscal-to-banking liquidity propagation requires simulated crisis assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated fiscal-to-banking liquidity monitoring.",
                    YELLOW:
                        "Increase liquidity monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated liquidity-preservation and escalation options subject to human authorization.",
                    RED:
                        "Escalate simulated fiscal-to-banking liquidity crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["LIQUIDITY", "CREDIT"],
                    RED: ["LIQUIDITY", "CREDIT", "CAPITAL", "PAYMENTS"]
                }
            },

            /*
             * FIN-FISCAL-004
             * Government Spending / Programme Pressure
             */

            "FIN-FISCAL-004": {

                assess: {
                    GREEN:
                        "Government spending and programme conditions remain within the configured research state.",
                    YELLOW:
                        "Government spending or programme pressure requires enhanced liquidity observation.",
                    ORANGE:
                        "Material programme-flow pressure requires controlled corporate and banking resilience assessment.",
                    RED:
                        "Severe programme-flow pressure requires simulated liquidity and credit crisis assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated fiscal-flow and banking resilience monitoring.",
                    YELLOW:
                        "Increase liquidity monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated fiscal-liquidity and credit-response options subject to human authorization.",
                    RED:
                        "Escalate simulated fiscal-flow crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["LIQUIDITY", "CREDIT"],
                    RED: ["LIQUIDITY", "CREDIT", "CAPITAL", "PAYMENTS"]
                }
            },

            /*
             * FIN-FISCAL-005
             * Tax Refund / Corporate Liquidity Stress
             */

            "FIN-FISCAL-005": {

                assess: {
                    GREEN:
                        "Tax-refund and corporate liquidity conditions remain within the configured research state.",
                    YELLOW:
                        "Corporate liquidity pressure requires enhanced observation and verification.",
                    ORANGE:
                        "Material corporate liquidity pressure requires controlled banking resilience assessment.",
                    RED:
                        "Severe corporate liquidity pressure requires simulated credit, capital and payment assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated corporate and banking liquidity monitoring.",
                    YELLOW:
                        "Increase corporate liquidity monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated corporate-liquidity and credit-containment options subject to human authorization.",
                    RED:
                        "Escalate simulated corporate liquidity crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["LIQUIDITY", "CREDIT"],
                    RED: ["LIQUIDITY", "CREDIT", "CAPITAL", "PAYMENTS"]
                }
            },

            /*
             * FIN-FISCAL-006
             * Institutional Coordination Stress
             */

            "FIN-FISCAL-006": {

                assess: {
                    GREEN:
                        "Institutional coordination remains within the configured research state.",
                    YELLOW:
                        "Coordination delay requires enhanced observation and verification.",
                    ORANGE:
                        "Material coordination stress requires controlled financial-resilience assessment.",
                    RED:
                        "Severe coordination stress requires simulated multi-domain resilience assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated institutional-coordination monitoring.",
                    YELLOW:
                        "Increase coordination and decision-latency monitoring and prepare contingency options.",
                    ORANGE:
                        "Prepare simulated coordinated liquidity, credit and payment-response options.",
                    RED:
                        "Escalate simulated institutional-coordination crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["LIQUIDITY", "CREDIT", "PAYMENTS"],
                    RED: [
                        "LIQUIDITY",
                        "CREDIT",
                        "CAPITAL",
                        "INFRASTRUCTURE",
                        "PAYMENTS"
                    ]
                }
            },

            /*
             * FIN-FISCAL-007
             * Fiscal → FX → Credit → Payments Cascade
             */

            "FIN-FISCAL-007": {

                assess: {
                    GREEN:
                        "No material fiscal-to-banking cascade is indicated in the configured research state.",
                    YELLOW:
                        "Initial fiscal-to-FX propagation requires enhanced observation and verification.",
                    ORANGE:
                        "Fiscal, FX, liquidity and credit propagation requires controlled cascade assessment.",
                    RED:
                        "Full fiscal-to-FX-to-credit-to-payments propagation requires simulated systemic assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated cross-domain fiscal resilience monitoring.",
                    YELLOW:
                        "Increase fiscal and FX monitoring and prepare simulated cascade-containment options.",
                    ORANGE:
                        "Prepare simulated coordinated fiscal, FX, liquidity and credit-response options.",
                    RED:
                        "Escalate the simulated multi-domain cascade to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: [
                        "FISCAL",
                        "FX"
                    ],
                    ORANGE: [
                        "FISCAL",
                        "FX",
                        "LIQUIDITY",
                        "CREDIT"
                    ],
                    RED: [
                        "FISCAL",
                        "FX",
                        "LIQUIDITY",
                        "CREDIT",
                        "CAPITAL",
                        "PAYMENTS"
                    ]
                }
            },

            /*
             * FIN-FISCAL-008
             * Fiscal Credibility / Budget Sustainability Stress
             */

            "FIN-FISCAL-008": {

                assess: {
                    GREEN:
                        "Fiscal sustainability remains within the configured research state.",
                    YELLOW:
                        "Emerging fiscal sustainability pressure requires enhanced observation.",
                    ORANGE:
                        "Material sustained fiscal pressure requires controlled financial-resilience assessment.",
                    RED:
                        "Severe sustained fiscal pressure requires simulated systemic resilience assessment."
                },

                decide: {
                    GREEN:
                        "Continue simulated fiscal-sustainability and banking resilience monitoring.",
                    YELLOW:
                        "Increase fiscal, FX and liquidity monitoring and prepare simulated contingency options.",
                    ORANGE:
                        "Prepare simulated fiscal-to-banking resilience options subject to human authorization.",
                    RED:
                        "Escalate simulated fiscal-sustainability crisis options to human decision authority."
                },

                cascade: {
                    GREEN: [],
                    YELLOW: ["LIQUIDITY"],
                    ORANGE: ["FX", "LIQUIDITY", "CREDIT"],
                    RED: ["FX", "LIQUIDITY", "CREDIT", "CAPITAL", "PAYMENTS"]
                }
            }

        },

        /*
         * ------------------------------------------------------------
         * VALIDATION
         * ------------------------------------------------------------
         */

        validate: function () {

            const requiredScenarios = [
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
                "FIN-BANK-010",

                /*
                 * FIN FISCAL → BANKING V2
                 */

                "FIN-FISCAL-001",
                "FIN-FISCAL-002",
                "FIN-FISCAL-003",
                "FIN-FISCAL-004",
                "FIN-FISCAL-005",
                "FIN-FISCAL-006",
                "FIN-FISCAL-007",
                "FIN-FISCAL-008"
            ];

            const riskStates = [
                "GREEN",
                "YELLOW",
                "ORANGE",
                "RED"
            ];

            requiredScenarios.forEach(function (scenarioId) {

                const rule = this.rules[scenarioId];

                if (!rule) {
                    throw new Error(
                        "Missing FIN rule: " + scenarioId
                    );
                }

                if (!rule.assess) {
                    throw new Error(
                        "Missing FIN assessment rules: " + scenarioId
                    );
                }

                if (!rule.decide) {
                    throw new Error(
                        "Missing FIN decision rules: " + scenarioId
                    );
                }

                if (!rule.cascade) {
                    throw new Error(
                        "Missing FIN cascade rules: " + scenarioId
                    );
                }

                riskStates.forEach(function (riskState) {

                    if (
                        typeof rule.assess[riskState] !== "string"
                    ) {
                        throw new Error(
                            "Missing FIN assessment state " +
                            riskState +
                            " for " +
                            scenarioId
                        );
                    }

                    if (
                        typeof rule.decide[riskState] !== "string"
                    ) {
                        throw new Error(
                            "Missing FIN decision state " +
                            riskState +
                            " for " +
                            scenarioId
                        );
                    }

                    if (
                        !Array.isArray(rule.cascade[riskState])
                    ) {
                        throw new Error(
                            "Invalid FIN cascade state " +
                            riskState +
                            " for " +
                            scenarioId
                        );
                    }

                }, this);

            }, this);

            return true;
        },

        /*
         * ------------------------------------------------------------
         * STATUS
         * ------------------------------------------------------------
         */

        getStatus: function () {

            let valid = false;

            try {
                valid = this.validate();
            } catch (error) {
                valid = false;
            }

            return {
                component: this.name,
                domain: this.domain,
                version: this.version,
                architecture: this.architecture,
                goldenRule: this.goldenRule,
                valid: valid,
                scenarioCount:
                    Object.keys(this.rules).length,
                safety: this.safety
            };
        }
    };

    /*
     * ------------------------------------------------------------
     * EXPORT
     * ------------------------------------------------------------
     */

    global.FINRules = FINRules;

    if (
        typeof module !== "undefined" &&
        module.exports
    ) {
        module.exports = FINRules;
    }

})(typeof window !== "undefined" ? window : globalThis);