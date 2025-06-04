import FaqAccordion from "./Fag";
import Help from "./Help";
import DataCenterLocations from "./Map";
import Partner from "./Partner";

const Rating = () => {
  return (
    <div className=" bg-[#000] text-white">
      <div className="py-10 px-6 ">
        <h2 class="rating-hosting-heading font-bold text-4xl text-center  pt-10 pb-6">
          Highest Rated Web Hosting Company
        </h2>
        <div className="mt-5 py-6">
          <div className="rating-hosting-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
            {/* <!-- Card 1 - Google --> */}
            <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out   hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] hover:border-t-2 bg-[#171717]">
              <div class="rating-hosting-content flex items-center space-x-4 py-4 pl-4 ">
                <div class="rating-hosting-score text-3xl font-bold">
                  4.4{" "}
                  <span class="rating-hosting-total font-normal text-xl text-gray-500">
                    / 5
                  </span>
                </div>
                <div class="rating-hosting-logo">
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="w-30 h-10"
                  />
                </div>
              </div>
              <div class="rating-hosting-stars py-4 flex justify-center">
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="rating-hosting-card  py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-2 bg-[#171717]">
              <div class="rating-hosting-content flex items-center space-x-4 py-4 pl-4">
                <div class="rating-hosting-score text-3xl font-bold">
                  3.3{" "}
                  <span class="rating-hosting-total font-normal text-xl text-gray-500">
                    / 5
                  </span>
                </div>
                <div class="rating-hosting-logo">
                  <img src="/api/placeholder/120/40" alt="Rating Platform" />
                </div>
              </div>
              <div class="rating-hosting-stars py-4 flex justify-center">
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star rating-hosting-star-empty">
                  ★
                </span>
                <span class="rating-hosting-star rating-hosting-star-empty">
                  ★
                </span>
              </div>
            </div>

            {/* <!-- Card 3 - HostSearch --> */}
            <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg  transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-2 bg-[#171717]">
              <div class="rating-hosting-content flex items-center space-x-4 py-4 pl-4">
                <div class="rating-hosting-score text-3xl font-bold">
                  3.4{" "}
                  <span class="rating-hosting-total font-normal text-xl text-gray-500">
                    / 5
                  </span>
                </div>
                <div class="rating-hosting-logo">
                  <div class="rating-hosting-custom-logo">
                    <span class="rating-hosting-logo-circle">H</span> HostSearch
                  </div>
                </div>
              </div>
              <div class="rating-hosting-stars py-4 flex justify-center">
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star rating-hosting-star-half">
                  ★
                </span>
                <span class="rating-hosting-star rating-hosting-star-empty">
                  ★
                </span>
              </div>
            </div>

            {/* <!-- Card 4 - HostAdvice --> */}
            <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-2 bg-[#171717]">
              <div class="rating-hosting-content flex items-center space-x-4 py-4 pl-4">
                <div class="rating-hosting-score text-3xl font-bold">
                  9.2{" "}
                  <span class="rating-hosting-total font-normal text-xl text-gray-500">
                    / 10
                  </span>
                </div>
                <div class="rating-hosting-logo">
                  <div class="rating-hosting-custom-logo">
                    <span class="rating-hosting-advice-icon">🚀</span>
                    hostadvice.
                  </div>
                </div>
              </div>
              <div class="rating-hosting-stars py-4 flex justify-center">
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
              </div>
            </div>

            {/* <!-- Card 5 - Serchen --> */}
            <div class="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-2 bg-[#171717]">
              <div class="rating-hosting flex items-center space-x-4 py-4 pl-4">
                <div class="rating-hosting-score text-3xl font-bold">
                  4.3{" "}
                  <span class="rating-hosting-total font-normal text-xl text-gray-500">
                    / 5
                  </span>
                </div>
                <div class="rating-hosting-logo">
                  <div class="rating-hosting-custom-logo">
                    <span class="rating-hosting-logo-icon">🔍</span> serchen
                  </div>
                </div>
              </div>
              <div class="rating-hosting-stars py-4 flex justify-center">
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star rating-hosting-star-half">
                  ★
                </span>
              </div>
            </div>

            {/* <!-- Card 6 - HostReview --> */}
            <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-2 bg-[#171717]">
              <div class="rating-hosting-content flex items-center space-x-4 py-4 pl-4">
                <div class="rating-hosting-score text-3xl font-bold">
                  4.1{" "}
                  <span class="rating-hosting-total font-normal text-xl text-gray-500">
                    / 5
                  </span>
                </div>
                <div class="rating-hosting-logo">
                  <div class="rating-hosting-custom-logo rating-hosting-review-logo">
                    <span class="rating-hosting-host">Host</span>
                    <span class="rating-hosting-review">Review</span>
                  </div>
                </div>
              </div>
              <div class="rating-hosting-stars">
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star text-[#FF9800]">★</span>
                <span class="rating-hosting-star rating-hosting-star-empty">
                  ★
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* map  */}
      <div className="bg-[#171717] py-10 px-6">
        <DataCenterLocations />
      </div>
      {/* Partner  */}
      <div className="bg-[#000] py-10 px-6">
        <Partner />
      </div>
      {/* FAQ  */}
      <div className="bg-[#000] py-10 md:px-6">
        <FaqAccordion />
      </div>
      <div className="bg-[#000] py-10 px-6">
        <Help />
      </div>
    </div>
  );
};

export default Rating;
