import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CircleButton extends Component {
  static propTypes = {
    addCircle: PropTypes.func.isRequired,
  }
  // clickAddCircle = () => {

  // }

  render() {
    return (
      <button type="AddCircle" onClick={this.props.addCircle}>
        Add a Circle
      </button>
    );
  }
}

export default CircleButton;
