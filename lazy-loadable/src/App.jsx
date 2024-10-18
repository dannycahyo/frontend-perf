import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import useLazyLoadImage from "./useLazyLoadImage";

const LoadableComponent = loadableVisibility(
  () => import("./LazyComponent"),
  {
    fallback: <div>Loading ....</div>,
  },
);

function App() {
  const [count, setCount] = useState(0);
  const reactLogoRef = useLazyLoadImage(reactLogo);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            loading="lazy"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ height: "100vh" }}></div>
      <a href="https://react.dev" target="_blank">
        <img
          ref={reactLogoRef}
          className="logo react"
          alt="React logo"
        />
      </a>

      <LoadableComponent />
    </>
  );
}

export default App;
