import React from 'react';
import Goals from '../goals/Goals';
import PokeComp from '../dynamicobj/PokeComp';
import goalStyles from '../goals/goals.css';
import pokeData from '../../services/data/pokemon';
import Unicode from '../../components/unicode/Unicode';

export default function Home() {
  return (
    <>
      <Unicode sectionStyle={goalStyles.goals3} />
      <Goals sectionStyle={goalStyles.goals1} />
      <Goals sectionStyle={goalStyles.goals4} />

      <PokeComp pokemon={pokeData[1]} />

      <Goals sectionStyle={goalStyles.goals2} />
      <Goals sectionStyle={goalStyles.goals3} />

      <PokeComp pokemon={pokeData[2]} />
      <PokeComp pokemon={pokeData[0]} />
      <PokeComp pokemon={pokeData[3]} />
      <PokeComp pokemon={pokeData[4]} />
    </>

  );

}
