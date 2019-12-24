import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import styles from './greeting.css';

class Greeting extends Component {

  render() {
    return (
      <div className={styles.greeting}>
        <h2>Hello Rachel & Lionel</h2>
        <p>
          please bookmark this page, this will be where we try stuff I am learning
        </p>

        <nav>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/routertest1">RouterTest1</Link>
          <Link className={styles.link} to="/routertest2">RouterTest2</Link>
          <Link className={styles.link} to="/gamelayout">JRPG Mock Up</Link>
        </nav>
      </div>
    );

  }
}

export default Greeting;
