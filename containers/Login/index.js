import React, { useState } from "react";
import { View } from "react-native";
import { Icon, Button, Text } from "react-native-elements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RoundedPage from "../../components/RoundedPage";
import Input from "../../components/Input";
import theme from "../../config/theme";

import { login } from "../../actions";

const Login = ({ navigation, actions }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    actions.login({ email, password });
    navigation.navigate("LandingPage");
  };

  return (
    <RoundedPage>
      <Text h3 style={{ paddingBottom: 80 }}>
        Log In
      </Text>

      <View style={{ width: "100%", paddingBottom: 80 }}>
        <Input
          placeholder="e-mail"
          value={email}
          leftIcon={
            <Icon name="email" type="fontisto" size={24} color="black" />
          }
          onChange={setEmail}
          textContentType="emailAddress"
          autoCompleteType="email"
        />
        <Input
          placeholder="password"
          value={password}
          leftIcon={<Icon name="lock" type="feather" size={24} color="black" />}
          onChange={setPassword}
          textContentType="password"
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>

      <View style={{ alignSelf: "center" }}>
        <Button
          style={{
            backgroundColor:
              email !== "" && password !== ""
                ? theme.colors.primary
                : theme.colors.grey1,
          }}
          title="Log In"
          onPress={loginUser}
        />
      </View>
    </RoundedPage>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      login,
    },
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(Login);
