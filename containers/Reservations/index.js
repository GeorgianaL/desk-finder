import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabView } from "react-native-elements";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

const Reservations = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Reservations page</Text>
  </View>
);

export default Reservations;
