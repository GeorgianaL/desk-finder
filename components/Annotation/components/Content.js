import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.Text`
  background: white;
  border-radius: 2px;
  padding: 8px 16px;
  margin-top: 8px;
  margin-left: 8px;
`;

function Content(props) {
  const { geometry } = props.annotation;
  if (!geometry) return null;

  return (
    <Container
      style={{
        position: "absolute",
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
        ...props.style,
      }}
      className={props.className}
      geometry={geometry}
    >
      {props.annotation.data && props.annotation.data.text}
    </Container>
  );
}

Content.defaultProps = {
  style: {},
  className: "",
};

export default Content;
