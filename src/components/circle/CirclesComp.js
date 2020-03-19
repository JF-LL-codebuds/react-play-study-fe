import React from 'react';
import Circle from './Circle';

export default function CirclesComp() {
  let colorList = ['white', 'orange', 'green', 'blue', 'lightsalmon', ];
  let circleList = [];

  colorList.forEach(color => {
    circleList.push( 
      <Circle key={colorList.indexOf(color)} bgColor={color} />
    );
  });
  
  console.log(circleList);

  return (
    <section>
      {circleList}
      <Circle />
      <Circle bgColor={'red'} />
    </section>
  );
}