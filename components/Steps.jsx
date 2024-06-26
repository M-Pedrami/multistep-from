const Steps = ({step}) => {
  return (
    <div
      className="w-fit min-w-52 h-[550px] pt-5 pb-42 px-[40px] flex flex-col gap-4 rounded-md "
      style={{
        backgroundImage: `url("/bg-sidebar-desktop.svg")`,
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-green-200 py-2 px-4 rounded-full text-sm">1</div>
        <div>
          <div className="text-sm text-gray-400">Step 1 </div>
          <div className="text-sm text-gray-200">YOUR INFO</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-green-200 py-2 px-4 rounded-full text-sm">1</div>
        <div>
          <div className="text-sm text-gray-400">Step 1 </div>
          <div className="text-sm text-gray-200">YOUR INFO</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-green-200 py-2 px-4 rounded-full text-sm ">1</div>
        <div>
          <div className="text-sm text-gray-400">Step 1 </div>
          <div className="text-sm text-gray-200">YOUR INFO</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-green-200 py-2 px-4 rounded-full text-sm">1</div>
        <div>
          <div className="text-sm text-gray-400">Step 1 </div>
          <div className="text-sm text-gray-200">YOUR INFO</div>
        </div>
      </div>
    </div>
  );
};
export default Steps;
