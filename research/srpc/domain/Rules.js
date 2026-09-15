/*
 * Sextant Protocol™
 * SRPC Technology Domain Simulator Factory
 *
 * File:
 * research/srpc/domain/Rules.js
 *
 * Purpose:
 * Domain rule definitions and rule evaluation.
 *
 * Boundary:
 * RULES ONLY.
 */

(function (global) {
    "use strict";

    const VERSION = "0.1.0-RESEARCH";

    const Rules = {

        version: VERSION,

        domain: "technology-domain",

        rules: [
            {
                id: "DOMAIN-RULE-001",
                name: "Availability Check",
                description:
                    "Checks whether the available system capacity is within the defined safe range.",
                input: "availability",
                minimum: 0,
                maximum: 100,
                status: "ACTIVE"
            },

            {
                id: "DOMAIN-RULE-002",
                name: "Integrity Check",
                description:
                    "Checks whether system integrity is within the defined safe range.",
                input: "integrity",
                minimum: 0,
                maximum: 100,
                status: "ACTIVE"
            },

            {
                id: "DOMAIN-RULE-003",
                name: "Stability Check",
                description:
                    "Checks whether system stability is within the defined safe range.",
                input: "stability",
                minimum: 0,
                maximum: 100,
                status: "ACTIVE"
            },

            {
                id: "DOMAIN-RULE-004",
                name: "Human Authority Check",
                description:
                    "Confirms that final authority remains with the Human Decision Authority.",
                input: "humanAuthorizationRequired",
                requiredValue: true,
                status: "ACTIVE"
            }
        ],

        getRules: function () {
            return JSON.parse(JSON.stringify(this.rules));
        },

        getRuleById: function (ruleId) {

            const rule = this.rules.find(function (item) {
                return item.id === ruleId;
            });

            return rule
                ? JSON.parse(JSON.stringify(rule))
                : null;
        },

        evaluateRule: function (ruleId, value) {

            const rule = this.getRuleById(ruleId);

            if (!rule) {
                return {
                    ruleId: ruleId,
                    passed: false,
                    status: "RULE_NOT_FOUND"
                };
            }

            if (rule.requiredValue !== undefined) {

                return {
                    ruleId: rule.id,
                    passed: value === rule.requiredValue,
                    status:
                        value === rule.requiredValue
                            ? "PASS"
                            : "FAIL"
                };
            }

            const numericValue = Number(value);

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
                status: passed ? "PASS" : "FAIL"
            };
        },

        evaluateAll: function (inputs) {

            const results = [];

            results.push(
                this.evaluateRule(
                    "DOMAIN-RULE-001",
                    inputs.availability
                )
            );

            results.push(
                this.evaluateRule(
                    "DOMAIN-RULE-002",
                    inputs.integrity
                )
            );

            results.push(
                this.evaluateRule(
                    "DOMAIN-RULE-003",
                    inputs.stability
                )
            );

            results.push(
                this.evaluateRule(
                    "DOMAIN-RULE-004",
                    inputs.humanAuthorizationRequired
                )
            );

            return results;
        },

        assess: function (results) {

            const allPassed = results.every(function (result) {
                return result.passed === true;
            });

            return {
                status: allPassed ? "PASS" : "REVIEW_REQUIRED",
                allRulesPassed: allPassed,
                ruleCount: results.length,
                passedCount: results.filter(function (result) {
                    return result.passed === true;
                }).length,
                failedCount: results.filter(function (result) {
                    return result.passed === false;
                }).length
            };
        }
    };

    global.SextantDomainRules = Rules;

})(window);