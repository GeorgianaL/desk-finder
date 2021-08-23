import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  border: 2px solid white;
  border-radius: 10px;
  height: 10px;
  position: absolute;
  width: 10px;
`;

const TYPES = {
  AVAILABLE: "available",
  UNAVAILABLE: "unavailable",
  PENDING: "pending",
};

const getPointColor = (type) => {
  switch (type) {
    case TYPES.AVAILABLE:
      return "#78FFB6";
    case TYPES.UNAVAILABLE:
      return "#FF073A";
    default:
      return "#FFF200";
  }
};

function Point({ annotation, handlePointClick }) {
  const { geometry, type } = annotation;
  if (!geometry) return null;

  return (
    <Container
      style={{
        top: `${geometry.y - 3}%`,
        left: `${geometry.x - 1}%`,
        backgroundColor: getPointColor(type),
      }}
      onTouchStart={() => {
        handlePointClick(annotation);
      }}
    />
  );
}

export default Point;
