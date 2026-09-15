(function (global) {

  const GridScenario = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    scenarioId: "GRID-SCENARIO-001",

    getScenario: function () {

      const data = global.SextantGridScenarioData;

      return {
        id: data.scenario.id,
        name: data.scenario.name,
        status: data.scenario.status,
        domain: data.domain,
        version: data.version
      };
    },

    getInputs: function () {

      const data = global.SextantGridScenarioData;

      return data.getInputs();
    },

    getSafety: function () {

      const data = global.SextantGridScenarioData;

      return data.safety;
    },

    validate: function () {

      const data = global.SextantGridScenarioData;

      return data.validate();
    }

  };

  global.SextantGridScenario = GridScenario;

})(window);