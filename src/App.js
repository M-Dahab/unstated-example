import React from 'react';
import { Provider } from 'unstated';
import Counter from './Counter';
import Counter2 from './Counter2';
import './App.css';

const App = () => (
  <Provider>
    <Counter />
    <Counter2 />
  </Provider>
);

export default App;
