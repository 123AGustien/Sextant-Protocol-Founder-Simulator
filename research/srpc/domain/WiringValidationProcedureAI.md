/*
 * Sextant Protocol™
 * SRPC Technology Domain Simulator Factory
 *
 * File:
 * research/srpc/domain/ScenarioRules.js
 *
 * Purpose:
 * Scenario-specific rule definitions.
 *
 * Boundary:
 * SCENARIO RULES ONLY.
 *
 * This file does not perform compute,
 * make autonomous decisions, or perform actions.
 */

(function (global) {
    "use strict";

    const VERSION = "0.1.0-RESEARCH";

    const ScenarioRules = {

        version: VERSION,

        domain: "technology-domain",

        scenarioRules: [

            {
                id: "SCENARIO-RULE-001",

                name: "Scenario Availability Check",

                description:
                    "Confirms that scenario availability remains within the defined safe range.",

                input: "availability",

                minimum: 0,

                maximum: 100,

                status: "ACTIVE"
            },

            {
                id: "SCENARIO-RULE-002",

                name: "Scenario Integrity Check",

                description:
                    "Confirms that scenario integrity remains within the defined safe range.",

                input: "integrity",

                minimum: 0,

                maximum: 100,

                status: "ACTIVE"
            },

            {
                id: "SCENARIO-RULE-003",

                name: "Scenario Stability Check",

                description:
                    "Confirms that scenario stability remains within the defined safe range.",

                input: "stability",

                minimum: 0,

                maximum: 100,

                status: "ACTIVE"
            },

            {
                id: "SCENARIO-RULE-004",

                name: "Human Authority Requirement",

                description:
                    "Confirms that final decision authority remains with the Human Decision Authority.",

                input: "humanAuthorizationRequired",

                requiredValue: true,

                status: "ACTIVE"
            }
        ],

        getRules: function () {

            return JSON.parse(
                JSON.stringify(this.scenarioRules)
            );
        },

        getRuleById: function (ruleId) {

            const rule =
                this.scenarioRules.find(
                    function (item) {
                        return item.id === ruleId;
                    }
                );

            return rule
                ? JSON.parse(JSON.stringify(rule))
                : null;
        },

        evaluateRule: function (ruleId, value) {

            const rule =
                this.getRuleById(ruleId);

            if (!rule) {

                return {
                    ruleId: ruleId,
                    passed: false,
                    status: "RULE_NOT_FOUND"
                };
            }

            if (rule.requiredValue !== undefined) {

                const passed =
                    value === rule.requiredValue;

                return {
                    ruleId: rule.id,
                    passed: passed,
                    value: value,
                    requiredValue:
                        rule.requiredValue,
                    status:
                        passed
                            ? "PASS"
                            : "FAIL"
                };
            }

            const numericValue =
                Number(value);

            const passed =
                Number.isFinite(numericValue) &&
                numericValue >= rule.minimum &&
                numericValue <= rule.maximum;

            return {
                ruleId: rule.id,
                passed: passed,
                value: value,
                minimum: rule.minimum,
                maximum: rule.maximum,
                status:
                    passed
                        ? "PASS"
                        : "FAIL"
            };
        },

        evaluateAll: function (inputs) {

            if (!inputs || typeof inputs !== "object") {

                return [
                    {
                        ruleId: "SCENARIO-RULE-INPUT",
                        passed: false,
                        status: "INVALID_INPUT"
                    }
                ];
            }

            return [

                this.evaluateRule(
                    "SCENARIO-RULE-001",
                    inputs.availability
                ),

                this.evaluateRule(
                    "SCENARIO-RULE-002",
                    inputs.integrity
                ),

                this.evaluateRule(
                    "SCENARIO-RULE-003",
                    inputs.stability
                ),

                this.evaluateRule(
                    "SCENARIO-RULE-004",
                    inputs.humanAuthorizationRequired
                )
            ];
        },

        assess: function (results) {

            if (!Array.isArray(results)) {

                return {
                    status: "REVIEW_REQUIRED",
                    allRulesPassed: false,
                    ruleCount: 0,
                    passedCount: 0,
                    failedCount: 0
                };
            }

            const allPassed =
                results.length > 0 &&
                results.every(
                    function (result) {
                        return result.passed === true;
                    }
                );

            return {

                status:
                    allPassed
                        ? "PASS"
                        : "REVIEW_REQUIRED",

                allRulesPassed:
                    allPassed,

                ruleCount:
                    results.length,

                passedCount:
                    results.filter(
                        function (result) {
                            return result.passed === true;
                        }
                    ).length,

                failedCount:
                    results.filter(
                        function (result) {
                            return result.passed === false;
                        }
                    ).length
            };
        }
    };

    global.SextantScenarioRules =
        ScenarioRules;

})(window);