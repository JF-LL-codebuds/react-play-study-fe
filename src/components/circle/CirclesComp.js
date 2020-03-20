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
    colorList.forEach(color => {
      let circleList = [];
      circleList.push( 
        <Circle key={colorList.indexOf(color)} bgColor={color} />
      );
      return circleList;
    });
  }

  addCircle = () => {
    let newList = [...this.state.circleList];
    newList.push(
      <Circle key={newList.length + 1}
        bgColor={colors.randomColor()} />
    );
    this.setState({
      circleList: newList
    });
  }

  // componentDidMount() {
  //   let newColorList = this.state.colorList;
  //   this.setState({
  //     circleList: this.populate(newColorList)
  //   });
  //   console.log('newColorList', newColorList, '& CircleList', this.state.circleList);
  // }
  
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
