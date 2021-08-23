import React from "react";
import { Input, Button } from "react-native-elements";
import styled from "styled-components/native";

const Inner = styled.View`
  padding: 8px 16px;
`;

function TextEditor(props) {
  return (
    <Inner>
      <Input placeholder="Write description" onChangeText={props.onChange} />
      {props.value && <Button onClick={props.onSubmit} title="Submit" />}
    </Inner>
  );
}

export default TextEditor;
