import React, { useState } from "react";
import "./App.css";
import { useLocalStorage } from "./component-lib";

const App: React.FC = () => {
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [useStateEx, setUseStateEx] = useState<string>("useState");
  const [expireTime, setExpireTime] = useLocalStorage<false | number>(
    "expireTime",
    60
  );
  const [shouldExpire, setShouldExpire] = useLocalStorage<boolean>(
    "shouldExpire",
    true
  );
  const [useLocalStorageEx, setUseLocalStorageEx] = useLocalStorage<string>(
    "keyName",
    "useLocalStorage",
    shouldExpire ? expireTime : false
  );

  const handleUseStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseStateEx(event.target.value);
  };

  const handleUseLocalStorageEx = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUseLocalStorageEx(event.target.value);
    setIsDirty(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <>
          <h4>
            {isDirty ? (
              <>You changed the useLocalStorageEx hook, reload the browser!</>
            ) : (
              <>Write text on the inputs below and reload the browser</>
            )}
          </h4>
          <br />
        </>

        <div className="row">
          <div className="container">
            <div className="container">
              <label className="ignore" htmlFor="useStateEx">
                useState hook
              </label>
              <input
                id="useStateEx"
                onChange={handleUseStateChange}
                defaultValue={useStateEx}
                value={useStateEx}
              />
            </div>

            <div className="container">
              <label htmlFor="useLocalStorageEx">useLocalStorage hook</label>
              <input
                id="useLocalStorageEx"
                onChange={handleUseLocalStorageEx}
                defaultValue={useLocalStorageEx}
                value={useLocalStorageEx}
              />
            </div>
          </div>
          <div className="container">
            <div className="container">
              <div>
                <input
                  type="radio"
                  id="expire"
                  name="expireTime"
                  checked={shouldExpire}
                  value={"expire"}
                  onChange={() => setShouldExpire(true)}
                ></input>
                <label htmlFor="louie">I want the state to expire</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="dont-expire"
                  name="expireTime"
                  checked={!shouldExpire}
                  value="dont-expire"
                  onChange={() => setShouldExpire(false)}
                ></input>
                <label htmlFor="louie">I don't want the state to expire</label>
              </div>
            </div>

            {/* <label htmlFor="expireTime">Time in seconds to expire</label> */}
            <div className="container">
              <label htmlFor="expireTime">
                Your state will expire in: {expireTime} seconds
              </label>
              <input
                disabled={!shouldExpire}
                id="expireTime"
                type="number"
                min="1"
                step="10"
                onChange={(e) => setExpireTime(parseInt(e.target.value))}
                defaultValue={expireTime.toString()}
                value={expireTime.toString()}
              />
              {/* <caption style={{}}>
                Your state will expire in: {expireTime} seconds
              </caption> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
