import React, { Fragment } from 'react';
import { Subscribe } from 'unstated';
import counterSC from './counterSC';

const Counter2 = () => (
  <Subscribe to={[counterSC]}>
    {({state: { count }, inc, dec}) => (
      <Fragment>
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </Fragment>
    )}
  </Subscribe>
);

export default Counter2;
