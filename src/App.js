import React from 'react';
import './App.css';
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';

class App extends React.Component {
  render() {
    return [
      <Day1/>,
      <Day2/>,
      <Day3/>,
    ];
  }
}

export default App;
