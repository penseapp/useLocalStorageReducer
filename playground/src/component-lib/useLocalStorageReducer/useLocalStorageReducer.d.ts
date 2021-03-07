import React, { Reducer, ReducerState } from "react";
export declare function useLocalStorageReducer<INTERFACE, ACTION>(
  key: string,
  reducer: Reducer<INTERFACE, React.Dispatch<ACTION>>,
  initialState: INTERFACE,
  expire?: number | boolean
): [
  ReducerState<Reducer<INTERFACE, ACTION>>,
  React.Dispatch<React.Dispatch<ACTION>>
];
export default useLocalStorageReducer;
