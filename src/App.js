import React, { Component } from 'react';
import { Provider } from'react-redux';

import { ChoiceContainer }  from './components/choice-container';
import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
          <ChoiceContainer></ChoiceContainer>
        </div>
      </Provider>
    );
  }
}

export default App;
