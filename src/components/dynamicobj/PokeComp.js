import React from 'react';
import styles from './pokecomp.css';
import PropTypes from 'prop-types';

function PokeComp({ pokemon }) {

  return (
    <section className={styles.pokecomp}>
      <h2>{pokemon.name === '' ? pokemon.pokemon : pokemon.name}</h2>
      <p>Kind: {pokemon.pokemon}</p>
      <p>Type: {pokemon.type.toString()}</p>
      {pokemon.image === 'none' ? <p>no image</p> : <img src={pokemon.image}></img>}
    </section>
  );
}

PokeComp.propTypes = {
  pokemon: PropTypes.object
};

export default PokeComp;

