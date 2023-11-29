import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
    //interview quesions
    // what will happen if we do does it will increase the counter by 5 or what willhappen
    
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    //answeer - the increment is just by 1 because  useState send all the update to be done on ui in a batch (i,e fiber logic)
    //React will batch these state updates together and execute them in a single update.
    
    //but if you want such functinalty you can use it like this
    
    setCounter(prevCounter => prevCounter+1);
    // prevCOunter here is the latest updated state which you fetched again
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
