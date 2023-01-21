import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const NoLogged = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        If you want to see this screen, you must be logged in
      </Text>
      <Button
        title="Go to LogIn"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
};

export default NoLogged;

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 16,
  },
});
