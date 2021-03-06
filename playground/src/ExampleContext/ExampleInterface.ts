import { UPDATE_STATE } from "./actions/updateStateAction";

export interface ExampleContextInterface {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
}

export type ExampleAction = UPDATE_STATE;

export enum ExampleTypesEnum {
  UPDATE_STATE,
}
