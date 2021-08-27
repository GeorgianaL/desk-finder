import React, { useState } from "react";
import Page from "../../components/Page";
import Floor from "./SelectFloor";
import FloorAvailability from "./FloorAvailability";
import Map from "./Map";

const NewBooking = () => {
  const [step, setStep] = useState(0);

  const goNextPage = () => setStep(step + 1);

  const goBack = () => setStep(step - 1);

  return (
    <Page>
      {step === 0 && <Floor goNextPage={goNextPage} />}
      {step === 1 && (
        <FloorAvailability goNextPage={goNextPage} goBack={goBack} />
      )}
      {step === 2 && <Map />}
    </Page>
  );
};

export default NewBooking;
