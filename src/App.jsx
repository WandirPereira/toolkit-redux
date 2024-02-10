import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatcher = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <h2>count is {counter}</h2>
      <div className="card">
        <button onClick={() => dispatcher(decrement())}>Decrementar</button>
        <button onClick={() => dispatcher(increment())}>Incrementar</button>
        <button onClick={() => dispatcher(incrementByAmount(4))}>
          IncrementByAmount
        </button>
      </div>
    </>
  );
}

export default App;
