(function (global) {

  const GridScenarioRuleEngine = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    evaluate: function (inputs) {

      const rules = global.SextantGridScenarioRules.getRules();
      const results = [];

      for (let i = 0; i < rules.length; i++) {

        const rule = rules[i];
        const result = rule.evaluate(inputs);

        results.push({
          ruleId: rule.id,
          ruleName: rule.name,
          passed: result.passed,
          result: result
        });
      }

      const passedCount = results.filter(function (item) {
        return item.passed === true;
      }).length;

      const failedCount = results.length - passedCount;

      return {
        engine: "GRID_SCENARIO_RULE_ENGINE",
        version: this.version,
        domain: this.domain,
        totalRules: results.length,
        passedRules: passedCount,
        failedRules: failedCount,
        status: failedCount === 0 ? "PASS" : "REVIEW_REQUIRED",
        results: results
      };
    }

  };

  global.SextantGridScenarioRuleEngine = GridScenarioRuleEngine;

})(window);