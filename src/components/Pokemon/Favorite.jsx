import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Favorite = ({ id }) => {
  const addFavorite = () => {
    console.log("Added to favorites", id);
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
