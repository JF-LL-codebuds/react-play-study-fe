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
import GameLayout from './gamelayout/GameLayout';
import goalStyles from './goals/goals.css';
import styles from './app.css';
import CirclesComp from './circle/circlesComp';

export default function App() {
  /* eslint-disable-next-line no-console */
  console.log('good location 4 console.log', goalStyles);

  return (
    <main>
      <h1 className={styles.topopage}><a href="/">Time for the Learny-Learn</a></h1>


      <Router>
        <Greeting />
        <section className={styles.goalsSection}>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/circles" component={CirclesComp} />
              <Route path="/routertest1" component={RouterTest1} />
              <Route path="/routertest2" component={RouterTest2} />
              <Route path="/gamelayout" component={GameLayout} />
            </Switch>
          </>
        </section>
      </Router>

    </main>
  );  
}
