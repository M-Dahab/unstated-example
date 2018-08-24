import React, { Fragment } from 'react';
import connect from 'unstated-connect';
import counterSC from './counterSC';

const Counter = ({
  containers: [
    {state: {count}, inc, dec},
  ],
}) => (
  <Fragment>
    <h1>{count}</h1>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
  </Fragment>
);

export default connect([counterSC])(Counter);
