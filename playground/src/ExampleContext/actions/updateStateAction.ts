import { ExampleContextInterface, ExampleTypesEnum } from "../ExampleInterface";

export type UPDATE_STATE = {
  type: ExampleTypesEnum.UPDATE_STATE;
  newState: Partial<ExampleContextInterface>;
};

export function updateStateAction(
  state: ExampleContextInterface,
  action: UPDATE_STATE
): ExampleContextInterface {
  console.log("acction", action);
  return {
    ...state,
    ...action.newState,
  };
}
