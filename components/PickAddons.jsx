"use client";
import { useState } from "react";

const PickAddons = ({ step, setStep }) => {
  const [checkedState, setCheckedState] = useState([false, false, false]);

  const handleCheckboxChange = (index) => {
    const newState = [...checkedState];
    newState[index] = !newState[index];
    setCheckedState(newState);
  };

  return (
    <div className="flex flex-col gap-2 w-2/3 py-5 px-10">
      <div>
        <div className="text-xl font-semibold">Pick add-ons</div>
        <div className="text-gray-400">
          Add-ons help enhance your gaming experience
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-5">
        {checkedState.map((isChecked, index) => (
          <div
            key={index}
            className={`flex justify-between border-2 border-gray-500 rounded-md items-center p-2 ${
              isChecked ? "bg-gray-200" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            <div className="flex flex-col gap-1 text-start mr-28">
              <span className="font-bold">
                {index === 0
                  ? "Online Service"
                  : index === 1
                  ? "Larger Storage"
                  : "Customizable Profile"}
              </span>
              <span className="font-xs text-gray-500">
              {index === 0
                  ? "Access to multiplayer games"
                  : index === 1
                  ? "Extra 1TB of cloud storage"
                  : "Custom  theme on your profile"}
                
              </span>
            </div>
            <span className="text-blue-500 text-sm">{index === 0
                  ? "+$1/mo"
                  : index === 1
                  ? "+$2/mo"
                  : "+$2/mo"}</span>
          </div>
        ))}
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
        <button className="px-5 py-3 bg-black text-white rounded-md">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PickAddons;
