(function (global) {

const GridScenarioRules = {

version: "0.1.0-GRID-RESEARCH",

domain: "grid",

rules: [

  {
    id: "GRID-SCENARIO-INF-001",

    ruleId: "INF-001",

    name: "Regional Network Outage",

    domain: "Infrastructure Resilience",

    category: "Network Connectivity Failure",

    status: "Active",

    version: "1.0",

    evaluate: function (inputs) {

      const network =
        inputs && inputs.network
          ? inputs.network
          : {};

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
          "GRID-SCENARIO-INF-001",

        riskLevel: riskLevel,

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

}

};

global.SextantGridScenarioRules =
GridScenarioRules;

})(window);