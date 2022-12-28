import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import PokeDex from "../screens/PokeDex";
import Favorite from "../screens/Favorite";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PokeDex" component={PokeDex} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
