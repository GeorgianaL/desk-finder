import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import Floor from "./SelectFloor";
import FloorAvailability from "./FloorAvailability";
import Map from "./Map";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.grey2,
    paddingTop: 50,
    marginBottom: 0,
    flex: 1,
  },
  menubar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    alignSelf: "flex-start",
  },
});

const NewBooking = () => {
  const [step, setStep] = useState(0);

  const goNextPage = () => setStep(step + 1);

  const goBack = () => setStep(step - 1);

  return (
    <View style={styles.container}>
      <View style={styles.menubar}>
        <Icon name="menu" type="SimpleLineIcons" color="#000" size={30} />
      </View>
      {step === 0 && <Floor goNextPage={goNextPage} />}
      {step === 1 && (
        <FloorAvailability goNextPage={goNextPage} goBack={goBack} />
      )}
      {step === 2 && <Map />}
    </View>
  );
};

export default NewBooking;
