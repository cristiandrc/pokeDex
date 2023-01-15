import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavorite } from "../../api/favorite";

const Favorite = ({ id }) => {
  const addFavorite = async () => {
    await addPokemonFavorite(id);
  };

  return (
    <Icon
      style={{ marginRight: 20 }}
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
    />
  );
};

export default Favorite;
