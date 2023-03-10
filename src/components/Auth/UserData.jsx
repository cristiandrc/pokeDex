import { View, Text, StyleSheet, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import useAuth from "../../hooks/useAuth";
import { getPokemonsFavoritesApi } from "../../api/favorite";

const ItemMenu = ({ title, text }) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

const UserData = () => {
  const { auth, logout } = useAuth();
  const [favorites, setFavorites] = useState([]);
  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoritesApi();
          setFavorites(response);
        } catch (error) {
          console.error(error);
        }
      })();
    }, [])
  );
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.title}>
          {auth.firstName} {auth.lastName}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu
          title={`Nombre`}
          text={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu title={`UserName`} text={auth.lastName} />
        <ItemMenu title={`Email`} text={auth.email} />
        <ItemMenu
          title={`Total Favorites`}
          text={`${favorites.length} Pokemons`}
        />
      </View>
      <Button title="LogOut" onPress={logout} />
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cfcfcf",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
});
