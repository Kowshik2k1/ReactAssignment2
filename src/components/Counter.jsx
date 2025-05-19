import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  const DecrementCounter = () => {
    setCounter(counter - 1);
  };

  const ResetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <p className="text-center">{counter}</p>
      <div className="text-center">
        <button className="btn" onClick={IncrementCounter}>
          Increment +
        </button>
        <button className="btn" onClick={ResetCounter}>
          Reset
        </button>
        <button className="btn" onClick={DecrementCounter}>
          Decrement -
        </button>
      </div>
    </>
  );
};

export default Counter;
