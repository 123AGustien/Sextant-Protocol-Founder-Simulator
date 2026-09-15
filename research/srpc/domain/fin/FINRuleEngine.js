/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Rule Engine
 *
 * ALGORITHM EXECUTION LAYER
 *
 * DATA:
 *   FINScenarioData
 *
 * ALGORITHMS:
 *   FINRules
 *   FINScenarioRules
 *
 * COMPUTE / EXECUTION:
 *   This engine executes the governed deterministic logic.
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 *
 * ACT is simulated only.
 * No banking transaction.
 * No market execution.
 * No physical execution.
 * Human Decision Authority remains final.
 */

(function (global) {
    "use strict";

    const FINRuleEngine = {

        name: "FINRuleEngine",
        domain: "FIN",
        version: "1.0.0",

        evaluationSequence: [
            "OBSERVE",
            "VERIFY",
            "ASSESS",
            "DECIDE",
            "ACT",
            "UPDATE"
        ],

        safety: {
            simulationOnly: true,
            physicalExecution: false,
            financialExecution: false,
            marketExecution: false,
            autonomousAuthority: false,
            humanDecisionAuthority: true
        },

        getRuleSources: function () {

            return {
                scenarioData: global.FINScenarioData || null,
                rules: global.FINRules || null,
                scenarioRules: global.FINScenarioRules || null
            };
        },

        validateRuleSources: function () {

            const sources = this.getRuleSources();

            if (!sources.scenarioData) {
                throw new Error("FINScenarioData is required.");
            }

            if (!sources.rules) {
                throw new Error("FINRules is required.");
            }

            if (!sources.scenarioRules) {
                throw new Error("FINScenarioRules is required.");
            }

            return true;
        },

        validateScenarioId: function (scenarioId) {

            this.validateRuleSources();

            if (
                typeof scenarioId !== "string" ||
                !this.getRuleSources().scenarioData.scenarios[scenarioId]
            ) {
                throw new Error(
                    "Unknown FIN scenario: " + scenarioId
                );
            }

            return true;
        },

        validateRiskState: function (riskState) {

            const validStates = [
                "GREEN",
                "YELLOW",
                "ORANGE",
                "RED"
            ];

            if (!validStates.includes(riskState)) {
                throw new Error(
                    "Invalid FIN risk state: " + riskState
                );
            }

            return true;
        },

        getScenarioRule: function (scenarioId) {

            this.validateScenarioId(scenarioId);

            const scenarioRules =
                this.getRuleSources().scenarioRules;

            return scenarioRules.scenarios[scenarioId];
        },

        getScenarioData: function (scenarioId) {

            this.validateScenarioId(scenarioId);

            return this
                .getRuleSources()
                .scenarioData
                .scenarios[scenarioId];
        },

        observe: function (scenarioId, input) {

            const data = this.getScenarioData(scenarioId);
            const rule = this.getScenarioRule(scenarioId);

            return {
                stage: "OBSERVE",
                scenarioId: scenarioId,
                indicators: data.primaryIndicators || [],
                observedIndicators:
                    rule.observe.indicators || [],
                input: input || {}
            };
        },

        verify: function (scenarioId, riskState, observation) {

            this.validateScenarioId(scenarioId);
            this.validateRiskState(riskState);

            if (!observation) {
                throw new Error(
                    "Observation result is required for verification."
                );
            }

            const scenarioRule =
                this.getScenarioRule(scenarioId);

            return {
                stage: "VERIFY",
                scenarioId: scenarioId,
                riskState: riskState,
                scenarioDataVerified: true,
                ruleMappingVerified: true,
                requiredStateVerified:
                    scenarioRule.verify.requiredState === true,
                numericalThresholdGeneration:
                    scenarioRule.verify.numericalThresholdGeneration === true
            };
        },

        assess: function (scenarioId, riskState) {

            this.validateScenarioId(scenarioId);
            this.validateRiskState(riskState);

            const rule =
                this.getRuleSources()
                    .rules
                    .rules[scenarioId];

            if (!rule) {
                throw new Error(
                    "FIN rule not found: " + scenarioId
                );
            }

            return {
                stage: "ASSESS",
                scenarioId: scenarioId,
                riskLevel: riskState,
                assessment: rule.assess[riskState]
            };
        },

        decide: function (scenarioId, riskState) {

            this.validateScenarioId(scenarioId);
            this.validateRiskState(riskState);

            const rule =
                this.getRuleSources()
                    .rules
                    .rules[scenarioId];

            if (!rule) {
                throw new Error(
                    "FIN decision rule not found: " + scenarioId
                );
            }

            return {
                stage: "DECIDE",
                scenarioId: scenarioId,
                riskLevel: riskState,
                decision: rule.decide[riskState]
            };
        },

        act: function (scenarioId, riskState, decision) {

            this.validateScenarioId(scenarioId);
            this.validateRiskState(riskState);

            return {
                stage: "ACT",
                scenarioId: scenarioId,
                riskLevel: riskState,
                decision: decision,
                actionMode: "SIMULATED_ONLY",
                executed: false,
                physicalExecution: false,
                financialExecution: false,
                marketExecution: false,
                autonomousActuation: false,
                humanDecisionAuthority: true,
                simulatedAction:
                    "Simulated contingency action only. " +
                    "No external or financial action was executed."
            };
        },

        update: function (
            scenarioId,
            riskState,
            observation,
            assessment,
            decision,
            action
        ) {

            this.validateScenarioId(scenarioId);
            this.validateRiskState(riskState);

            const timestamp =
                new Date().toISOString();

            const auditLogEntry = {
                timestamp: timestamp,
                domain: "FIN",
                scenarioId: scenarioId,
                riskLevel: riskState,
                stages: [
                    "OBSERVE",
                    "VERIFY",
                    "ASSESS",
                    "DECIDE",
                    "ACT",
                    "UPDATE"
                ],
                decision:
                    decision.decision,
                actionMode:
                    action.actionMode,
                executed:
                    action.executed,
                humanDecisionAuthority: true
            };

            return {
                stage: "UPDATE",
                scenarioId: scenarioId,
                riskLevel: riskState,
                memoryUpdate: {
                    scenarioId: scenarioId,
                    riskLevel: riskState,
                    decision:
                        decision.decision,
                    simulatedAction:
                        action.simulatedAction
                },
                auditLogEntry: auditLogEntry
            };
        },

        evaluate: function (
            scenarioId,
            riskState,
            input
        ) {

            this.validateRuleSources();
            this.validateScenarioId(scenarioId);
            this.validateRiskState(riskState);

            const safeInput = input || {};

            const observation =
                this.observe(
                    scenarioId,
                    safeInput
                );

            const verification =
                this.verify(
                    scenarioId,
                    riskState,
                    observation
                );

            const assessment =
                this.assess(
                    scenarioId,
                    riskState
                );

            const decision =
                this.decide(
                    scenarioId,
                    riskState
                );

            const action =
                this.act(
                    scenarioId,
                    riskState,
                    decision.decision
                );

            const update =
                this.update(
                    scenarioId,
                    riskState,
                    observation,
                    assessment,
                    decision,
                    action
                );

            const scenarioData =
                this.getScenarioData(scenarioId);

            const rule =
                this.getRuleSources()
                    .rules
                    .rules[scenarioId];

            return {

                domain: "FIN",

                scenarioId: scenarioId,

                riskLevel: riskState,

                evaluationSequence:
                    this.evaluationSequence,

                observe: observation,

                verify: verification,

                assessment:
                    assessment.assessment,

                decision:
                    decision.decision,

                cascadePath:
                    rule.cascade[riskState] || [],

                affectedDomains:
                    scenarioData.affectedDomains || [],

                recommendedContingencyActions:
                    scenarioData.contingencyActions || [],

                act: action,

                simulatedAction:
                    action.simulatedAction,

                update: update,

                auditLogEntry:
                    update.auditLogEntry,

                governance: {
                    simulationOnly: true,
                    physicalExecution: false,
                    financialExecution: false,
                    marketExecution: false,
                    autonomousAuthority: false,
                    humanDecisionAuthority: true
                }
            };
        },

        testDeterminism: function (
            scenarioId,
            riskState,
            input
        ) {

            const first =
                this.evaluate(
                    scenarioId,
                    riskState,
                    input || {}
                );

            const second =
                this.evaluate(
                    scenarioId,
                    riskState,
                    input || {}
                );

            const firstComparable =
                JSON.parse(
                    JSON.stringify(first)
                );

            const secondComparable =
                JSON.parse(
                    JSON.stringify(second)
                );

            if (
                firstComparable.auditLogEntry &&
                secondComparable.auditLogEntry
            ) {
                delete firstComparable.auditLogEntry.timestamp;
                delete secondComparable.auditLogEntry.timestamp;
            }

            const identical =
                JSON.stringify(firstComparable) ===
                JSON.stringify(secondComparable);

            return {
                deterministic: identical,
                first: firstComparable,
                second: secondComparable
            };
        },

        getStatus: function () {

            let valid = false;

            try {
                valid = this.validateRuleSources();
            } catch (error) {
                valid = false;
            }

            return {
                engine: this.name,
                domain: this.domain,
                version: this.version,
                valid: valid,
                safety: this.safety,
                evaluationSequence:
                    this.evaluationSequence
            };
        }
    };

    global.FINRuleEngine = FINRuleEngine;

    if (
        typeof module !== "undefined" &&
        module.exports
    ) {
        module.exports = FINRuleEngine;
    }

})(typeof window !== "undefined" ? window : globalThis);