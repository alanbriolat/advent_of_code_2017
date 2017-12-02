import React from 'react';
import Collapsible from 'react-collapsible';

class Day1Part1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }

  onCaptchaChanged = (event) => {
    let sum = this.solveCaptcha(event.target.value);
    this.setState(() => ({
      sum: sum
    }));
    event.preventDefault();
  };

  solveCaptcha(numbers) {
    let a = parseInt(numbers[numbers.length - 1], 10);
    let b = null;
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      b = parseInt(numbers[i], 10);
      if (a === b) {
        sum += a;
      }
      a = b;
    }
    return sum;
  }

  render() {
    return (
      <Collapsible trigger={this.props.title}>
        <div><span>captcha:</span> <input onChange={this.onCaptchaChanged}/></div>
        <div><span>sum:</span> <strong>{this.state.sum}</strong></div>
      </Collapsible>
    );
  }
}

class Day1Part2 extends Day1Part1 {
  solveCaptcha(numbers) {
    let length = numbers.length;
    let allNumbers = numbers + numbers;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      let a = parseInt(allNumbers[i], 10);
      let b = parseInt(allNumbers[i + length/2], 10);
      if (a === b) {
        sum += a;
      }
    }
    return sum;
  }
}

export default class Day1 extends React.Component {
  render() {
    return (
      <Collapsible trigger="Day 1">
        <Day1Part1 title="Part 1"/>
        <Day1Part2 title="Part 2"/>
      </Collapsible>
    );
  }
}