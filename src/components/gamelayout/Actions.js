import React, { Component } from 'react';
import styles from './gamelayout.css';
import PropTypes from 'prop-types';


class Actions extends Component {
  static propTypes = {
    playerTriesToHit: PropTypes.func.isRequired,
  };

  playerClicksFight = () => {
    this.props.playerTriesToHit();
  }
  
  render() {
    return (
      <section className={styles.userActions}>
        <ul>
          <li>Fight</li>
          <li>Heal</li>
          <li>Special</li>
          <button type="Fight" onClick={this.playerClicksFight}>Fight</button>
        </ul>
      </section>
    );
  }
}

export default Actions;
