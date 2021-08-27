import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import DeskDetails from "../../../components/DeskDetails";
import theme from "../../../config/theme";

const styles = StyleSheet.create({
  blackButtonStyle: {
    borderColor: theme.colors.black,
    borderWidth: 2,
    marginRight: 12,
  },
  blackTitleStyle: {
    color: theme.colors.black,
  },
  message: {
    marginBottom: 20,
  },
});

const BookDesk = ({ reservation, onCancel, onConfirm }) => {
  return (
    <View>
      <Text h4 style={styles.message}>
        Create reservation?
      </Text>
      <DeskDetails
        deskNumber={reservation.deskNumber}
        floor={reservation.floor}
        building={reservation.building}
        startTime={reservation.startTime}
        endTime={reservation.endTime}
        date={reservation.date}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Button
          title="Cancel"
          type="clear"
          onPress={onCancel}
          style={{ flex: 1 }}
          buttonStyle={styles.blackButtonStyle}
          titleStyle={styles.blackTitleStyle}
        />
        <Button title="Confirm" onPress={onConfirm} style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default BookDesk;
