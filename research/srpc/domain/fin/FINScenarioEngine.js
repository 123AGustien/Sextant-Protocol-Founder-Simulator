/*
 * Sextant Protocol™
 * Financial Resilience Domain
 * FIN Scenario Engine
 *
 * SIMPLE SCENARIO EXECUTION ORCHESTRATION
 *
 * Golden Rule:
 * OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE
 */

(function (global) {

  const FINScenarioEngine = {

    version: "0.1.0-FIN-RESEARCH",

    domain: "fin",

    execute: function () {

      const scenario = global.FINScenario;

      if (!scenario) {
        return {
          engine: "FIN_SCENARIO_ENGINE",
          version: this.version,
          domain: this.domain,
          status: "DEPENDENCY_MISSING",
          dependency: "FINScenario"
        };
      }

      const validation = scenario.validate();

      if (!validation.valid) {
        return {
          engine: "FIN_SCENARIO_ENGINE",
          version: this.version,
          domain: this.domain,
          status: "VALIDATION_FAILED",
          validation: validation
        };
      }

      const inputs =
        typeof scenario.getInputs === "function"
          ? scenario.getInputs()
          : {};

      let ruleResult = {
        status: "PASS"
      };

      if (
        global.FINScenarioRuleEngine &&
        typeof global.FINScenarioRuleEngine.evaluate === "function"
      ) {
        ruleResult =
          global.FINScenarioRuleEngine.evaluate(inputs);
      }

      return {
        engine: "FIN_SCENARIO_ENGINE",
        version: this.version,
        domain: this.domain,

        scenario:
          typeof scenario.getScenario === "function"
            ? scenario.getScenario()
            : {},

        validation: validation,

        ruleEvaluation: ruleResult,

        status:
          ruleResult.status === "PASS"
            ? "PASS"
            : "REVIEW_REQUIRED"
      };
    }

  };

  global.FINScenarioEngine = FINScenarioEngine;

})(window);