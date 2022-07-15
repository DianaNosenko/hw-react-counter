import React, { Component } from 'react';
import styles from '../Counter/Counter.css'


export default class Counter extends Component {
    constructor(props){
        super(props);
        this.default = {
            step: 1,
            value: 0,
        }
    }
    countPlus = () => {
      this.default.value = this.default.value + this.default.step;
      console.log(this.default.value);
    }
    countMines = () => {
      this.default.value = this.default.value - this.default.step;
      console.log(this.default.value);
    }
  render() {
    return (
      <div className='wrapper'>
        <button onClick={this.countPlus}>+</button>
        <span id='counter'>{this.default.value}</span>
        <button onClick={this.countMines}>-</button>
      </div>
    )
  }
}
