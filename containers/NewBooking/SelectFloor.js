import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text, CheckBox } from "react-native-elements";
import Select from "../../components/Select";
import Paginator from "../../components/Paginator";
import theme from "../../config/theme";
import {
  setBuilding,
  setFloor,
  setToday,
  getFloorAvailability,
} from "../../actions";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 20,
    paddingTop: 50,
    marginBottom: 0,
    height: Dimensions.get("window").height - 70,
    alignSelf: "stretch",
    flexDirection: "column",
    position: "relative",
    ...theme.shadow,
  },
  center: {
    top: "16%",
  },
  checkboxContainer: {
    backgroundColor: theme.colors.white,
    borderWidth: 0,
  },
  checkbox: {
    color: theme.colors.black,
    fontWeight: "200",
  },
  paginatorContainer: {
    bottom: 20,
    right: 20,
    position: "absolute",
  },
});

const Floor = ({
  goNextPage,
  reservationIsToday,
  buildings,
  floors,
  building,
  floor,
  actions,
}) => {
  const buildingOptions = buildings.reduce(
    (acc, item) => [...acc, item.name],
    []
  );

  const goNextHandler = () => {
    actions.getFloorAvailability();
    goNextPage();
  };

  return (
    <View style={styles.container}>
      <Text h3>Select building and floor</Text>
      <View style={styles.center}>
        <Select
          value={building}
          options={buildingOptions}
          onValueChange={actions.setBuilding}
        />
        <Select
          value={floor}
          options={floors}
          onValueChange={actions.setFloor}
        />
        <CheckBox
          title="I want to book a desk for today"
          checked={reservationIsToday}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkbox}
          onPress={() => actions.setToday(!reservationIsToday)}
        />
      </View>
      <View style={styles.paginatorContainer}>
        <Paginator onClick={goNextHandler} />
      </View>
    </View>
  );
};

Floor.defaultProps = {
  reservationIsToday: true,
};

const mapStateToProps = (state) => ({
  buildings: state.reservations.buildings,
  floors: state.reservations.buildings.find(
    (item) => item.name === state.newReservation.building
  ).floors,
  building: state.newReservation.building,
  floor: state.newReservation.floor,
  reservationIsToday: state.newReservation.reservationIsToday,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setBuilding,
      setFloor,
      setToday,
      getFloorAvailability,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Floor);
