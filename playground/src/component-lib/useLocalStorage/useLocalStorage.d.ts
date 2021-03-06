/**
 * An implement of the same API of react useState but with the difference of
 * localStorage persist. So, you can change your state and when the user reload
 * the browser, the state will persist!
 *
 * @param key name of the key to be stored on localStorage
 * @param initialValue value to be the default, like useState('defaultvalue')
 * @param expire time in seconds to expiry this state, set false to infinite
 */
export declare function useLocalStorage<T>(key: string, initialValue: T, expire?: number | boolean): [T, (value: T) => void];
export default useLocalStorage;
