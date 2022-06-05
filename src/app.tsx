import './store';
import { Component } from 'react';
import { FocaProvider } from 'foca';
import './app.less'
import './assets/css/custom-theme.scss'

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <FocaProvider>{this.props.children}</FocaProvider>;
  }
}

export default App;
