import React, { Fragment, Component } from 'react';
import connect from 'unstated-connect';
import counterSC from '../StateContainers/counter';

// A prettier solution to `./CounterUgly.js`.
class CounterPretty extends Component {
  componentDidMount = () => {
    const [{ state: { count } }] = this.props.containers;
    console.log(`Hello from CounterPretty's life-cycle methods, current count is: ${count}`)
  }

  render = () => {
    const [{ state: {count}, inc, dec }] = this.props.containers;

    return (
      <Fragment>
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </Fragment>
    );
  };
}

// Redux-like connect for `unstated`.
export default connect([counterSC])(CounterPretty);
