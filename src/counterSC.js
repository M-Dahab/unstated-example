import { Container } from 'unstated';

class counterSC extends Container {
  state = { count: 0 };

  inc = () => this.setState(prevState => ({ count: prevState.count + 1 }));
  dec = () => this.setState(prevState => ({ count: prevState.count - 1 }));
};

export default counterSC;
