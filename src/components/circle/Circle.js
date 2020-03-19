import React from 'react';
import PropTypes from 'prop-types';

export default function Circle({ bgColor = 'white' }) {

  let circleStyle = {
    padding: 10,
    marding: 20,
    display: 'inline-block',
    backgroundColor: bgColor,
    borderRadius: '50%',
    width: 100,
    height: 100,
  };

  return (
    <div style={circleStyle}></div>
  );
}

Circle.propTypes = {
  bgColor: PropTypes.string,
};
