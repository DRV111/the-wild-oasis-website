'use client';
import { useState } from 'react';

export default function Counter({ user }) {
  const [count, setCount] = useState(0);

  function incr() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>There are {user.length} users</p>
      <button onClick={incr}>+</button>
      <p>{count}</p>
      <button onClick={dec}>-</button>
    </div>
  );
}
