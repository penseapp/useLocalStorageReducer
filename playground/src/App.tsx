import React, { useContext } from "react";
import "./App.css";
import { ExampleContext } from "./ExampleContext/ExampleContext";
import { ExampleTypesEnum } from "./ExampleContext/ExampleInterface";

const App: React.FC = () => {
  const { stateExample, dispatchExample } = useContext(ExampleContext);

  const handleFieldUpdate = (key: string, newValue: string) => {
    dispatchExample({
      type: ExampleTypesEnum.UPDATE_STATE,
      newState: {
        ...stateExample,
        [key]: newValue,
      },
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/logo512.png"
          alt="Penseapp logo"
          width="250px"
          height="auto"
        />
        <a
          href="https://github.com/penseapp/useLocalStorageReducer"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://www.kindpng.com/picc/m/128-1280187_github-logo-png-github-transparent-png.png"
            alt="Penseapp logo"
            width="250px"
            style={{ borderRadius: "8px" }}
            height="auto"
          />
        </a>
      </header>
      <section className="App-body">
        <>
          <h3>useLocalStorageReducer hook</h3>
          <h4>Edit the fields and reload the browser</h4>
          <br />
        </>

        <div className="row">
          <div className="container">
            {Object.entries(stateExample).map(([key, field]) => (
              <div className="container" style={{ marginBottom: "1em" }}>
                <label className="ignore" htmlFor={key}>
                  {key}
                </label>
                <input
                  id={key}
                  onChange={(e) => handleFieldUpdate(key, e.target.value)}
                  defaultValue={field}
                  value={field}
                />
              </div>
            ))}
          </div>
          <div className="container">
            <div className="container">
              <pre>{JSON.stringify(stateExample, undefined, 2)}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
