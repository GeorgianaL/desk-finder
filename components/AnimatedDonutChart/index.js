import React from "react";
import { StyleSheet, View, Animated, TextInput } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import theme from "../../config/theme";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedText = Animated.createAnimatedComponent(TextInput);

const AnimatedDonutChart = ({
  percentage,
  max = 100,
  radius = 60,
  strokeWidth = 4,
  duration = 500,
  color = theme.colors.primary,
  delay = 0,
  textColor = theme.colors.black,
  children,
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const textRef = React.useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  const animation = (toValue) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animation(percentage);

    animatedValue.addListener((v) => {
      if (circleRef.current) {
        const maxPerc = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (textRef.current) {
        textRef.current.setNativeProps({
          text: `${Math.round(v.value)}%`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View
      width={radius * 2}
      height={radius * 2}
      style={{ alignSelf: "center", position: "relative" }}
    >
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      {children || (
        <AnimatedText
          underlineColorAndroid="transparent"
          editable={false}
          ref={textRef}
          defaultValue="0"
          style={[
            StyleSheet.absoluteFillObject,
            { fontSize: radius / 2, color: textColor || color },
            { fontWeight: "900", textAlign: "center" },
          ]}
        />
      )}
    </View>
  );
};

export default AnimatedDonutChart;
