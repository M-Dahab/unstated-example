import React from 'react';

const Counter = ({title, count, onInc, onDec, ...props}) => (
  <div {...props} style={{ textAlign: 'center' }}>
    <h1>{title}</h1>
    <h2>{count}</h2>
    <button onClick={onInc}>+</button>
    <button onClick={onDec}>-</button>
  </div>
);


export default Counter;