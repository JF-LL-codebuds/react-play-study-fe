import React, { Component } from 'react';
import Actions from './Actions';
import MainScreen from './MainScreen';
import YourStats from './YourStats';
import EnemyComp from './EnemyComp';
import CombatEngine from '../../services/jrpgengine/jrpgEngine';
import enemies from '../../services/gamedata/enemies';
import players from '../../services/gamedata/players';
import styles from './gamelayout.css';

class GameLayout extends Component {
  state = {
    currentEnemy: 'none',
    player: players[0],
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

  //player actions linked from engine here
  playerTriesToHit = () => {
    let tempReturnVal = CombatEngine.player.fight(this.state.currentEnemy.armorClass,
      this.state.player.hitBonus);
    console.log(tempReturnVal);
  }




  componentDidMount() {
    /* eslint-disable-next-line no-console */
    console.log('hi, in line 25 gamelayout');
    this.loadEnemy();
  }


  render() {
    return (
      <div className={styles.containerStyle}>
        <MainScreen className={styles.mainScreen}/>
        <div>
          <Actions playerTriesToHit={this.playerTriesToHit}/>
          <YourStats />
          <EnemyComp enemy={this.state.currentEnemy}/>
        </div>
      </div>
    );
  }
}

export default GameLayout;
