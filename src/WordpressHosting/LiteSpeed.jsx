import FeaturesSection from "./Features";
import LiteSpeedSection from "./LiteSpeedSection";

const LiteSpeed = () => {
  return (
    <div className="md:px-6 px-4 bg-[#000]">
      {/* <!--------------litespeed-web-server ------------------> */}

      <section className="wordpress-hosting-litespeed-web-server-section py-6">
        {/* <!-- Background decoration --> */}
        <div className="wordpress-hosting-litespeed-web-server-bg-decoration"></div>

        {/* <!-- Header --> */}
        <div className="wordpress-hosting-litespeed-web-server-header text-center py-6">
          <h2 className="wordpress-hosting-litespeed-web-server-title font-bold text-3xl py-4">
            LiteSpeed Web Server + LS Cache
          </h2>
          <h3 className="wordpress-hosting-litespeed-web-server-subtitle font-semibold text-lg py-2">
            Supercharge Your WordPress Site with Blazing-Fast LiteSpeed WP
            Hosting
          </h3>
          <p className="wordpress-hosting-litespeed-web-server-description py-4">
            Give your visitors the speed they deserve. At URLStart, we use
            LiteSpeed Web Server to deliver exceptional WordPress
            performance—fast load times, smooth browsing, and reliable uptime
            even during traffic surges. Thanks to intelligent caching and
            powerful optimization, your site stays quick, responsive, and ready
            to grow with your audience.
          </p>
        </div>

        {/* <!-- Load time section --> */}
        <div className="wordpress-hosting-litespeed-web-server-load-time text-center">
          <h3 className="wordpress-hosting-litespeed-web-server-load-time-title font-bold text-2xl py-4">
            Page Load Time Battle: Which Web Server Wins?
          </h3>
          <p className="wordpress-hosting-litespeed-web-server-load-time-subtitle py-3">
            Performance Benchmarked Under 1,000-User Load
          </p>

          {/* <!-- Comparison cards --> */}
          <div className="wordpress-hosting-litespeed-web-server-comparison grid grid-cols-1 md:grid-cols-3 gap-6 py-6 md:px-6">
            {/* <!-- LiteSpeed Card --> */}
            <div className="wordpress-hosting-litespeed-web-server-card wordpress-hosting-litespeed-web-server-card-best border-t-[5px] border-[#8c32ff] pt-4 px-4 pb-10 text-center rounded-xl shadow-lg bg-[#171717] text-white">
              <div className="wordpress-hosting-litespeed-web-server-card-status wordpress-hosting-litespeed-web-server-status-best flex justify-center items-center gap-3 py-4">
                <div className="wordpress-hosting-litespeed-web-server-status-icon w-8 rounded-full bg-[#c7a3f5] p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="wordpress-hosting-litespeed-web-server-status-text font-semibold text-[#8c32ff]">
                  Fastest
                </span>
              </div>

              <img
                src="/api/placeholder/180/180"
                alt="LiteSpeed Performance Timer"
                className="wordpress-hosting-litespeed-web-server-timer-img  h-40 py-3 my-6"
              />

              <span className="wordpress-hosting-litespeed-web-server-load-badge w-fit rounded-full px-3  bg-[#8c32ff] text-white font-bold py-3 my-3">
                0.5s - 0.8s
              </span>

              <h4 className="wordpress-hosting-litespeed-web-server-server-name font-bold text-2xl py-3">
                LiteSpeed Server
              </h4>
              <p className="wordpress-hosting-litespeed-web-server-server-tech text-gray-300">
                With LSCache Plugin + In-built CDN
              </p>
            </div>

            {/* <!-- Apache Card --> */}
            <div className="wordpress-hosting-litespeed-web-server-card wordpress-hosting-litespeed-web-server-card-average border-t-[5px] border-[#8c32ff] pt-4 px-4 pb-10 text-center rounded-xl shadow-lg bg-[#171717] text-white">
              <div className="wordpress-hosting-litespeed-web-server-card-status wordpress-hosting-litespeed-web-server-status-average flex justify-center items-center gap-3 py-4">
                <div className="wordpress-hosting-litespeed-web-server-status-icon w-8 rounded-full bg-[#c7a3f5] p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <span className="wordpress-hosting-litespeed-web-server-status-text font-semibold text-[#8c32ff]">
                  Average
                </span>
              </div>

              <img
                src="/api/placeholder/180/180"
                alt="Apache Performance Timer"
                className="wordpress-hosting-litespeed-web-server-timer-img h-40 py-3 my-6"
              />

              <span className="wordpress-hosting-litespeed-web-server-load-badge w-fit rounded-full px-3  bg-[#8c32ff] text-white font-bold py-3 my-3">
                1.2s - 1.8s
              </span>

              <h4 className="wordpress-hosting-litespeed-web-server-server-name font-bold text-2xl py-3">
                NGINX Server
              </h4>
              <p className="wordpress-hosting-litespeed-web-server-server-tech text-gray-300">
                With OPcache + PHP-FPM
              </p>
            </div>

            {/* <!-- Nginx Card --> */}
            <div className="wordpress-hosting-litespeed-web-server-card wordpress-hosting-litespeed-web-server-card-poor border-t-[5px] border-[#8c32ff] pt-4 px-4 pb-10 text-center rounded-xl shadow-lg bg-[#171717] text-white">
              <div className="wordpress-hosting-litespeed-web-server-card-status wordpress-hosting-litespeed-web-server-status-poor flex justify-center items-center gap-3 py-4">
                <div className="wordpress-hosting-litespeed-web-server-status-icon w-8 rounded-full bg-[#c7a3f5] p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <span className="wordpress-hosting-litespeed-web-server-status-text font-semibold text-[#8c32ff]">
                  Slower
                </span>
              </div>

              <img
                src="/api/placeholder/180/180"
                alt="Standard Hosting Performance Timer"
                className="wordpress-hosting-litespeed-web-server-timer-img h-40 py-3 my-6"
              />

              <span className="wordpress-hosting-litespeed-web-server-load-badge w-fit rounded-full px-3  bg-[#8c32ff] text-white font-bold py-3 my-3">
                2.5s - 3.2s
              </span>

              <h4 className="wordpress-hosting-litespeed-web-server-server-name font-bold text-2xl py-3">
                Apache Server
              </h4>
              <p className="wordpress-hosting-litespeed-web-server-server-tech text-gray-300">
                With OPcache + PHP-FPM
              </p>
            </div>
          </div>
        </div>

        {/* <!-- CTA --> */}
        <div className="wordpress-hosting-litespeed-web-server-cta w-full text-center my-6 ">
          <button className="wordpress-hosting-litespeed-web-server-cta-button   bg-[#8c32ff] py-2 px-4 rounded-lg">
            Boost Your WordPress Site Now
          </button>
        </div>
      </section>
      <div className="">
        <FeaturesSection />
      </div>
      <div className="">
        <div className="py-10 px-6 ">
          <h2 class="rating-hosting-heading font-bold text-4xl text-center  pt-10 pb-6">
            Highest Rated Web Hosting Company
          </h2>
          <div className="mt-5 py-6">
            <div className="rating-hosting-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
              {/* <!-- Card 1 - Google --> */}
              <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out   hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] hover:border-t-[5px] bg-[#171717]">
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
              <div className="rating-hosting-card  py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-[5px] bg-[#171717]">
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
              <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg  transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-[5px] bg-[#171717]">
                <div class="rating-hosting-content flex items-center space-x-4 py-4 pl-4">
                  <div class="rating-hosting-score text-3xl font-bold">
                    3.4{" "}
                    <span class="rating-hosting-total font-normal text-xl text-gray-500">
                      / 5
                    </span>
                  </div>
                  <div class="rating-hosting-logo">
                    <div class="rating-hosting-custom-logo">
                      <span class="rating-hosting-logo-circle">H</span>{" "}
                      HostSearch
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
              <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-[5px] bg-[#171717]">
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
              <div class="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-[5px] bg-[#171717]">
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
              <div className="rating-hosting-card py-6 px-4 rounded-lg shadow-lg   transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]  hover:border-t-[5px] bg-[#171717]">
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
      </div>
      <div className="">
        <LiteSpeedSection />
      </div>
    </div>
  );
};

export default LiteSpeed;
