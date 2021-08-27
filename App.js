import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-elements";

import store from "./store";
import theme from "./config/theme";
import Login from "./containers/Login";
import LandingPage from "./containers/LandingPage";
import Calendar from "./containers/Calendar";
import Hours from "./containers/Hours";
import Floor from "./containers/NewBooking/SelectFloor";
import Availability from "./containers/NewBooking/FloorAvailability";
import Map from "./containers/NewBooking/Map";

const Stack = createNativeStackNavigator();

const App = () => {
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
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="Hours" component={Hours} />
            <Stack.Screen name="Floor" component={Floor} />
            <Stack.Screen name="Availability" component={Availability} />
            <Stack.Screen name="Map" component={Map} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
