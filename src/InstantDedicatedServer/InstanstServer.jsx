import img2 from "../assets/img2.jpg";
const Instantserver = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 bg-[#000] text-white py-6">
      <section className="section-gap  py-6">
        <div className="container">
          <div className="row grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
            <div className="col-md-6 col-12  text-lg text-right">
              <div>
                <div className="icon-width-heading">
                  <h2 className="font-bold text-3xl py-3">Our Servers</h2>
                  <p className="text-lg text-gray-300">
                    We take great pride in the hardware we use for our dedicated
                    servers. We only use the latest and thoroughly tested Blade
                    servers manufactured by SuperMicro.To take the greatest care
                    of your data, all our servers come with two hard disks by
                    default with RAID1 enabled. Making sure, even when one hard
                    disk completely breaks down, your data is still intact and
                    your server will remain online.
                  </p>
                  <p className="text-lg text-gray-400">
                    Optionally, you can choose a Control Panel for easy Server
                    Management.Here the available add-ons:
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12  p-4 rounded-lg relative">
              <div className="text-lg-end img-shape-2">
                <div className="shape-1 p-4 text  absolute top-0 left-3 bg-[#000] text-white rounded-3xl h-20 w-80 font-bold text-xl text-center">
                  SuperMicro <span className="text-[#8c32ff]">Blade</span>
                  <div className="shap-right-top">
                    <svg
                      viewBox="0 0 11 11"
                      fill="#0e0f11"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="#0e0f11"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="shape-2 p-4 text  absolute bottom-1 right-3 bg-[#000] text-white rounded-3xl h-20 w-80 font-bold text-xl text-center">
                  Multiple <span className="text-[#8c32ff]">OS Options</span>
                  <div className="shap-left-top">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#000"
                      ></path>
                    </svg>
                  </div>
                </div>

                <img src={img2} alt="" className="ms-auto rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instantserver;
