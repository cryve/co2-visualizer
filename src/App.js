import React, { Component } from 'react';
import './App.css';
import CO2BubbleContainer from './CO2BubbleContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CO2BubbleContainer />
        </header>
      </div>
    );
  }
}

export default App;
