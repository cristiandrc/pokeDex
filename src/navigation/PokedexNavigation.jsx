import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokeDex from "../screens/PokeDex";
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokeDexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokeDex"
        component={PokeDex}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
