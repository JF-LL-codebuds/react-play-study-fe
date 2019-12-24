import React, { Component } from 'react';
import YourStats from './YourStats';
import styles from './gamelayout.css';

class GameLayout extends Component {
  render() {
    return (
      <div className={styles.containerStyle}>
        <p className={styles.actionWindow}>STUFF</p>
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
