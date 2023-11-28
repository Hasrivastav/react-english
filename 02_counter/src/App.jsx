import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter => counter + 1);
  };

  const decreaseCounter = () => {
    if (counter === 0) {
      // Do nothing if counter is already 0
      return;
    } else {
      setCounter(counter => counter - 1);
    }
  };

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addCounter}>Increase counter</button>
      <br />
      <button id='decreaseId' onClick={decreaseCounter} disabled={counter === 0}>
        Decrease counter
      </button>
    </>
  );
}

export default App;
