import {
  PersonalInformation,
  AddressInformation,
  AccountInformation,
} from "./containers";
import React, { useState } from "react";
import { Card } from "./components";
import "./App.css";

const App = () => {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    if (step === 3) {
      handleFormSubmit();
    } else setStep((prevState) => prevState + 1);
  };

  const handleFormSubmit = () => {
    console.log();
  };
  // const [page, setPage] = useState<number>(1);

  // const increase = () => {
  //   setPage((page) => (page < 3 ? page + 1 : 3));
  // };
  const decrease = () => {
    setStep((step) => (step > 1 ? step - 1 : 1));
  };
  // console.log(page);

  return (
    <div>
      <Card>
        {step === 1 && (
          <div>
            <PersonalInformation onNext={handleNext} />
          </div>
        )}
        {step === 2 && (
          <div>
            <AddressInformation handleBack={decrease} onNext={handleNext} />
          </div>
        )}
        {step === 3 && (
          <div>
            <AccountInformation handleBack={decrease} onNext={handleNext} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default App;
