import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dimensions, View } from "react-native";
import { Text, Overlay } from "react-native-elements";
import ImageZoom from "react-native-image-pan-zoom";
import moment from "moment";
import { newReservationRequest, clearPreviousReservation } from "../../actions";
import Annotation from "../../components/Annotation";
import BookDesk from "./components/BookDesk";
import SuccessfulBooking from "./components/SuccessfulBooking";
import theme from "../../config/theme";

import mapUBC1Et4 from "../../assets/UBC1Et4.svg";

const styles = {
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  overlayStyle: {
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    maxWidth: "80%",
  },
  blackButtonStyle: {
    borderColor: theme.colors.black,
    borderWidth: 2,
    marginRight: 12,
  },
  blackTitleStyle: {
    color: theme.colors.black,
  },
};

const Map = ({ actions, mapSrc, desks, reservation, successfullyRequest }) => {
  const [visible, setVisible] = useState(false);
  const [activePoint, setActivePoint] = useState(null);

  useEffect(() => {
    setVisible(successfullyRequest);
  }, [successfullyRequest]);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const handlePointClick = (point) => {
    setActivePoint(point);
    toggleOverlay();
  };

  const cancelDeskView = () => {
    toggleOverlay();
    handlePointClick(null);
    actions.clearPreviousReservation();
  };

  const createReservation = () => {
    const bookNumber = activePoint.id;
    // console.log(`Book desk ${bookNumber}`);
    actions.newReservationRequest(bookNumber);
  };

  console.log("map src:", mapSrc);

  return (
    <View style={styles.container}>
      {activePoint && (
        <Overlay
          isVisible={visible}
          onBackdropPress={cancelDeskView}
          overlayStyle={styles.overlayStyle}
        >
          {activePoint.type === "available" ? (
            <BookDesk
              reservation={{
                deskNumber: activePoint.id,
                ...reservation,
              }}
              onCancel={cancelDeskView}
              onConfirm={createReservation}
            />
          ) : (
            <Text>{activePoint.occupiedBy}</Text>
          )}
        </Overlay>
      )}
      {successfullyRequest && (
        <Overlay
          isVisible={visible}
          onBackdropPress={cancelDeskView}
          overlayStyle={styles.overlayStyle}
        >
          <SuccessfulBooking reservation={reservation} />
        </Overlay>
      )}
      <ImageZoom
        cropWidth={Dimensions.get("window").width}
        cropHeight={Dimensions.get("window").height}
        imageWidth={430}
        imageHeight={250}
        centerOn={{ x: 120, y: 10, scale: 3, duration: 1 }}
      >
        <Annotation
          source={mapSrc}
          imageSize={{ width: 430, height: 250 }}
          alt={`${reservation.floor}-${reservation.building}`}
          annotations={desks}
          value={{}}
          allowTouch={false}
          handlePointClick={handlePointClick}
        />
      </ImageZoom>
    </View>
  );
};

Map.defaultProps = {
  reservation: {
    floor: 1,
    building: "Building 1",
    startTime: "Now",
    endTime: "19:00 PM",
    date: "20 August",
  },
  mapSrc: "",
  desks: [],
};

const mapStateToProps = (state) => ({
  mapSrc: state.newReservation.mapSrc,
  desks: state.newReservation.desks,
  reservation: {
    floor: state.newReservation.floor,
    building: state.newReservation.building,
    date: state.newReservation.reservationIsToday
      ? moment().format("Do MMMM")
      : "",
    startTime: "Now",
    endTime: "18:00 PM",
  },
  successfullyRequest: state.newReservation.successfullyRequest,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      newReservationRequest,
      clearPreviousReservation,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
