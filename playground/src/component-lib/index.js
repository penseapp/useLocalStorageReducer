/* eslint-disable */
import { useReducer, useEffect } from 'react';
import ExpiredStorage from 'expired-storage';

function useLocalStorageReducer(key, reducer, initialState, expire) {
    if (expire === void 0) { expire = 60 * 30; }
    var _a = useReducer(reducer, initialState, function (initialState) {
        try {
            var expiredStorage = new ExpiredStorage();
            // Get from local storage by key
            var item = expiredStorage.getItem(key);
            var parsedInitialValue = JSON.stringify(initialState);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : JSON.parse(parsedInitialValue);
        }
        catch (error) {
            // If error also return initialValue
            console.error(error);
            return initialState;
        }
    }), state = _a[0], dispatch = _a[1];
    useEffect(function () {
        try {
            var expiredStorage = new ExpiredStorage();
            expire !== false && typeof expire === "number"
                ? expiredStorage.setItem(key, JSON.stringify(state), expire)
                : window.localStorage.setItem(key, JSON.stringify(state));
        }
        catch (error) {
            // TODO: A more advanced implementation would handle the error case
            console.error(error);
        }
        localStorage.setItem(key, JSON.stringify(state));
    }, [expire, key, state]);
    return [state, dispatch];
}

export { useLocalStorageReducer };
