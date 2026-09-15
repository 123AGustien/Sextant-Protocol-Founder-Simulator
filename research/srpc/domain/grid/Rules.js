(function (global) {

  const GridRules = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    rules: [

      {
        id: "GRID-RULE-001",
        name: "Grid Availability",
        description: "Verify that grid availability remains within the defined operating range.",

        evaluate: function (inputs) {
          const value = inputs.systemState.availability;

          return {
            ruleId: "GRID-RULE-001",
            passed: value >= 0 && value <= 100,
            value: value,
            assessment: value >= 80 ? "STABLE" : "DEGRADED"
          };
        }
      },

      {
        id: "GRID-RULE-002",
        name: "Grid Integrity",
        description: "Verify that system integrity remains within the defined operating range.",

        evaluate: function (inputs) {
          const value = inputs.systemState.integrity;

          return {
            ruleId: "GRID-RULE-002",
            passed: value >= 0 && value <= 100,
            value: value,
            assessment: value >= 80 ? "STABLE" : "DEGRADED"
          };
        }
      },

      {
        id: "GRID-RULE-003",
        name: "Grid Stability",
        description: "Verify that grid stability remains within the defined operating range.",

        evaluate: function (inputs) {
          const value = inputs.systemState.stability;

          return {
            ruleId: "GRID-RULE-003",
            passed: value >= 0 && value <= 100,
            value: value,
            assessment: value >= 80 ? "STABLE" : "DEGRADED"
          };
        }
      },

      {
        id: "GRID-RULE-004",
        name: "Grid Load",
        description: "Assess current grid loading against the defined 0–100 percent range.",

        evaluate: function (inputs) {
          const value = inputs.energy.gridLoadPercent;

          return {
            ruleId: "GRID-RULE-004",
            passed: value >= 0 && value <= 100,
            value: value,
            assessment:
              value >= 90
                ? "HIGH_LOAD"
                : value >= 75
                ? "ELEVATED_LOAD"
                : "NORMAL_LOAD"
          };
        }
      },

      {
        id: "GRID-RULE-005",
        name: "Renewable Energy Contribution",
        description: "Verify that renewable energy contribution remains within the defined range.",

        evaluate: function (inputs) {
          const value = inputs.energy.renewablePercent;

          return {
            ruleId: "GRID-RULE-005",
            passed: value >= 0 && value <= 100,
            value: value,
            assessment:
              value >= 50
                ? "HIGH_RENEWABLE_CONTRIBUTION"
                : "LOWER_RENEWABLE_CONTRIBUTION"
          };
        }
      },

      {
        id: "GRID-RULE-006",
        name: "Carbon Intensity",
        description: "Observe carbon intensity as a grid resilience input without directly controlling the physical grid.",

        evaluate: function (inputs) {
          const value = inputs.energy.carbonIntensity;

          return {
            ruleId: "GRID-RULE-006",
            passed: value >= 0 && value <= 100,
            value: value,
            assessment:
              value <= 40
                ? "LOW"
                : value <= 70
                ? "MODERATE"
                : "HIGH"
          };
        }
      }

    ],

    getRules: function () {
      return this.rules;
    },

    getRuleCount: function () {
      return this.rules.length;
    }

  };

  global.SextantGridRules = GridRules;

})(window);