import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi } from "../api/pokemon";

const PokeDex = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const { results } = await getPokemonsApi();
      setPokemons(results);
      console.log(pokemons);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>PokeDex</Text>
      {pokemons?.map((e) => (
        <Text>{e.name}</Text>
      ))}
    </SafeAreaView>
  );
};

export default PokeDex;
