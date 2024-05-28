const PersonalInfo = ({ step, setStep }) => {
  return (
    <div className="flex flex-col gap-2 w-2/3 py-5 px-10">
      <div>
        <div className="text-xl font-semibold">Personal Info</div>
        <div className="text-gray-400">Please Provide Your Personal Info</div>
      </div>
      <div className="flex flex-col gap-10 pt-5">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 text-xl text-gray-400 rounded-md"
          placeholder="Heloo World"
        />
        <input
          type="text"
          className="border-2 border-gray-300 p-2 text-xl text-gray-400 rounded-md"
          placeholder="Heloo World"
        />
        <input
          type="text"
          className="border-2 border-gray-300 p-2 text-xl text-gray-400 rounded-md"
          placeholder="Heloo World"
        />
      </div>
      <div className="flex justify-end mt-5">
        <button
          className="px-5 py-3 bg-black text-white rounded-md"
          onClick={() => setStep((prev) => prev + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default PersonalInfo;
