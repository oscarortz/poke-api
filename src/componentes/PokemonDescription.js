/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

function PokemonDescription() {
  const [pokemon, setPokemon] = useState([]);

  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);
        // for (let i = 0; i < resp.data.results.length; i++) {
        //   axios.get(resp.data.results[i].url).then((respuesta) => {
        //     setPokemons((prevArray) => [...prevArray, respuesta.data]);
        //   });
        // }
        setPokemon(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const newPokemon = pokemons.find((item) => item.id === parseInt(id));
  // console.log(newPokemon);
  return (
    <div className="pokemon-description">
      <h1>Pokemon Description</h1>
      {pokemon.length === 0 ? (
        "cargando"
      ) : (
        /* {pokemon.map((item) => {
        const { name, sprites } = item;
        return (
          <div>
            <h1>{name}</h1>
            <img src={sprites.front_default} alt={name} />
          </div>
        );
      })} */
        <>
          <h2>Images:</h2>
          <div class="contenedor-imagenes">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            <p>front</p>
            <p>back</p>
            <p>shiny</p>
          </div>

          <h2>Movimientos</h2>
          <div class="contenedor-movimientos">
            {pokemon.moves.map((item, index) => (
              <ul key={index}>
                <li>{item.move.name}</li>
              </ul>
            ))}
          </div>
          <h2>Abilities:</h2>
          <div class="contenedor-abilities">
            {pokemon.abilities.map((item, index) => (
              <ul key={index}>
                <li>{item.ability.name}</li>
              </ul>
            ))}
          </div>
          <h2>Types:</h2>
          <div class="contenedor-types">
            {pokemon.types.map((item, index) => (
              <ul key={index}>
                <li>{item.type.name}</li>
              </ul>
            ))}
          </div>
        </>
      )}

      <div></div>
    </div>
  );
}

export default PokemonDescription;
