import React from 'react';
import Greeting from './greeting/Greeting';
import Goals from './goals/Goals';
import goalStyles from './goals/goals.css';
import styles from './app.css';

export default function App() {
  console.log(goalStyles);
  console.log(goalStyles.goals);
  console.log(goalStyles.goals3);

  return (
    <main>
      <h1>Time for the Learny-Learn</h1>
      <Greeting />
      <section className={styles.goalsSection}>
        <Goals sectionStyle={goalStyles.goals1} />
        <Goals sectionStyle={goalStyles.goals2} />
        <Goals sectionStyle={goalStyles.goals3} />
        <Goals sectionStyle={goalStyles.goals4} />
      </section>
    </main>
  );  
}
