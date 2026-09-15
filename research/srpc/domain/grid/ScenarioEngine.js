(function (global) {

  const GridScenarioEngine = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    execute: function () {

      const scenario = global.SextantGridScenario;
      const data = global.SextantGridScenarioData;

      const validation = scenario.validate();

      if (!validation.valid) {
        return {
          engine: "GRID_SCENARIO_ENGINE",
          version: this.version,
          domain: this.domain,
          status: "VALIDATION_FAILED",
          validation: validation
        };
      }

      const inputs = data.getInputs();

      const ruleResult =
        global.SextantGridRuleEngine.evaluate(inputs);

      const scenarioRuleResult =
        global.SextantGridScenarioRuleEngine.evaluate(inputs);

      return {
        engine: "GRID_SCENARIO_ENGINE",
        version: this.version,
        domain: this.domain,

        scenario: scenario.getScenario(),

        validation: validation,

        ruleEvaluation: ruleResult,

        scenarioRuleEvaluation: scenarioRuleResult,

        status:
          ruleResult.status === "PASS" &&
          scenarioRuleResult.status === "PASS"
            ? "PASS"
            : "REVIEW_REQUIRED"
      };
    }

  };

  global.SextantGridScenarioEngine = GridScenarioEngine;

})(window);