import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import RouterTest1 from './routertest/RouterTest1';
import RouterTest2 from './routertest/RouterTest2';
import Greeting from './greeting/Greeting';
import Goals from './goals/Goals';
import PokeComp from './dynamicobj/PokeComp';
import goalStyles from './goals/goals.css';
import styles from './app.css';

import pokeData from '../services/data/pokemon';

export default function App() {
  console.log(goalStyles);
  console.log(pokeData);
  console.log(pokeData[0]);

  return (
    <main>
      <h1 className={styles.topopage}>Time for the Learny-Learn</h1>


      <Router>
        <Greeting />
        <section className={styles.goalsSection}>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/routertest1" component={RouterTest1} />
              <Route path="/routertest2" component={RouterTest2} />
            </Switch>
          </>
        </section>
      </Router>

    </main>
  );  
}

{/* <Goals sectionStyle={goalStyles.goals1} />
<Goals sectionStyle={goalStyles.goals4} />

<PokeComp pokemon={pokeData[1]} />

<Goals sectionStyle={goalStyles.goals2} />
<Goals sectionStyle={goalStyles.goals3} />

<PokeComp pokemon={pokeData[2]} />
<PokeComp pokemon={pokeData[0]} />
<PokeComp pokemon={pokeData[3]} />
<PokeComp pokemon={pokeData[4]} /> */}
