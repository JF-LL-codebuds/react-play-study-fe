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
    currentEnemy: { data: 'none' },
    player: players[0],
    battlesFought: 0,
  };

  loadEnemy = () => {
    if(this.state.currentEnemy.data === 'none') {
      let randomEnemy = Math.floor(Math.random() * 3);
      /* eslint-disable-next-line no-console */
      console.log(randomEnemy);
      return this.setState({ currentEnemy: enemies[randomEnemy],
        currentCombatMsg: `A ${enemies[randomEnemy].name} begins to attack you!` });
    }
  }

  //player actions linked from engine here
  playerTriesToHit = () => {
    let tempReturnObj = CombatEngine.player.fight(this.state.currentEnemy.armorClass,
      this.state.player.hitBonus);
    console.log(tempReturnObj);
    let newState = { ...this.state };
    newState.currentEnemy.hitPoints -= tempReturnObj.damage;
    if(newState.currentEnemy.hitPoints < 0) newState.currentEnemy.hitPoints = 0;
    newState.currentCombatMsg = tempReturnObj.combatMsg;
    return this.setState({ ...newState });
  }

  componentDidMount() {
    this.loadEnemy();
  }


  render() {
    return (
      <div className={styles.containerStyle}>
        <MainScreen className={styles.mainScreen} 
          currentCombatMsg={this.state.currentCombatMsg}/>
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
