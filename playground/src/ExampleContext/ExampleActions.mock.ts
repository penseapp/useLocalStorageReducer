import { ExampleContextInterface } from "./ExampleInterface";

export const ExampleMock: ExampleContextInterface = {
  field1: "mock 1",
  field2: "mock 2",
  field3: "mock 3",
  field4: "mock 4",
};

interface CustomState extends Partial<ExampleContextInterface> {}

export const generateExampleMock = (
  state: CustomState
): ExampleContextInterface => {
  return {
    ...state,
    ...ExampleMock,
  };
};
