import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey2,
    paddingTop: 50,
    marginBottom: 0,
    flex: 1,
  },
  menubar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignSelf: "flex-start",
  },
});

const Page = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.menubar}>
      <Icon name="menu" type="SimpleLineIcons" color="#000" size={30} />
    </View>
    {children}
  </View>
);

export default Page;
