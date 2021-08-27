import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, View } from "react-native";
import { Text, CheckBox } from "react-native-elements";
import Page from "../../components/Page";
import RoundedPage from "../../components/RoundedPage";
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
  text: {},
  center: {
    top: 60,
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
  navigation,
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
    navigation.navigate("Availability");
  };

  return (
    <Page>
      <RoundedPage withMenu>
        <Text h3 style={styles.text}>
          Select building and floor
        </Text>
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
      </RoundedPage>
    </Page>
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
