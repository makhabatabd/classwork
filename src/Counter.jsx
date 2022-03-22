import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount(count + 1);
  }
  function reduceCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{`Вы нажали на кнопку ${count} раз`}</h1>
      <button onClick={addCount}>+</button>
      <button onClick={reduceCount}>-</button>
    </div>
  );
};

export default Counter;
