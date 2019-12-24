import React, { Component } from 'react';
import YourStats from './YourStats';

class GameLayout extends Component {
  render() {
    return (
      <div>
        <p>STUFF</p>
        <div>
          <p>ACTIONS</p>
        </div>
        <div>
          <YourStats />
        </div>
      </div>
    );
  }
}

export default GameLayout;
