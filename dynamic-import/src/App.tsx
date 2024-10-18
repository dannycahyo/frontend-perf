import { useState, lazy, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const LazyModal = lazy(() => import("./Modal"));

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyModal onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </>
  );
}

export default App;
