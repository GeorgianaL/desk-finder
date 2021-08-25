import React from "react";
import { ScrollView, View, Dimensions } from "react-native";
import theme from "../../config/theme";

export const paddingLeftRight = 30;

const RoundedPage = ({ withMenu, children }) => (
  <ScrollView
    style={{
      flex: 1,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      marginBottom: 0,
      top: 0,
    }}
  >
    <View
      style={{
        flex: 1,
        marginTop: withMenu ? 5 : 100,
        alignItems: "flex-start",
        justifyContent: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 80,
        backgroundColor: theme.colors.white,
        paddingLeft: paddingLeftRight,
        paddingRight: paddingLeftRight,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        marginBottom: 0,
        ...theme.shadow,
      }}
    >
      {children}
    </View>
  </ScrollView>
);

export default RoundedPage;
