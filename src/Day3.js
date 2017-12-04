import React from 'react';
import Collapsible from 'react-collapsible';

class Day3Part1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
    };
  }

  onInputChanged = (event) => {
    let value = event.target.value;

    if (!value) {
      this.setState(() => ({
        distance: 0,
      }));
      return;
    }

    let num = parseInt(value, 10);

    if (num <= 1) {
      this.setState(() => ({
        distance: 0,
      }));
      return;
    }

    // The next square number (each "radius" has 2 square numbers on it)
    let square = Math.ceil(Math.sqrt(num));
    // Which "layer" of the spiral
    let radius = Math.floor(square / 2);
    // The biggest number at this radius
    let maxAtRadius = radius * 2 + 1;
    // How long each non-overlapping side of the square is
    let side = maxAtRadius - 1;
    // The max number of the previous radius
    let base = maxAtRadius**2 - (side * 4);
    // Offset within a side of the square
    let offset = (num - base) % side;
    // Adjusted to be relative to the middle
    let relative = offset - side/2;
    // Made absolute, since we only care about distance, not direction
    let abs = Math.abs(relative);
    // Overall distance is radius + off-axis distance
    let distance = radius + abs;

    console.log({
      input: num,
      square: square,
      radius: radius,
      maxAtRadius: maxAtRadius,
      side: side,
      base: base,
      offset: offset,
      relative: relative,
      abs: abs,
      distance: distance,
    });

    this.setState(() => ({
      distance: distance,
    }));

    event.stopPropagation();
  };

  render() {
    return (
      <Collapsible trigger={this.props.title}>
        <div><span>cell number:</span> <input onChange={this.onInputChanged}/></div>
        <div><span>distance:</span> <strong>{this.state.distance}</strong></div>
      </Collapsible>
    );
  }
}

class Day3Part2 extends Day3Part1 {
}

export default class Day3 extends React.Component {
  render() {
    return (
      <Collapsible trigger="Day 3">
        <Day3Part1 title="Part 1"/>
        {/*<Day2Part2 title="Part 2"/>*/}
      </Collapsible>
    );
  }
}