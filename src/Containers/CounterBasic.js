import React from 'react';
import { Subscribe } from 'unstated';
// I'm appending 'SC' to distinguish normal containers from StateContainer.
import counterSC from '../StateContainers/counter';
import Counter from './Counter';

// But.., What if I want to use counter state in a life-cycle method?
// See `./CounterUgly.js` for the answer.
const CounterBasic = () => (
  <Subscribe to={[counterSC]}>
    {counter => (
      <Counter
        title={'Basic Counter'}
        count={counter.state.count}
        onInc={counter.inc}
        onDec={counter.dec}
      />
    )}
  </Subscribe>
);

export default CounterBasic;