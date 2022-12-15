import React from "react";
import { Link } from "react-router-dom";
import PokemonDescription from "./PokemonDescription";

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <Link to={`/description/${pokemon.name}`}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </Link>

      <h1>{pokemon.name}</h1>
    </div>
  );
}
