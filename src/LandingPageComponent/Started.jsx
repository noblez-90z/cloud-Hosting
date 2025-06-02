import icon1 from "../assets/svg4.svg";
import icon2 from "../assets/svg5.svg";
import icon3 from "../assets/svg6.svg";
import pics from "../assets/8502296.png";
const Started = () => {
  return (
    <div className="py-6 px-4 bg-[#000] text-white">
      <div className=" py-6 md:px-6  rounded-lg flex flex-col lg:flex-row items-center justify-between">
        <div class="section-heading flex-1">
          <h2 className="font-bold text-5xl py-3">Focused on You, Always</h2>
          <p className="text-gray-500 text-[18px] font-normal leading-[24px] tracking-[-0.2px] py-3">
            We prioritize your satisfaction and tailor our services to meet your
            unique needs. Our team is dedicated to supporting you every step of
            the way. We build lasting relationships based on trust and
            reliability. Your success is our success — we're here to help you
            achieve your goals.
            {/* Every customer matters to us—regardless of the service you use,
            you're equally important. Our team is committed to delivering the
            best support in every situation. */}
          </p>
          <ul class="baner-list">
            <li className="flex items-start gap-4 py-3">
              {" "}
              <img
                src={icon1}
                alt="svg"
                className="w-[32px] mt-2 "
                style={{ color: "white", stroke: "white" }}
              />
              <span>
                <h4 className="font-semibold text-3xl pb-3">
                  Nonstop Technical Support
                </h4>
                <p className="text-gray-500 text-[18px] font-normal leading-[24px] tracking-[-0.2px] ">
                  Experience top-tier support from our expert team—available
                  24/7 via chat, email, phone, or ticket. We're committed to
                  never letting you down and consistently delivering dependable
                  assistance.
                </p>
              </span>
            </li>
            <li className="flex items-start gap-4 py-3">
              <img src={icon2} alt="svg" className="mt-2" />
              <span>
                <h4 className="font-semibold text-3xl pb-3">
                  Stay Online, All the Time
                </h4>
                <p className="text-gray-500 text-[18px] font-normal leading-[24px] tracking-[-0.2px] ">
                  Uptime is everything—no matter how good your service is, it
                  means little if it’s not available. That’s why we ensure 99%
                  uptime across all our services, keeping your operations
                  running smoothly without interruption.
                </p>
              </span>
            </li>
            <li className="flex items-start gap-4 py-3">
              <img src={icon3} alt="svg" className="w-[32px] mt-2" />
              <span>
                <h4 className="font-semibold text-3xl pb-3">
                  Satisfaction or Your Money Back
                </h4>
                <p className="text-gray-500 text-[18px] font-normal leading-[24px] tracking-[-0.2px] ">
                  We understand that our service might not be the perfect fit
                  for everyone—and the only way to know is by trying it. That’s
                  why we offer a 7-day money-back guarantee on all our hosting
                  plans.
                </p>
              </span>
            </li>
          </ul>
          <div class="border border-[#8c32ff] bg-[#8c32ff] rounded-2xl mt-6 w-40 py-2 hover:bg-[#000] text-center text-white font-semibold">
            <a class="btn-02" href="#">
              {" "}
              Go to know us
            </a>
          </div>
        </div>
        <div class="col-lg-6 text-end">
          <img src={pics} alt="png" width="480" />
        </div>
      </div>
      <div className=" py-6 px-6 text-center">
        <div class="best-web-hosting__header">
          <h2 className="best-web-hosting__title text-4xl font-bold py-3">
            The Right Hosting Partner for Your Needs
          </h2>
          <p class="best-web-hosting__subtitle py-3 text-gray-500">
            Customers worldwide trust us for high-quality web hosting that’s
            fast, reliable, and built to support their growth.
          </p>
        </div>
        <div className="  py-4">
          <div className=" flex flex-col lg:flex-row items-center justify-between gap-3 py-3">
            <div className="best-web-hosting__card best-web-hosting__card--renowned border-2 border-[#8c32ff] shadow-md transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
              <h3 className="best-web-hosting__card-title font-bold text-2xl py-3">
                Trusted by Businesses Since 2019
              </h3>
              <p class="best-web-hosting__card-text py-3 text-gray-500">
                For over 5 years, we've been providing web hosting services
                worldwide, earning the trust of thousands of customers. We're
                committed to delivering top-tier hosting solutions and leading
                the industry. Join us and experience next-level hosting.
              </p>
            </div>

            <div class="best-web-hosting__card best-web-hosting__card--scalability  border-2 border-[#8c32ff] shadow-md transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] ">
              <h3 class="best-web-hosting__card-title font-bold text-2xl py-3">
                Premium Hosting You’ll Love
              </h3>
              <p class="best-web-hosting__card-text py-3 font-normal text-[16px] text-gray-500">
                Our affordable services, including Web Hosting, VPS, and
                Servers, offer unmatched value. Get double the resources for the
                same price—outperforming 99% of competitors without compromising
                quality. Plus, we never oversell, which is why our customers
                love us.
              </p>
            </div>
          </div>
          <div className="border-2 border-[#8c32ff] shadow-md transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] mt-3">
            <div className="best-web-hosting__icon w-20 mx-auto py-4 w-15">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div class="best-web-hosting__card-badge font-semibold text-2xl text-[#fff]">
              Credible reputation
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 py-3">
            <div class="best-web-hosting__card best-web-hosting__card--security border-2 border-[#8c32ff] shadow-md transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] flex-1">
              <h3 class="best-web-hosting__card-title font-bold text-2xl py-3">
                Complete Protection Everywherey
              </h3>
              <p class="best-web-hosting__card-text py-3 text-gray-500">
                Your server and data are protected by multi-layered security,
                top-tier data centers, advanced firewalls, and DDoS protection
                to safeguard against attacks. Cyber threats and viruses don’t
                stand a chance!
              </p>
            </div>
            <div class="best-web-hosting__card best-web-hosting__card--affordable border-2 border-[#8c32ff] shadow-md transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] flex-1">
              <div class="best-web-hosting__icon w-12 mx-auto py-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#000"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8l-8 8"></path>
                  <path d="M8.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                  <path d="M15.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                </svg>
              </div>
              <div class="best-web-hosting__card-badge py-4 font-semibold text-2xl text-[#fff]">
                Most affordable prices
              </div>
            </div>
          </div>
          <div className="">
            <div class="best-web-hosting__card best-web-hosting__card--technologies border-2 border-[#8c32ff] shadow-md transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] mt-3">
              <h3 class="best-web-hosting__card-title font-bold text-2xl py-3">
                Comprehensive Hosting Solutions
              </h3>
              <p class="best-web-hosting__card-text py-3 text-gray-500">
                From web hosting to full-scale server solutions, we've got
                everything you need under one roof. No need to search around—our
                expert team handles everything from unmanaged setups to fully
                managed support, ensuring you're covered at every level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
// border - [rgba(57, 239, 192, 0.3)];
// hover: border - [rgb(15, 189, 145)];
