import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

const Favorite = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(undefined);

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id]);

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      setIsFavorite(true);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      setIsFavorite(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Icon
      style={{ marginRight: 20 }}
      name="heart"
      color={`${"#fff"}`}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
    />
  );
};

export default Favorite;
