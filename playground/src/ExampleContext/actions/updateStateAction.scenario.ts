import { exampleInitialState } from "./../ExampleInitializer";
import { generateExampleMock } from "./../ExampleActions.mock";
import { ExampleContextInterface } from "./../ExampleInterface";

interface ExpectedInterface extends ExampleContextInterface {}

interface ScenarioInterface {
  scenarioName: string;
  state: ExampleContextInterface;
  newState: ExampleContextInterface;
  expected: ExpectedInterface;
}

type ExampleScenarios = ScenarioInterface[];

export const updateStateScenarios: ExampleScenarios = [
  {
    scenarioName: "Keep initial state if not changes",
    state: generateExampleMock(exampleInitialState),
    newState: generateExampleMock(exampleInitialState),
    expected: generateExampleMock(exampleInitialState),
  },
];
