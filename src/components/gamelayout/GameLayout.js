import React, { Component } from 'react';
import Actions from './Actions';
import MainScreen from './MainScreen';
import YourStats from './YourStats';
import enemies from '../../services/gamedata/enemies';
import styles from './gamelayout.css';

class GameLayout extends Component {
  state = {
    currentEnemy: 'none',
    player: {},
    battlesFought: 0,
  };

  loadEnemy = () => {
    if(this.state.currentEnemy === 'none') {
      let randomEnemy = Math.floor(Math.random() * 3);
      /* eslint-disable-next-line no-console */
      console.log(randomEnemy);
      return this.setState({ currentEnemy: enemies[randomEnemy] });
    }
  }

  componentDidMount() {
    console.log('hi, in line 25 gamelayout');
    this.loadEnemy();
  }


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
