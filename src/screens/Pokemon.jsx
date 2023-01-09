import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";

export default function Pokemon({ navigation, route: { params } }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;
  return (
    <View>
      <Text>We're on a pokemon id {params.id}</Text>
      <Text>{pokemon.name}</Text>
    </View>
  );
}
