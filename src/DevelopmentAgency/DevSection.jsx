const DevSection = () => {
  const Description = [
    { img: "", tittle: "collabration team", text: "" },
    { img: "", tittle: "profesional tools", text: "" },
    { img: "", tittle: "simmple navigation", text: "" },
    { img: "", tittle: "Ai geerate ui", text: "" },
  ];
  return (
    <div className="px-3 md:px-6 py-6 bg-[#000] text-white">
      <div className=" grid grid-cols-1 md:grid-cols-3 space-x-3 gap-4 py-6">
        <h2 className="font-semibold text-lg">
          simple, user friendly. and <span>graet for</span>{" "}
        </h2>
        <div className="border px-3 py-3 rounded-2xl">
          <h2 className="font-semibold text-2xl capitalize">startup</h2>
          <p className="py-5 text-gray-300">
            with the power of Ai. freelancers can effortlessly design stunning
            and professional landing pages that captivate their audience
          </p>
          <button className="border py-2 px-3 ">learn more</button>
        </div>
        <div className="border px-3 py-3 rounded-2xl">
          <h2 className="font-semibold text-2xl capitalize">corporate </h2>
          <p className="py-5 text-gray-300">
            with the power of Ai. freelancers can effortlessly design stunning
            and professional landing pages that captivate their audience
          </p>
          <button className="border py-2 px-3 ">learn more</button>
        </div>
        <div className="border px-3 py-3 rounded-2xl">
          <h2 className="font-semibold text-2xl capitalize">freelancer</h2>
          <p className="py-5 text-gray-300">
            with the power of Ai. freelancers can effortlessly design stunning
            and professional landing pages that captivate their audience
          </p>
          <button className="border py-2 px-3 ">learn more</button>
        </div>
        <div className="border text-center px-3 py-3 rounded-2xl">
          <h2 className="font-semibold text-2xl capitalize">
            just type in what you envision, o design required!
          </h2>
          <p className="py-5 text-gray-300">
            discover the groundbreaking methods that are transforming web
            development
          </p>
          <button className="border py-2 px-3 ">get started</button>
        </div>
        <div className="border px-3 py-3 rounded-2xl">
          <h2 className="font-semibold text-2xl capitalize">job sekers</h2>
          <p className="py-5 text-gray-300">
            with the power of Ai. freelancers can effortlessly design stunning
            and professional landing pages that captivate their audience
          </p>
          <button className="border py-2 px-3 ">learn more</button>
        </div>
      </div>
    </div>
  );
};

export default DevSection;
