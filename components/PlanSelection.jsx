const PlanSelection = () => {
  return (
    <div className="flex flex-col gap-2 w-5/6 py-5 px-2">
      <div>
        <div className="text-xl font-semibold">Select your plan</div>
        <div className="text-gray-400">
          You have the option of monthly or yearly billing
        </div>
      </div>
      <div className="flex flex-col gap-5 pt-5 bg-blue-200">
        <div className="flex  justify-between">
          <div className="border-2 border-gray-400 p-20">1</div>
          <div className="border-2 border-gray-400 p-20">1</div>
          <div className="border-2 border-gray-400 p-20">1</div>
        </div>
        <div>Monthly or yearly</div>
      <div className="flex justify-between mt-5">
        <button className="px-5 py-3 bg-black text-white rounded-md">
          Back
        </button>
        <button className="px-5 py-3 bg-black text-white rounded-md">
          Next Step
        </button>
      </div>
      </div>
    </div>
  );
};
export default PlanSelection;
