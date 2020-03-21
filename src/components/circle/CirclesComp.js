import React, { Component } from 'react';
import Circle from './Circle';
import CircleButton from './CircleButton';
import colors from '../../services/data/colors';

// let colorList = ['white', 'orange', 'green', 'blue', 'lightsalmon'];
// let circleList = [];

export default class CirclesComp extends Component {
  state = {
    colorList: ['white', 'orange', 'green', 'blue', 'lightsalmon'],
    circleList: []
  };

  populate = (colorList) => {
    let circleList = [];
    colorList.forEach(color => {
      circleList.push( 
        <Circle key={colorList.indexOf(color)} bgColor={color} />
      );
    });
    return circleList;
  }

  addCircle = () => {
    let newList = [...this.state.circleList];
    newList.reverse();
    newList.push(
      <Circle key={newList.length + 1}
        bgColor={colors.randomColor()} />
    );
    newList.reverse();
    this.setState({
      circleList: newList
    });
  }

  componentDidMount() {
    let newColorList = this.state.colorList;
    let newCircleList = this.populate(newColorList);
    this.setState({
      circleList: [...newCircleList]
    });
  }
  
  render() {

    return (
      <section>
      
        <CircleButton addCircle={this.addCircle} />
        {this.state.circleList}
        <Circle />
        <Circle bgColor={'red'} />
      
      </section>
    );
  }
}
