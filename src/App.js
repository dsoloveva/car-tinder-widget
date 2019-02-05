import React, { Component } from 'react';
import { Provider } from'react-redux';

import MainContainer from './components/main-container/main-container';
import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
          <MainContainer></MainContainer>
        </div>
      </Provider>
    );
  }
}

export default App;
