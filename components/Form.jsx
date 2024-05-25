import PersonalInfo from "./PersonalInfo";
import Steps from "./Steps";

const Form = () => {
  return (
    <div className="bg-white p-20 flex gap-2 w-5/6 m-auto">
      {/* Steps */}
      <Steps />
      {/* Input Fields */}
      <PersonalInfo />
    </div>
  );
};
export default Form;
