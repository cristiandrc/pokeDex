import { StyleSheet, FlatList } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonsList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard poke={item} />}
      contentContainerStyle={styles.FlatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  FlatListContainer: {
    paddingHorizontal: 5,
  },
});
