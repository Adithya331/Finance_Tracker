

const HomeView = () => {
  return (
    <div className="grow basis-5/6 m-4">
      <div className="grid grid-cols-3 grid-rows-5 gap-3 h-full ">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full bg-[#0A0A0A] text-white">
          Heading
        </div>
        <div className="row-start-2 col-start-1 col-end-4 w-full h-full bg-[#0A0A0A] text-white">
          flex-box
        </div>
        <div className="row-start-3 row-end-6 col-start-1 col-end-3 w-full h-full bg-[#0A0A0A] text-white">
          Table
        </div>
        <div className="row-start-3 row-end-6 col-start-3 col-end-4 w-full h-full bg-[#0A0A0A] text-white">
          Graph
        </div>
      </div>
    </div>
  );
};

export default HomeView;
