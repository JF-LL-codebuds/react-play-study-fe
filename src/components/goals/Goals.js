import React from 'react';
import PropTypes from 'prop-types';

function Goals({ sectionStyle }) {

  return (
    <section className={sectionStyle}>
      <h2>Goals for Here</h2>
      <ul>
        <li>have user sign in</li>
        <li>use react router</li>
        <li>drop down to select comps in 1 place</li>
        <li>other stuff as thunkened</li>
        <li>PRACTICE MOBILE!!!</li>
        <li>Modular Object Display Comp</li>
      </ul>
    </section>
  );
}

Goals.propTypes = {
  sectionStyle: PropTypes.string
};


export default Goals;
