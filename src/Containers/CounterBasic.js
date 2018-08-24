import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import counterSC from '../StateContainers/counterSC';

// But.., How to use counter state or any of its methods in a life-cycle method?
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