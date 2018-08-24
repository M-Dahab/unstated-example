import React, { Fragment, Component } from 'react';
import { Subscribe } from 'unstated';
import counterSC from '../StateContainers/counter';

// If you want to use the state container in any life-cycle method you have
// to hack your way around that like so (prettier solution in `./CounterPretty.js`):
class CounterUgly extends Component {
  componentDidMount = () => {
    // Your state containers are available here via `containers` property.
    // So, You can trigger some calls like `counter.fetchUser('id')`.
    // PS: I'd destructure the following code like:
    // ```
    // const [{state: {count}}] = this.props.containers;
    // console.log(`Hello from CounterUgly's life-cycle methods, current count is: ${count}`)
    // ```
    // But, Let's keep it simple for now :).
    const counter = this.props.containers[0];
    console.log(`Hello from CounterUgly's life-cycle methods, current count is: ${counter.state.count}`)
  }

  render = () => {
    const counter = this.props.containers[0];

    return (
      <Fragment>
        <h1>{counter.state.count}</h1>
        <button onClick={counter.inc}>+</button>
        <button onClick={counter.dec}>-</button>
      </Fragment>
    );
  };
}

// Here is how you make your state containers available to your component through props.
export default (props) => (
  <Subscribe to={[counterSC]}>
    {(...containers) => <CounterUgly containers={containers} {...props}/>}
  </Subscribe>
);
