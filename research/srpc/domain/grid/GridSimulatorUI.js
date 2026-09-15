(function (global) {

  const GridSimulatorUI = {

    version: "0.1.0-GRID-RESEARCH",

    domain: "grid",

    elements: {},

    init: function () {

      this.elements.output =
        document.getElementById("grid-output");

      this.elements.status =
        document.getElementById("grid-status");

      this.elements.runButton =
        document.getElementById("grid-run-button");

      this.elements.determinismButton =
        document.getElementById("grid-determinism-button");

      if (this.elements.runButton) {
        this.elements.runButton.onclick = () => {
          this.runSystem();
        };
      }

      if (this.elements.determinismButton) {
        this.elements.determinismButton.onclick = () => {
          this.testDeterminism();
        };
      }

      this.updateStatus("READY");
    },

    updateStatus: function (status) {

      if (this.elements.status) {
        this.elements.status.textContent = status;
      }
    },

    runSystem: function () {

      this.updateStatus("RUNNING");

      if (!global.SextantGridModule) {
        this.display({
          status: "MODULE_ERROR"
        });

        this.updateStatus("MODULE_ERROR");
        return;
      }

      const result =
        global.SextantGridModule.run();

      this.display(result);

      this.updateStatus(result.status || "COMPLETE");
    },

    testDeterminism: function () {

      this.updateStatus("TESTING_DETERMINISM");

      if (!global.SextantGridModule) {
        this.display({
          status: "MODULE_ERROR"
        });

        this.updateStatus("MODULE_ERROR");
        return;
      }

      const first =
        global.SextantGridModule.run();

      const second =
        global.SextantGridModule.run();

      const firstOutput =
        JSON.stringify(first);

      const secondOutput =
        JSON.stringify(second);

      const passed =
        firstOutput === secondOutput;

      const result = {

        test: "GRID_DOMAIN_INTEGRATION_DETERMINISM",

        status:
          passed
            ? "DOMAIN_INTEGRATION_DETERMINISM_PASS"
            : "DOMAIN_INTEGRATION_DETERMINISM_FAIL",

        firstRun: first,

        secondRun: second,

        identical:
          passed
      };

      this.display(result);

      this.updateStatus(result.status);
    },

    display: function (result) {

      if (!this.elements.output) {
        return;
      }

      this.elements.output.textContent =
        JSON.stringify(result, null, 2);
    }

  };

  global.SextantGridSimulatorUI =
    GridSimulatorUI;

})(window);