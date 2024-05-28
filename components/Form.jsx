"use client";
import { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PlanSelection from "./PlanSelection";
import Steps from "./Steps";
import PickAddons from "./PickAddons";

const Form = () => {
  const [step, setStep] = useState(0);
  const DisplayStep = () =>
    step === 0 ? (
      <PersonalInfo step={step} setStep={setStep} />
    ) : step === 1 ? (
      <PlanSelection step={step} setStep={setStep} />
    ) : (
      <PickAddons step={step} setStep={setStep} />
    );

  return (
    <div className="bg-white p-12 flex gap-2 w-5/6 m-auto">
      {/* Steps */}
      <Steps setStep={step} />
      {DisplayStep()}
    </div>
  );
};
export default Form;
