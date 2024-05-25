const page = () => {
  return (
    <main className=" bg-gray-500 w-screen h-screen p-10">
      <div className="bg-white p-20 flex gap-2 w-5/6 m-auto">
        <div
          className="w-fit pt-5 pb-52 px-[40px] flex flex-col gap-4 rounded-md "
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
            <div className="bg-green-200 py-2 px-4 rounded-full text-sm ">
              1
            </div>
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

        <div className="flex flex-col gap-2 w-2/3 py-5 px-10">
          <div>
            <div className="text-xl font-semibold">Personal Info</div>
            <div className="text-gray-400">
              Please Provide Your Personal Info
            </div>
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
          <button className="px-5 py-3 bg-black text-white rounded-md">
            Next Step
          </button>
        </div>
        </div>
      </div>
    </main>
  );
};
export default page;
