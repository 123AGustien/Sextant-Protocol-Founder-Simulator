(function (global) {

  const GridScenarioRules = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    scenarioId: "GRID-SCENARIO-001",

    rules: [

      {
        id: "GRID-SCENARIO-RULE-001",
        name: "Grid Resilience Baseline",
        description: "Assess the combined availability, integrity, and stability of the grid scenario.",

        evaluate: function (inputs) {

          const availability = inputs.systemState.availability;
          const integrity = inputs.systemState.integrity;
          const stability = inputs.systemState.stability;

          const resilience =
            (availability + integrity + stability) / 3;

          return {
            ruleId: "GRID-SCENARIO-RULE-001",
            passed: resilience >= 0 && resilience <= 100,
            value: resilience,
            assessment:
              resilience >= 80
                ? "RESILIENT"
                : resilience >= 60
                ? "DEGRADED"
                : "CRITICAL"
          };
        }
      },

      {
        id: "GRID-SCENARIO-RULE-002",
        name: "Demand and Load Alignment",
        description: "Compare current energy demand with grid loading.",

        evaluate: function (inputs) {

          const demand = inputs.energy.demandPercent;
          const load = inputs.energy.gridLoadPercent;

          const difference = Math.abs(demand - load);

          return {
            ruleId: "GRID-SCENARIO-RULE-002",
            passed: difference <= 20,
            demandPercent: demand,
            gridLoadPercent: load,
            difference: difference,
            assessment:
              difference <= 10
                ? "ALIGNED"
                : difference <= 20
                ? "ACCEPTABLE_VARIANCE"
                : "SIGNIFICANT_VARIANCE"
          };
        }
      },

      {
        id: "GRID-SCENARIO-RULE-003",
        name: "Energy Composition Validation",
        description: "Verify that renewable and non-renewable energy contributions form a valid composition.",

        evaluate: function (inputs) {

          const renewable = inputs.energy.renewablePercent;
          const nonRenewable = inputs.energy.nonRenewablePercent;

          const total = renewable + nonRenewable;

          return {
            ruleId: "GRID-SCENARIO-RULE-003",
            passed: total === 100,
            renewablePercent: renewable,
            nonRenewablePercent: nonRenewable,
            totalPercent: total,
            assessment:
              total === 100
                ? "VALID_COMPOSITION"
                : "COMPOSITION_ERROR"
          };
        }
      }

    ],

    getRules: function () {
      return this.rules;
    },

    getRuleCount: function () {
      return this.rules.length;
    },

    getScenarioId: function () {
      return this.scenarioId;
    }

  };

  global.SextantGridScenarioRules = GridScenarioRules;

})(window);