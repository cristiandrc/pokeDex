import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonsDetailsByUrlsApi } from "../api/pokemon";
import PokemonsList from "../components/PokemonsList";

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const { results } = await getPokemonsApi();

      const pokemonsArray = await Promise.all(
        results.map(async (pokemon) => {
          const pokemonsDetails = await getPokemonsDetailsByUrlsApi(
            pokemon.url
          );
          return {
            id: pokemonsDetails.id,
            name: pokemonsDetails.name,
            type: pokemonsDetails.types[0].type.name,
            order: pokemonsDetails.order,
            image:
              pokemonsDetails.sprites.other["official-artwork"].front_default,
          };
        })
      );

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonsList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export default PokeDex;
