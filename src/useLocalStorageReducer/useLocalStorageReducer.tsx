import {
  useEffect,
  useReducer,
  Reducer,
  ReducerState,
  Dispatch,
  ReducerAction,
} from "react";
import ExpiredStorage from "expired-storage";

export function useLocalStorageReducer<I>(
  key: string,
  reducer: Reducer<any, any>,
  initialState: I,
  expire: number | boolean = 60 * 30
): [
  ReducerState<Reducer<any, any>>,
  Dispatch<ReducerAction<Reducer<any, any>>>
] {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (initialState) => {
      try {
        const expiredStorage = new ExpiredStorage();
        // Get from local storage by key

        const item = expiredStorage.getItem(key);
        // Parse stored json or if none return initialValue

        return item ? JSON.parse(item) : JSON.parse(initialState);
      } catch (error) {
        // If error also return initialValue
        console.error(error);
        return initialState;
      }
    }
  );

  useEffect(() => {
    try {
      const expiredStorage = new ExpiredStorage();

      expire !== false && typeof expire === "number"
        ? expiredStorage.setItem(key, JSON.stringify(state), expire)
        : window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      // TODO: A more advanced implementation would handle the error case
      console.error(error);
    }

    localStorage.setItem(key, JSON.stringify(state));
  }, [expire, key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;
