import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import TextEditor from "./TextEditor";

// const fadeInScale = keyframes`
//   from {
//     opacity: 0;
//     transform: scale(0);
//   }
//   to {
//     opacity: 1;
//     transform: scale(1);
//   }
// `;

const Container = styled.View`
  background: white;
  border-radius: 2px;
  margin-top: 16px;
  transform-origin: top left;
  overflow: hidden;
`;
// animation: ${fadeInScale} 0.31s cubic-bezier(0.175, 0.885, 0.32, 1.275);

function Editor(props) {
  const { geometry } = props.annotation;
  if (!geometry) return null;

  return (
    <Container
      className={props.className}
      style={{
        position: "absolute",
        left: `${geometry.x}%`,
        top: `${geometry.y + geometry.height}%`,
        ...props.style,
      }}
    >
      <TextEditor
        onChange={(e) =>
          props.onChange({
            ...props.annotation,
            data: {
              ...props.annotation.data,
              text: e.target.value,
            },
          })
        }
        onSubmit={props.onSubmit}
        value={props.annotation && props.annotation.occupiedBy}
      />
    </Container>
  );
}

Editor.defaultProps = {
  className: "",
  style: {},
};

export default Editor;
