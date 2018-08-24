import React from 'react';
import { Provider } from 'unstated';
import CounterBasic from './Containers/CounterBasic';
import CounterUgly from './Containers/CounterUgly';
import CounterPretty from './Containers/CounterPretty';

// This is how to use a state container from `unstated` package through your app.
// See `./Containers/CounterBasic.js` to start.
const App = () => (
  <Provider>
    <CounterBasic />
    <CounterUgly />
    <CounterPretty />
  </Provider>
);

export default App;
