import { ExampleTypesEnum } from "../ExampleInterface";
import { updateStateAction } from "./updateStateAction";
import { updateStateScenarios as scenarios } from "./updateStateAction.scenario";

describe("File: ExampleContext", () => {
  describe("Method: updateStateAction", () => {
    const eachArr = scenarios.map((scenario) => [
      scenario.scenarioName,
      scenario,
    ]);

    it.each(eachArr)("Scenario: %s ", async (_, scenario) => {
      if (typeof scenario === "string") return;

      const result = updateStateAction(scenario.state, {
        type: ExampleTypesEnum.UPDATE_STATE,
        newState: scenario.newState,
      });

      expect(result).toEqual(scenario.expected);
    });
  });
});
