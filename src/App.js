import React from 'react';
import { Provider } from 'unstated';
import CounterBasic from './Containers/CounterBasic';
import CounterUgly from './Containers/CounterUgly';
import CounterPretty from './Containers/CounterPretty';

// These counters are using the state container at `./StateContainers/counter.js`.
// See `./Containers/CounterBasic.js` to start.
const App = () => (
  <Provider>
    <CounterBasic />
    <CounterUgly />
    <CounterPretty />
  </Provider>
);

export default App;
