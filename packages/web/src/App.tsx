import React, {useState} from 'react';
import {testAddPlus1} from '@my-ts-standard/my-ts-core';

export const App: React.FC = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      Hello world
      <br />
      Result = {testAddPlus1(2, 8)}
      <button onClick={() => setCount(count + 1)}>Count = {count}</button>
    </div>
  );
};
