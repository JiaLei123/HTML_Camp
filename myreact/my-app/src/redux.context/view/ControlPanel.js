import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';
import CounterContainer from './CounterContainer.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <CounterContainer caption="First" />
        <CounterContainer caption="Second" />
        <CounterContainer caption="Third" />
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;
