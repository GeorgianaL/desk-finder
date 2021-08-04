import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ThemeProvider } from "react-native-elements";

import theme from "./config/theme";
import LandingPage from "./containers/LandingPage";
import Allocation from "./containers/Allocation";
import Reservations from "./containers/Reservations";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Allocation" component={Allocation} />
          <Stack.Screen name="Reservations" component={Reservations} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
