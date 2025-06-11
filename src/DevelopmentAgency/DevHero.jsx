const DevHero = () => {
  return (
    <div className="px-6 py-6 bg-[#000] text-white">
      <div className=" text-center w-fit mx-auto my-6 py-6 px-3">
        <h3 className=" py-2 px-3 my-5 w-fit mx-auto bg-[#171717] text-gray-300">
          new update out now
        </h3>
        <h1 className="capitalize text-3xl md:text-6xl font-bold py-3">
          innovovative techiques for web development{" "}
        </h1>
        <p className="py-3 mb-6">
          Discover the groundbreaking methods that are transforming web
          development, making it faster. easier. and more intuitive than ever
          before
        </p>
        <button className="bg-[#171717] py-2 px-3">get started </button>
        <button className=" ml-5 border py-2 px-3">watch video</button>
      </div>
      <div className="partners mt-20 mb-10  py-6 text-center ">
        <p className="py-3">
          more tahn <span className="font-semibold">10,000+</span> compaines
          found it helpful
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 space-x-4 list-none mt-3">
          <h2>slack</h2>
          <h2>twitch</h2>
          <h2>Netflix</h2>
          <h2>amazon</h2>
          <h2>altiassian</h2>
          <h2>framer</h2>
        </div>
      </div>
    </div>
  );
};

export default DevHero;
