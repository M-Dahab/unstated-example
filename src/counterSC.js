import { Container } from 'unstated';

export default class extends Container {
  state = { count: 0 };

  inc = () => this.setState(prevState => ({ count: prevState.count + 1 }));
  dec = () => this.setState(prevState => ({ count: prevState.count - 1 }));
};
