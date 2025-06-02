import {
  RiLineChartLine,
  RiCustomerService2Line,
  RiShieldCheckLine,
} from "react-icons/ri";
import "../App.css";
const Section = () => {
  return (
    <div className="py-12 text-white bg-[#000]">
      <section className="shared-className-premium-hosting">
        <div className="container mx-auto px-4">
          <div className="shared-className-premium-hosting-header text-center">
            <h2 className="shared-className-premium-hosting-title font-bold text-4xl py-4">
              Reliable Shared Hosting—The URLStart Advantage
            </h2>
            <p className="shared-className-premium-hosting-subtitle text-lg mb-4">
              Customers trust our hosting because of our unbeatable support and
              rock-solid guarantees.
            </p>
          </div>

          <div className="row grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 py-6">
            {/* <!-- Feature 1: Speed --> */}
            <div className="col-lg-4 col-md-12 border-l-[5px] border-[#8c32ff] px-4 rounded-2xl py-4 shadow-lg transition-all duration-300 ease-in-out   hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] ">
              <div className="shared-className-premium-hosting-feature shared-className-premium-hosting-speed">
                <div className="shared-className-premium-hosting-feature-icon w-fit rounded-full py-6">
                  <RiLineChartLine size={24} />
                </div>
                <h3 className="shared-className-premium-hosting-feature-title font-bold text-2xl py-3">
                  Near-Perfect Uptime
                </h3>
                <p className="shared-className-premium-hosting-feature-text text-lg py-3">
                  We understand that keeping your website online is your top
                  priority—and it’s ours too. That’s why we host your services
                  in cutting-edge data centers, backed by ultra-reliable,
                  high-performance servers built to handle heavy traffic and
                  ensure exceptional uptime. Your site stays fast, accessible,
                  and always ready for business.
                </p>

                {/* <!-- Speed Indicator Animation --> */}
                <div className="shared-className-premium-hosting-speed-indicator mt-4 flex items-center justify-between">
                  <div className="shared-className-premium-hosting-speed-bar w-fill flex-1 mr-4">
                    <div className="shared-className-premium-hosting-speed-progress border h-3 bg-gray-300 w-full rounded-full"></div>
                  </div>
                  <div className="shared-className-premium-hosting-speed-value">
                    <span
                      className="shared-className-premium-hosting-speed-number"
                      data-value="100"
                    >
                      0
                    </span>
                    %
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Feature 2: Support --> */}
            <div className="col-lg-4 col-md-12 border-l-[5px] border-[#8c32ff] px-4 rounded-2xl py-4 shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
              <div className="shared-className-premium-hosting-feature shared-className-premium-hosting-support">
                <div className="shared-className-premium-hosting-feature-icon w-fit rounded-full py-6">
                  <RiCustomerService2Line />
                </div>
                <h3 className="shared-className-premium-hosting-feature-title font-bold text-2xl py-3">
                  Always-On Expert Support
                </h3>
                <p className="shared-className-premium-hosting-feature-text text-lg py-3">
                  We’re committed to delivering an exceptional hosting
                  experience. Whether you face technical challenges or just need
                  guidance, our expert support team is available 24/7/365. Reach
                  out via phone, ticket, or email, and we’ll respond promptly to
                  resolve your issues and keep your website running smoothly.
                </p>

                {/* <!-- Support Animation --> */}
                <div className="shared-className-premium-hosting-support-indicator">
                  <div className="shared-className-premium-hosting-support-chat">
                    <div className="shared-className-premium-hosting-support-bubble bubble-1">
                      WordPress help?
                    </div>
                    <div className="shared-className-premium-hosting-support-bubble bubble-2">
                      We're here for you!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Feature 3: Security --> */}
            <div className="col-lg-4 col-md-12 border-l-[5px] border-[#8c32ff] px-4 rounded-2xl py-4 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
              <div className="shared-className-premium-hosting-feature shared-className-premium-hosting-security">
                <div className="shared-className-premium-hosting-feature-icon w-fit rounded-full py-6">
                  <RiShieldCheckLine className="text-xl " />
                </div>
                <h3 className="shared-className-premium-hosting-feature-title font-bold text-2xl py-3">
                  Love It or Get a Full Refund
                </h3>
                <p className="shared-className-premium-hosting-feature-text text-lg py-3">
                  We’re confident you’ll love our web hosting—but we understand
                  that real value is only clear once you experience it. That’s
                  why we offer a 30-day risk-free guarantee. If you’re not
                  satisfied, you can cancel within 30 days—no hassle, no hard
                  feelings. Your satisfaction is our top priority.
                </p>

                {/* <!-- Security Animation --> */}
                <div className="mt-5 h-[70px] flex justify-center items-center relative">
                  <div className="w-[50px] h-[60px] bg-[#4a90e2] rounded-t-[5px] rounded-b-[50%] relative flex items-center justify-center translate-y-0 shadow-[0_5px_15px_rgba(74,144,226,0.4)]">
                    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-t-[5px] rounded-b-[50%] animate-pulse-custom" />
                    <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-white transform -translate-x-1/2 -translate-y-1/2 mask-check" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Background Elements --> */}
        <div className="shared-className-premium-hosting-bg-element bg-element-1"></div>
        <div className="shared-className-premium-hosting-bg-element bg-element-2"></div>
        <div className="shared-className-premium-hosting-bg-element bg-element-3"></div>
      </section>

      {/* new section */}
      <section className="best-web-hosting md:px-6 px-4 py-6 ">
        <div className="best-web-hosting__header py-4 text-center md:px-8 px-4">
          <h2 className="best-web-hosting__title text-4xl font-bold py-3">
            Unmatched Features for Next-Level Shared Hosting
          </h2>
          <p className="best-web-hosting__subtitle">
            This unmatched flexibility empowers you to build a hosting
            environment tailored precisely to your business needs—giving you a
            competitive advantage and accelerating your path to success.
          </p>
        </div>

        <div className="best-web-hosting grid grid-cols-1 md:grid-cols-3 py-6 gap-6 ">
          {/* <!-- First row with varying widths --> */}
          <div className="best-web-hosting__card best-web-hosting__card--renowned border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <h3 className="best-web-hosting__card-title font-bold text-xl py-3 text-gray-300">
              cPanel Management
            </h3>
            <p className="best-web-hosting__card-text text-gray-400">
              Effortlessly manage your website through a user-friendly cPanel.
              With our web hosting, you can perform tasks quickly and
              reliably—whether it’s creating FTP accounts, databases, or email
              addresses, everything is just a few clicks away.
            </p>
          </div>

          <div className="best-web-hosting__card best-web-hosting__card--scalability border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <h3 className="best-web-hosting__card-title font-bold text-xl py-3 text-gray-300">
              LiteSpeed Performance
            </h3>
            <p className="best-web-hosting__card-text text-gray-400">
              We harness the power of LiteSpeed web servers combined with
              advanced caching to deliver superior performance and faster load
              times—outpacing both Apache and NGINX by efficiently optimizing
              resource usage between your website and the server.
            </p>
          </div>

          <div className="best-web-hosting__card best-web-hosting__card--credible border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl text-center shadow-md transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <div className="best-web-hosting__icon mx-auto py-3 w-fit">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/quill/100/security-ssl.png"
                alt="security-ssl"
              />
            </div>
            <div className="best-web-hosting__card-badge font-bold text-xl py-3 text-gray-300">
              Free SSL Certificate
            </div>
          </div>

          {/* <!-- Second row with varying widths --> */}
          <div className="best-web-hosting__card best-web-hosting__card--security border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <h3 className="best-web-hosting__card-title font-bold text-xl py-3 text-gray-300">
              Own Your Email Identity
            </h3>
            <p className="best-web-hosting__card-text text-gray-400">
              Set up professional, spam-protected email addresses using your own
              domain—no need for third-party email services. Access and manage
              your inbox seamlessly through webmail, anytime, on any device.
            </p>
          </div>

          <div className="best-web-hosting__card best-web-hosting__card--affordable border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl text-center shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <div className="best-web-hosting__icon mx-auto w-fit py-3">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/pulsar-line/100/favourite-website.png"
                alt="favourite-website block"
              />
            </div>
            <div className="best-web-hosting__card-badge font-bold text-xl py-3 text-gray-300">
              Free Website Builder
            </div>
          </div>

          <div className="best-web-hosting__card best-web-hosting__card--technologies border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <h3 className="best-web-hosting__card-title font-bold text-xl py-3 text-gray-300">
              Install Apps in a Click
            </h3>
            <p className="best-web-hosting__card-text text-gray-400">
              Stop wasting valuable time manually installing applications. With
              the power of Softaculous, you can deploy over 400 apps—including
              WordPress, Joomla, and Drupal—with just a single click. Fast,
              simple, and ready to go.
            </p>
          </div>

          {/* <!-- Additional features from image --> */}
          <div className="best-web-hosting__card best-web-hosting__card--renowned border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <h3 className="best-web-hosting__card-title font-bold text-xl py-3 text-gray-300">
              Newest PHP & MySQL
            </h3>
            <p className="best-web-hosting__card-text text-gray-400">
              Break free from PHP limitations—run your applications in Node.js,
              Python, Django, Ruby on Rails, and more. Our hosting plans are
              fully up to date and support a wide range of modern development
              environments, giving you the freedom to build the way you want.
            </p>
          </div>

          <div className="best-web-hosting__card best-web-hosting__card--scalability border-2 border-[#ffffff1a] bg-[#171717] py-4 px-4 rounded-2xl shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <h3 className="best-web-hosting__card-title font-bold text-xl py-3 text-gray-300">
              Malware Scanning & Removal
            </h3>
            <p className="best-web-hosting__card-text text-gray-400">
              We understand how stressful a hacked website can be. That’s why
              our powerful malware removal tool proactively protects your site
              from threats—keeping your data secure and your mind at ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
