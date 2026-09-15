(function (global) {

  const GridDomainIntegration = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    execute: function () {

      const scenarioEngine =
        global.SextantGridScenarioEngine;

      const scenarioCompute =
        global.SextantGridScenarioCompute;

      if (!scenarioEngine || !scenarioCompute) {
        return {
          integration: "GRID_DOMAIN_INTEGRATION",
          version: this.version,
          domain: this.domain,
          status: "INTEGRATION_ERROR"
        };
      }

      const scenarioResult =
        scenarioEngine.execute();

      const computeResult =
        scenarioCompute.execute(scenarioResult);

      return {
        integration: "GRID_DOMAIN_INTEGRATION",

        version: this.version,

        domain: this.domain,

        status: scenarioResult.status,

        scenario: scenarioResult.scenario,

        validation: scenarioResult.validation,

        ruleEvaluation:
          scenarioResult.ruleEvaluation,

        scenarioRuleEvaluation:
          scenarioResult.scenarioRuleEvaluation,

        compute: computeResult,

        safety: {
          localDeterministic: true,
          backendConnection: false,
          externalConnection: false,
          physicalExecution: false,
          autonomousActuation: false,
          humanAuthorizationRequired: true
        }
      };
    }

  };

  global.SextantGridDomainIntegration =
    GridDomainIntegration;

})(window);