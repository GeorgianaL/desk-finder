import React from "react";
import { View } from "react-native";
import { AnimatedSVGPath } from "react-native-svg-animations";
import AnimatedDonutChart from "../AnimatedDonutChart";
import theme from "../../config/theme";

const AnimatedCheckmark = ({ strokeColor, duration, d }) => (
  <AnimatedDonutChart percentage={100} duration={800}>
    <View style={{ position: "absolute" }}>
      <AnimatedSVGPath
        strokeColor={strokeColor}
        duration={duration}
        strokeWidth={6}
        height={500}
        width={500}
        scale={0.95}
        delay={100}
        d={d}
        loop={false}
      />
    </View>
  </AnimatedDonutChart>
);

AnimatedCheckmark.defaultProps = {
  strokeColor: theme.colors.primary,
  duration: 500,
  d: "M100.2,40.2 51.5,88.8 29.8,67.5",
};

export default AnimatedCheckmark;
