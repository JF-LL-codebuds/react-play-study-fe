import React, { Component } from 'react';
import styles from './greeting.css';

class Greeting extends Component {

  render() {
    return (
      <div className={styles.greeting}>
        <h2>Hello Lionel</h2>
        <p>
          please bookmark this page, this will be where we try stuff I am learning
        </p>
      </div>
    );

  }
}

export default Greeting;
