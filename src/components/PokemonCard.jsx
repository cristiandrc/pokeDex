import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard({ poke }) {
  const pokemonColor = getColorByPokemonType(poke.type);
  const navigation = useNavigation();

  const bgStyle = {
    backgroundColor: pokemonColor,
    ...styles.bgStyle,
  };
  const gotoPokemon = () => {
    navigation.navigate("Pokemon", { id: poke.id });
  };
  return (
    <Pressable onPress={gotoPokemon} style={{ flex: 1 }}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text style={styles.number}>#{`${poke.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{poke.name}</Text>
            <Image source={{ uri: poke.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
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
    textTransform: "capitalize",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 0,
    width: 90,
    height: 90,
  },
});
