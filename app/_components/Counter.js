'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={incr}>+</button>
      <p>{count}</p>
      <button onClick={dec}>-</button>
    </div>
  );
}
