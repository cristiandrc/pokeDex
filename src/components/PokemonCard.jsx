import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import React from "react";

export default function PokemonCard({ poke }) {
  const gotoPokemon = () => {
    console.log(`vamos al pokemon ${poke.name}`);
  };
  return (
    <Pressable onPress={gotoPokemon} style={{ flex: 1 }}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={style.bgStyles}>
            <Text style={style.number}>#{`${poke.order}`.padStart(3, 0)}</Text>
            <Text style={style.name}>{poke.name}</Text>
            <Image source={{ uri: poke.image }} style={style.image} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "#b9b9b9",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#FFF",
    fontSize: 11,
  },
  name: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 0,
    width: 90,
    height: 90,
  },
});
