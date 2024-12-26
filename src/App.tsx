import "./App.css";
import { CounterStore } from "./store/store";

function App() {
  const count = CounterStore((state) => state.count);
  const increment = CounterStore((state) => state.increment);
  const decrement = CounterStore((state) => state.decrement);

  return (
    <>
      <div>
        <h2>A Simple counter application for testing Zustand!</h2>
        <h1>Current Count: {count}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <br></br>
      </div>
    </>
  );
}

export default App;
