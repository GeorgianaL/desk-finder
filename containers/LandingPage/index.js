import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const LandingPage = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Button
      title="Find a Desk"
      onPress={() => navigation.navigate("Allocation")}
    />
    <Button
      title="My Reservations"
      type="clear"
      onPress={() => navigation.navigate("Reservations")}
    />
  </View>
);

export default LandingPage;
