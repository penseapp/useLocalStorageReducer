import { Reducer, ReducerState, Dispatch, ReducerAction } from "react";
export declare function useLocalStorageReducer<I, A>(
  key: string,
  reducer: Reducer<I, A>,
  initialState: I,
  expire?: number | boolean
): [ReducerState<Reducer<I, A>>, Dispatch<ReducerAction<Reducer<I, A>>>];
export default useLocalStorageReducer;
