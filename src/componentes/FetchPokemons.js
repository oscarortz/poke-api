import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Pokemon from "./Pokemon";
import "../App.css";

export default function FetchPokemons() {
  const [pokemons, setPokemons] = useState([]);

  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`;

  //const [loading, setLoading] = useState(false)
  const data = () => {
    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data.results);
        /* resp.data.results
        .forEach((el) => {
          axios.get(el.url).then((resp) => console.log(resp.data));
          setPokemons((prevArray) => [...prevArray, resp.data]);
          console.log(pokemons);
        }) */

        for (let i = 0; i < resp.data.results.length; i++) {
          axios.get(resp.data.results[i].url).then((respuesta) => {
            //console.log(respuesta.data);
            setPokemons((prevArray) => [...prevArray, respuesta.data]);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemons.length === 0
        ? "cargando"
        : pokemons.map((pokemon, index) => (
            <Pokemon key={index} pokemon={pokemon} />
          ))}
    </div>
  );
}
