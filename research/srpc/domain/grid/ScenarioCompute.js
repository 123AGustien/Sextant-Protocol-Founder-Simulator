(function (global) {

  const GridScenarioCompute = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    execute: function (scenarioResult) {

      if (!scenarioResult) {
        return {
          compute: "GRID_SCENARIO_COMPUTE",
          version: this.version,
          domain: this.domain,
          status: "COMPUTE_INPUT_MISSING"
        };
      }

      const ruleEvaluation =
        scenarioResult.ruleEvaluation || {};

      const scenarioRuleEvaluation =
        scenarioResult.scenarioRuleEvaluation || {};

      const passedRules =
        (ruleEvaluation.passedRules || 0) +
        (scenarioRuleEvaluation.passedRules || 0);

      const failedRules =
        (ruleEvaluation.failedRules || 0) +
        (scenarioRuleEvaluation.failedRules || 0);

      const totalRules =
        (ruleEvaluation.totalRules || 0) +
        (scenarioRuleEvaluation.totalRules || 0);

      let decision = "REVIEW_REQUIRED";

      if (failedRules === 0 && totalRules > 0) {
        decision = "MAINTAIN_SAFE_STATE";
      }

      if (failedRules > 0) {
        decision = "REQUEST_DIAGNOSTICS";
      }

      return {
        compute: "GRID_SCENARIO_COMPUTE",
        version: this.version,
        domain: this.domain,

        status:
          failedRules === 0
            ? "COMPUTE_PASS"
            : "COMPUTE_REVIEW_REQUIRED",

        ruleSummary: {
          totalRules: totalRules,
          passedRules: passedRules,
          failedRules: failedRules
        },

        decision: decision,

        humanAuthorizationRequired: true,

        autonomousActuation: false,

        physicalExecution: false
      };
    }

  };

  global.SextantGridScenarioCompute = GridScenarioCompute;

})(window);