import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-elements";

import store from "./store";
import theme from "./config/theme";
import Login from "./containers/Login";
import LandingPage from "./containers/LandingPage";
import NewBooking from "./containers/NewBooking";
import Reservations from "./containers/Reservations";
import Calendar from "./containers/Calendar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="NewBooking" component={NewBooking} />
            <Stack.Screen name="Reservations" component={Reservations} />
            <Stack.Screen name="Calendar" component={Calendar} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
