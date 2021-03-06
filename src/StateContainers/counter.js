import { Container } from 'unstated';

// This is the state container that holds the state and any logic related to it.
class counterSC extends Container {
  state = { count: 0 };

  inc = () => this.setState(prevState => ({ count: prevState.count + 1 }));
  dec = () => this.setState(prevState => ({ count: prevState.count - 1 }));
};

export default counterSC;
