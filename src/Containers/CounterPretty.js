import React, { Component } from 'react';
import connect from 'unstated-connect';
import counterSC from '../StateContainers/counter';
import Counter from './Counter';

// A prettier solution to `./CounterUgly.js`.
class CounterPretty extends Component {
  componentDidMount = () => {
    const [{ state: { count } }] = this.props.containers;
    console.log(`Hello from CounterPretty's life-cycle methods, current count is: ${count}`)
  }

  render = () => {
    const [{ state: {count}, inc, dec }] = this.props.containers;

    return (
      <Counter
        title={'Pretty Counter (same)'}
        count={count}
        onInc={inc}
        onDec={dec}
      />
    );
  };
}

// Redux-like connect for `unstated`.
export default connect([counterSC])(CounterPretty);
