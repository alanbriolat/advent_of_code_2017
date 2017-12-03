import React from 'react';
import './App.css';
import Day1 from './Day1';
import Day2 from './Day2';

class App extends React.Component {
  render() {
    return [
      <Day1/>,
      <Day2/>,
    ];
  }
}

export default App;
