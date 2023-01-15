import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { getPokemonsFavoritesApi } from "../api/favorite";

const Favorite = () => {
  const [favorites, setFavorites] = useState(null);
  (async () => {
    const response = await getPokemonsFavoritesApi();
    console.log(response);
  })();

  const getFav = async () => {
    const response = await getPokemonsFavoritesApi();
    console.log(response);
  };
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="check favorites" onPress={getFav} />
    </SafeAreaView>
  );
};

export default Favorite;
