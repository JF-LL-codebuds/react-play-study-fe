import React, { Component } from 'react';
import Actions from './Actions';
import MainScreen from './MainScreen';
import YourStats from './YourStats';
import styles from './gamelayout.css';

class GameLayout extends Component {
  render() {
    return (
      <div className={styles.containerStyle}>
        <MainScreen className={styles.mainScreen}/>
        <div>
          <Actions />
          <YourStats />
        </div>
      </div>
    );
  }
}

export default GameLayout;
