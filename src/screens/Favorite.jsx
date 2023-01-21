import { Text } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoritesApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import PokemonsList from "../components/PokemonsList";
import NoLogged from "../components/NoLogged";

import useAuth from "../hooks/useAuth.jsx";

const Favorite = () => {
  const [pokemons, setPokemons] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoritesApi();

          const pokemonsArray = await Promise.all(
            response.map(async (pokemonId) => {
              const pokemonsDetails = await getPokemonDetailsApi(pokemonId);
              return {
                id: pokemonsDetails.id,
                name: pokemonsDetails.name,
                type: pokemonsDetails.types[0].type.name,
                order: pokemonsDetails.order,
                image:
                  pokemonsDetails.sprites.other["official-artwork"]
                    .front_default,
              };
            })
          );
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogged /> : <PokemonsList pokemons={pokemons} />;
};

export default Favorite;
