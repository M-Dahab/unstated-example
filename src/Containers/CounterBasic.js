import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
// I'm appending 'SC' to distinguish normal containers from StateContainer.
import counterSC from '../StateContainers/counter';

// But.., What if I want to use counter state in a life-cycle method?
// See `./CounterUgly.js` for the answer.
const CounterBasic = () => (
  <Subscribe to={[counterSC]}>
    {counter => (
      <Fragment>
        <h1>{counter.state.count}</h1>
        <button onClick={counter.inc}>+</button>
        <button onClick={counter.dec}>-</button>
      </Fragment>
    )}
  </Subscribe>
);

export default CounterBasic;