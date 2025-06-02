import image from "../assets/svg8.svg";

import club from "../assets/club.png";
import com from "../assets/com.png";
import online from "../assets/online.png";
import us from "../assets/us.png";
import xyz from "../assets/xyz.png";
import iconlink from "../assets/icon-link.svg";
import wordpress from "../assets/wordpress.svg";
import webhosting from "../assets/web-hosting.svg";
import domain from "../assets/domain.svg";
const SectionTwo = () => {
  return (
    <section className="bg-[#000]">
      <div className="container px-8  mx-auto bg-[#000]">
        <div className="    py-6 ">
          <div class="flex justify-center space-x-20 pb-20 mb-10 ">
            <div>
              <img src={club} alt="" />
            </div>
            <div>
              <img src={com} alt="" />
            </div>
            <div>
              <img src={online} alt="" />
            </div>
            <div>
              <img src={us} alt="" />
            </div>
            <div>
              <img src={xyz} alt="" />
            </div>
          </div>

          <div className=" md:flex justify-around gap-3 items-center px-6 mt-8 z-10">
            <div class="card-style-eleven mt-5 md:mt-0 border-2 px-6 py-3 rounded-xl bg-[#000] flex-1 z-10">
              <img src={wordpress} alt="" className="py-4" />
              <h4 className="font-bold text-xl py-6 text-white">
                WordPress Hosting
              </h4>
              <p className="text-gray-500 text-[18px] font-normal ">
                Start from <span class="fw-500 text-white">$2.99/mo</span>
              </p>
              <div class="flex justify-end py-2">
                <a href="#" class="stretched-link">
                  <img src={iconlink} alt="" />
                </a>
              </div>
            </div>

            <div class="card-style-eleven mt-5 md:mt-0 border-2 px-6 py-3 rounded-xl bg-[#000] flex-1 z-10">
              <img src={webhosting} alt="" className="py-4" />
              <h4 className="font-bold text-xl py-6 text-white">
                Website Hosting
              </h4>
              <p class="text-gray-500 text-[18px] font-normal">
                Start from <span class="fw-500 text-white">$2.99/mo</span>
              </p>
              <div class="flex justify-end py-2">
                <a href="#" class="stretched-link">
                  <img src={iconlink} alt="" />
                </a>
              </div>
            </div>

            <div class="card-style-eleven mt-5 md:mt-0 border-2 px-6 py-3 rounded-xl bg-[#000] flex-1 z-10">
              <img src={domain} alt="" className="py-4" />
              <h4 className="font-bold text-xl py-6 text-white">
                Domain Names
              </h4>
              <p class="text-gray-500 text-[18px] font-normal">
                Start from <span class="fw-500 text-white">$2.99/mo</span>
              </p>
              <div class="flex justify-end py-2">
                <a href="#" class="stretched-link">
                  <img src={iconlink} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 hidden md:block  relative bottom-20 bg-[#171717]"></div>
    </section>
  );
};

export default SectionTwo;
