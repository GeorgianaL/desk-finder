import React, { useState } from "react";
import { ScrollView, View, Dimensions } from "react-native";
import theme from "../../config/theme";

const RoundedPage = ({ children }) => (
  <ScrollView
    style={{
      flex: 1,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    }}
  >
    <View
      style={{
        flex: 1,
        marginTop: 100,
        alignItems: "flex-start",
        justifyContent: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: theme.colors.white,
        padding: 30,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        ...theme.shadow,
      }}
    >
      {children}
    </View>
  </ScrollView>
);

export default RoundedPage;
