import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { cancelReservation } from "../../actions";
import RoundedPage from "../../components/RoundedPage";
import DeskDetails from "../../components/DeskDetails";
import theme from "../../config/theme";

const styles = StyleSheet.create({
  title: {
    paddingBottom: 20,
  },
  heighlightedBox: {
    alignSelf: "center",
    paddingLeft: 60,
    paddingBottom: 20,
    backgroundColor: "#E4FFF0",
    marginBottom: 40,
    ...theme.shadow,
  },
  cornerButton: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  cornerButtonTitle: {
    color: theme.colors.secondary,
  },
  textContainer: {
    paddingRight: 60,
  },
  text: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  devider: {
    height: 1,
    backgroundColor: theme.colors.grey1,
  },
  blackButtonStyle: {
    borderColor: theme.colors.black,
    borderWidth: 2,
    marginRight: 12,
  },
  blackTitleStyle: {
    color: theme.colors.black,
  },
});

const LandingPage = ({ navigation, username, reservation, actions }) => {
  const [canceledReservation, setCanceledReservation] = useState(false);

  const cancelTodayBooking = () => {
    setCanceledReservation(true);
    actions.cancelReservation(reservation.id);
  };

  return (
    <RoundedPage>
      <View style={styles.title}>
        <Text h3>{`Hello, ${username}`}</Text>
        {reservation && <Text>Here’s what’s next on your schedule</Text>}
      </View>
      {reservation ? (
        <View style={styles.heighlightedBox}>
          <Button
            title="Cancel booking"
            buttonStyle={styles.cornerButton}
            titleStyle={styles.cornerButtonTitle}
            onPress={cancelTodayBooking}
          />
          <View style={{ paddingRight: 60 }}>
            <DeskDetails
              deskNumber={reservation.desk}
              floor={reservation.floor}
              building={reservation.building}
              startTime={reservation.startTime}
              endTime={reservation.endTime}
              date={moment(reservation.date).format("Do MMMM")}
            />
          </View>
        </View>
      ) : (
        <View style={styles.text}>
          <Text h4 style={styles.text}>
            You don't have any reservations for today
          </Text>
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          title="See calendar"
          type="clear"
          onPress={() => navigation.navigate("Calendar")}
          style={{ flex: 1 }}
          buttonStyle={styles.blackButtonStyle}
          titleStyle={styles.blackTitleStyle}
        />
        <Button
          title="New booking"
          onPress={() => navigation.navigate("Floor")}
          style={{ flex: 1 }}
        />
      </View>
    </RoundedPage>
  );
};

LandingPage.defaultProps = {
  username: "User",
  reservation: null,
};

const mapStateToProps = (state) => ({
  username: state.user.email,
  reservation: state.reservations.all.find((reservation) =>
    moment(reservation.date).isSame(new Date(), "day")
  ),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      cancelReservation,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
