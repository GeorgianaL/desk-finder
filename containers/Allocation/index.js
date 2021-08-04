import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Annotation from "../../components/Annotation/Annotation";
import OfficeMapImage from "../../assets/sketch.png";

const Allocation = () => {
  const [annotations, addAnnotations] = useState([]);
  const [annotation, setAnnotation] = useState({});

  onChange = (annotation) => {
    setAnnotation({ annotation });
  };

  onSubmit = (annotation) => {
    const { geometry, data } = annotation;

    addAnnotations({
      annotation: {},
      annotations: annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random(),
        },
      }),
    });
  };

  console.log(annotations);

  return (
    <View
      style={{ flex: 1, alignItems: "flex-start", justifyContent: "center" }}
    >
      <Text>Allocation</Text>
      <Annotation
        src="https://live.staticflickr.com/3312/3642071233_d42b05714d_b.jpg"
        alt="Two pebbles anthropomorphized holding hands"
        annotations={annotations}
        value={annotation}
        onChange={onChange}
        onSubmit={onSubmit}
        allowTouch
      />
    </View>
  );
};

export default Allocation;
