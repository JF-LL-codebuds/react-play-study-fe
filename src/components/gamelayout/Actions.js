import React from 'react';
import styles from './gamelayout.css';


function Actions() {
  return (
    <section className={styles.userActions}>
      <ul>
        <li>Fight</li>
        <li>Heal</li>
        <li>Special</li>
      </ul>
    </section>
  );
}

export default Actions;
