const CombatEngine = {
  player: {
    fight: function(enemyAC, playerToHit) {
      console.log('enemy AC', enemyAC);
      console.log('player hit bonus', playerToHit);
      return CombatEngine.dieRolls.d20() + 'here we go';
    },

  },
  dieRolls: {
    d20: function() {
      return Math.floor((Math.random()) * 20 + 1);
    },
    d8: function() {
      return Math.floor((Math.random()) * 8 + 1);
    } 
  }
};

export default CombatEngine;
