import React from 'react';
import Collapsible from 'react-collapsible';

class Day2Part1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
    };
  }

  onInputChanged = (event) => {
    let value = event.target.value;
    this.setState(() => ({
      sum: this.checksumData(value),
    }));
    event.preventDefault();
  };

  checksumData(data) {
    let sum = 0;
    data.split(/\r?\n/).forEach((row) => {
      sum += this.checksumRow(row);
    });
    return sum;
  }

  checksumRow(row) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    row.split(/\s+/).forEach((num) => {
      num = parseInt(num, 10);
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    });
    if (min === Number.MAX_SAFE_INTEGER || max === Number.MIN_SAFE_INTEGER) {
      return 0;
    } else {
      return max - min;
    }
  }

  render() {
    return (
      <Collapsible trigger={this.props.title}>
        <div><textarea cols="150" rows="20" onChange={this.onInputChanged}/></div>
        <div><span>checksum:</span> <strong>{this.state.sum}</strong></div>
      </Collapsible>
    );
  }
}

class Day2Part2 extends Day2Part1 {
  checksumRow(row) {
    let numbers = row.split(/\s+/).map(x => parseInt(x, 10));
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (i !== j) {
          let result = numbers[i] / numbers[j];
          if (result === Math.round(result)) {
            return result;
          }
        }
      }
    }
    return 0;
  }
}

export default class Day2 extends React.Component {
  render() {
    return (
      <Collapsible trigger="Day 2">
        <Day2Part1 title="Part 1"/>
        <Day2Part2 title="Part 2"/>
      </Collapsible>
    );
  }
}