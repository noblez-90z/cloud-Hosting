const DevHeader = () => {
  return (
    <div className=" flex justify-between items-center px-3 md:px-6 py-3 bg-[#000] text-white">
      <div className="">
        <h2>logo</h2>
      </div>
      <div className=" list-none hidden md:block">
        <nav>
          <div className="flex space-x-6 gap-4">
            <li>About </li>
            <li>Pricing</li>
            <li>feature</li>
            <li>blogs</li>
            <li>contacts</li>
          </div>
        </nav>
      </div>
      <div className="">
        <button className=" py-2 px-3 bg-[#171717]">free trails</button>
      </div>
    </div>
  );
};

export default DevHeader;
