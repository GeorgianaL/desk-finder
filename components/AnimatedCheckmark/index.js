import React from "react";
import { View } from "react-native";
import { AnimatedSVGPath } from "react-native-svg-animations";
import AnimatedDonutChart from "../AnimatedDonutChart";
import theme from "../../config/theme";

const AnimatedCheckmark = () => (
  <AnimatedDonutChart percentage={100} duration={800}>
    <View style={{ position: "absolute" }}>
      <AnimatedSVGPath
        strokeColor={theme.colors.primary}
        duration={500}
        strokeWidth={6}
        height={500}
        width={500}
        scale={0.95}
        delay={100}
        d={"M100.2,40.2 51.5,88.8 29.8,67.5"}
        loop={false}
      />
    </View>
  </AnimatedDonutChart>
);

export default AnimatedCheckmark;
