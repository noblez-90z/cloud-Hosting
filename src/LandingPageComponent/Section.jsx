const Section = () => {
  return (
    <div class="banner-inner text-white px-3 md:px-6 flex items-center justify-center bg-[#000]  h-fit  md:h-[500px] ">
      <div className="container   mt-32 md:mt-0 ">
        <div class="row justify-content-center ">
          <div class="col-lg-6 col-md-10">
            <div class="banner-heading text-center  md:px-6">
              <h1 className="mt-4 text-5xl md:text-[80px] font-bold tracking-[-4.2px] leading-[1.0952em]">
                Get a Domain Name.
              </h1>
              <p
                className="text-[28px] text-white font-manrope pt-[25px] pb-[15px] xl:pr-[40px]
"
              >
                Explore and claim your perfect domain name with us. Strengthen
                your online presence with the right web address!
              </p>
              <form className="form-banner mt-6" action="">
                <div className=" w-full md:w-3/4 mx-auto flex relative">
                  <input
                    class="input"
                    type="text"
                    placeholder="Think of a domain name...."
                    name=""
                    id=""
                    className="bg-[#171717]  rounded-2xl  py-5 pl-4 mt-4 w-full md:w-[80%] placeholder:text-[#fff] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[24px] placeholder:tracking-[-0.2px] text-[#fff] text-[16px] font-normal leading-[24px] tracking-[-0.2px]  focus:outline-none "
                    required
                  />
                  <button className="border-2 border-[#8c32ff] bg-[#8c32ff] rounded-2xl mt-4 w-40 py-4 absolute right-4 top-0 bottom-0 hover:bg-[#000]">
                    search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
