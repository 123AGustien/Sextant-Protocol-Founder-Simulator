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
  },

  {
    id: "GRID-SCENARIO-RULE-004",
    ruleId: "INF-001",
    name: "Regional Network Outage",
    description: "Evaluate system resilience under regional or large-scale network outage conditions and assess cascading impacts across dependent domains.",

    domain: "Infrastructure Resilience",

    category: "Network Connectivity Failure",

    status: "Active",

    version: "1.0",

    evaluate: function (inputs) {

      const network =
        inputs.network || {};

      const connectivity =
        typeof network.connectivityPercent === "number"
          ? network.connectivityPercent
          : 100;

      const packetLoss =
        typeof network.packetLossPercent === "number"
          ? network.packetLossPercent
          : 0;

      const dnsFailures =
        typeof network.dnsFailures === "number"
          ? network.dnsFailures
          : 0;

      const latency =
        typeof network.latencyMs === "number"
          ? network.latencyMs
          : 0;

      let riskLevel = "GREEN";

      if (
        connectivity < 25 ||
        packetLoss >= 50 ||
        dnsFailures >= 50
      ) {

        riskLevel = "RED";

      } else if (
        connectivity < 60 ||
        packetLoss >= 20 ||
        dnsFailures >= 20 ||
        latency >= 500
      ) {

        riskLevel = "ORANGE";

      } else if (
        connectivity < 90 ||
        packetLoss > 0 ||
        dnsFailures > 0 ||
        latency >= 150
      ) {

        riskLevel = "YELLOW";

      }

      let cascadePath = [];

      if (riskLevel === "ORANGE") {

        cascadePath = [
          "Network Instability",
          "Service Degradation",
          "Inter-System Communication Failure",
          "Operational Impact"
        ];

      }

      if (riskLevel === "RED") {

        cascadePath = [
          "Network Outage",
          "Infrastructure Isolation",
          "Service Disruption",
          "Cross-Domain Systemic Risk"
        ];

      }

      let recommendedActions = [];

      if (riskLevel === "YELLOW") {

        recommendedActions = [
          "Increase monitoring of routing and connectivity layers."
        ];

      }

      if (riskLevel === "ORANGE") {

        recommendedActions = [
          "Activate redundant routing paths.",
          "Reroute traffic through stable regions."
        ];

      }

      if (riskLevel === "RED") {

        recommendedActions = [
          "Activate emergency rerouting.",
          "Failover to backup regions.",
          "Restore connectivity via alternative backbone providers."
        ];

      }

      return {

        ruleId: "INF-001",

        scenarioRuleId:
          "GRID-SCENARIO-RULE-004",

        passed:
          riskLevel === "GREEN",

        riskLevel:
          riskLevel,

        indicators: {

          connectivityPercent:
            connectivity,

          packetLossPercent:
            packetLoss,

          dnsFailures:
            dnsFailures,

          latencyMs:
            latency

        },

        affectedDomains: [
          "INF",
          "DC",
          "CYB",
          "FIN"
        ],

        cascadePath:
          cascadePath,

        recommendedContingencyActions:
          recommendedActions,

        humanAuthorizationRequired:
          true,

        autonomousActuation:
          false,

        physicalExecution:
          false

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