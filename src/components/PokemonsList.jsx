import { StyleSheet, Text, Image, FlatList } from "react-native";
import React from "react";

export default function PokemonsList({ pokemons }) {
  console.log(pokemons);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => (
        <>
          <Text>{item.name}</Text>
          <Image
            source={{ uri: item.image }}
            style={{ width: 140, height: 140 }}
          />
        </>
      )}
      contentContainerStyle={styles.FlatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  FlatListContainer: {
    paddingHorizontal: 5,
  },
});
