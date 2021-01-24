import React from 'react';
import {testAddPlus1} from '@my-ts-standard/my-ts-core';

export const App: React.FC = () => {
  return (
    <div>
      Hello world
      <br />
      Result = {testAddPlus1(2, 8)}
    </div>
  );
};
