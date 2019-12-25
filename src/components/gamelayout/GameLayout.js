import React, { Component } from 'react';
import MainScreen from './MainScreen';
import YourStats from './YourStats';
import styles from './gamelayout.css';

class GameLayout extends Component {
  render() {
    return (
      <div className={styles.containerStyle}>
        <MainScreen className={styles.mainScreen}/>
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
