import PersonalInfo from "./PersonalInfo";
import PlanSelection from "./PlanSelection";
import Steps from "./Steps";

const Form = () => {
  return (
    <div className="bg-white p-12 flex gap-2 w-5/6 m-auto">
      {/* Steps */}
      <Steps />
      {/* Input Fields */}
      <PlanSelection/>
    </div>
  );
};
export default Form;
