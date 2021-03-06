import { Reducer, ReducerState, Dispatch, ReducerAction } from "react";
export declare function useLocalStorageReducer<I>(
  key: string,
  reducer: Reducer<any, any>,
  initialState: I,
  expire?: number | boolean
): [
  ReducerState<Reducer<any, any>>,
  Dispatch<ReducerAction<Reducer<any, any>>>
];
export default useLocalStorageReducer;
