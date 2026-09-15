(function (global) {

  const GridModule = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    name: "Sextant Grid Module",

    type: "TECHNOLOGY_DOMAIN_MODULE",

    description:
      "Deterministic Grid Energy Resilience research simulator.",

    safety: {
      localDeterministic: true,
      backendConnection: false,
      externalConnection: false,
      physicalExecution: false,
      autonomousActuation: false,
      humanAuthorizationRequired: true
    },

    getMetadata: function () {

      return {
        name: this.name,
        domain: this.domain,
        version: this.version,
        type: this.type,
        description: this.description,
        safety: this.safety
      };
    },

    run: function () {

      if (!global.SextantGridDomainIntegration) {
        return {
          status: "MODULE_ERROR",
          domain: this.domain
        };
      }

      return global.SextantGridDomainIntegration.execute();
    }

  };

  global.SextantGridModule = GridModule;

})(window);