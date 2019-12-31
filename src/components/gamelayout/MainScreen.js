import React from 'react';
import PropTypes from 'prop-types';
import styles from './gamelayout.css';

function MainScreen({ currentCombatMsg }) {
  return (
    <section className={styles.mainScreen}>
      <p>{currentCombatMsg}</p>
    </section>
  );
}

MainScreen.propTypes = {
  currentCombatMsg: PropTypes.string,
};

export default MainScreen;
