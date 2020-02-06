import React, { Component } from 'react';
import { createStore } from 'redux';
import Counter from './counter/Counter';

const store = createStore(counter);


class Redux extends Component {


  render() {
    return (
      <>
      </>
    );
  }
}

store.subscribe(render);
export default Redux;
