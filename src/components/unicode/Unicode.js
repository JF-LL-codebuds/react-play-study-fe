import React from 'react';
import PropTypes from 'prop-types';

function Unicode({ sectionStyle }) {

  return (
    <section className={sectionStyle}>
      <h2>Cool Unicode Symbols</h2>
      <ul>
        <li>˪˥</li>
        <li>ʡ</li>
        <li>Ӝ - this means you're about to 'get' somebody</li>
        <li>ԳԴԵ</li>
        <li>ஆ - ñ ñ ñ ñ</li>
      </ul>
    </section>
  );
}

Unicode.propTypes = {
  sectionStyle: PropTypes.string
};


export default Unicode;
