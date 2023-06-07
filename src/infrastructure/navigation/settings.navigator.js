import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
};

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={createScreenOptions}>
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Profile"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};
