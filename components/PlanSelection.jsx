"use client";
import { useState } from "react";
import Image from "next/image";
import Switch from "./Switch";

const PlanSelection = ({ step, setStep }) => {
  const [yearly, setYearly] = useState(true);
  console.log(yearly);

  return (
    <div className="flex flex-col gap-2 w-5/6 py-5 px-2">
      <div>
        <div className="text-xl font-semibold">Select your plan</div>
        <div className="text-gray-400">
          You have the option of monthly or yearly billing
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-5 w-5/6">
        <div className="flex  justify-between gap-5">
          <div className="border-2 border-gray-200 py-3 pl-2 pr-4 flex flex-col items-start w-[250px]  rounded-md">
            <Image src="/icon-arcade.svg" width={50} height={50} />
            <span className="font-bold mt-10">Arcade</span>
            <span className="font-sm text-gray-400">$9/mo</span>
            {yearly && (
              <span className="font-sm text-gray-500">2 months free</span>
            )}
          </div>
          <div className="border-2 border-gray-200 py-3 pl-2 pr-4 flex flex-col items-start w-[250px]  rounded-md">
            <Image src="/icon-advanced.svg" width={50} height={50} />
            <span className="font-bold mt-10">Advanced</span>
            <span className="font-sm text-gray-400">$12/mo</span>
            {yearly && (
              <span className="font-xs text-gray-500">2 months free</span>
            )}
          </div>
          <div className="border-2 border-gray-200 py-3 pl-2 pr-4 flex flex-col items-start w-[250px]  rounded-md">
            <Image src="/icon-pro.svg" width={50} height={50} />
            <span className="font-bold mt-10">Pro</span>
            <span className="font-sm text-gray-400">$15/mo</span>
            {yearly && (
              <span className="font-sm text-gray-500 w-">2 months free</span>
            )}
          </div>
        </div>
        <div className="flex  justify-center gap-5 w-full bg-gray-200 rounded-md py-5">
          <span className={`${yearly ? "font-bold" : ""}`}>Yearly</span>
          <Switch setYearly={setYearly} />
          <span className={`${!yearly ? "font-bold" : ""}`}>Monthly</span>
        </div>
        <div className="flex justify-between mt-5">
          <button
            className="px-5 py-3 bg-black text-white rounded-md"
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
          >
            Back
          </button>
          <button
            className="px-5 py-3 bg-black text-white rounded-md"
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
export default PlanSelection;
