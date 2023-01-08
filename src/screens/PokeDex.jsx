import React, { useEffect, useState } from "react";
import { Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonsApi, getPokemonsDetailsByUrlsApi } from "../api/pokemon";

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);
  console.log("Pokemons----------->", pokemons);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const { results } = await getPokemonsApi();

      const pokemonsArray = [];

      await results.forEach(async (pokemon) => {
        const pokemonsDetails = await getPokemonsDetailsByUrlsApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonsDetails.id,
          name: pokemonsDetails.name,
          type: pokemonsDetails.types[0].type.name,
          order: pokemonsDetails.order,
          image:
            pokemonsDetails.sprites.other["official-artwork"].front_default,
        });
      });

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>PokeDex</Text>
        {true &&
          pokemons?.map((e) => (
            <>
              <Text key={e.id}>{e.name}</Text>
              <Image
                source={{ uri: e.image }}
                style={{ width: 140, height: 140 }}
              />
            </>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PokeDex;
