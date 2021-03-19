import React, { createContext } from "react";
import Reducer from "./ExampleReducer";
import { exampleInitialState } from "./ExampleInitializer";
import { ExampleContextInterface, ExampleAction } from "./ExampleInterface";
import { useLocalStorageReducer } from "../component-lib/";

export type ExampleDispatchType = React.Dispatch<ExampleAction>;

interface ExampleProviderInterface {
  stateExample: ExampleContextInterface;
  dispatchExample: ExampleDispatchType;
}

export const ExampleContext = createContext<ExampleProviderInterface>({
  stateExample: exampleInitialState,
  dispatchExample: () => console.warn("ExampleDispatch not ready"),
});

const ExampleProvider: React.FC = ({ children }) => {
  const [stateExample, dispatchExample] = useLocalStorageReducer<
    ExampleContextInterface,
    ExampleAction
  >("localStorage-key", Reducer, exampleInitialState, 60 * 60);

  const globals = {
    stateExample,
    dispatchExample,
  };

  return (
    <ExampleContext.Provider value={globals}>
      {children}
    </ExampleContext.Provider>
  );
};

export default ExampleProvider;
