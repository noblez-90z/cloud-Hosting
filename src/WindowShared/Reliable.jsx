"use client";

// import React, { useEffect } from 'react';
import { FaLanguage, FaHeadset, FaBook, FaRegClock } from "react-icons/fa";
import callCenter from "../assets/5109039.jpg";
import cpanel from "../assets/cPanel-dashboard-Tools.png";
import FreeWebsiteMigration from "./Migration";

const features = [
  {
    title: "Multilingual Support",
    description:
      "Our experts are ready to assist you in both English and Hindi—because your language means comfort.",
    icon: <FaLanguage className="text-2xl text-blue-600" />,
  },
  {
    title: "Support Your Way",
    description:
      "Get expert support via call, live chat, ticket, or email—your choice, your way, whenever you need it.",
    icon: <FaHeadset className="text-2xl text-green-600" />,
  },
  {
    title: "Useful Resources",
    description:
      "We provide pre-written blogs and knowledge bases to offer you enhanced support.",
    icon: <FaBook className="text-2xl text-purple-600" />,
  },
  {
    title: "Instant Response",
    description:
      "Get a response from our tech team within 60 minutes during working hours.",
    icon: <FaRegClock className="text-2xl text-yellow-600" />,
  },
];

export default function HostingSupport() {
  return (
    <div className="py-12  md:px-8 px-4 bg-[#000] text-white">
      <div className="shared-stress-free-hosting__header py-4">
        <h2 className="shared-stress-free-hosting__title font-bold text-4xl text-center py-3">
          Reliable 24/7 Hosting Help from Certified Pros
        </h2>
        <p className="shared-stress-free-hosting__subtitle py-2 text-center text-gray-400">
          Our team of seasoned technical experts is always ready to resolve your
          issues swiftly and efficiently, ensuring seamless support whenever you
          need it.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-6">
        <div className="shared-stress-free-hosting__image-wrapper">
          <div className="shared-stress-free-hosting__image-container rounded-xl shadow-lg overflow-hidden">
            <img
              src={callCenter}
              alt="WordPress support specialist with headset"
              className="shared-stress-free-hosting__image"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-4 border-2 border-[#ffffff1a] bg-[#171717] rounded shadow-xl hover:border-t-[5px] hover:border-0 hover:border-[#8c32ff] transition duration-300"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <!------------------ Control Panel Section --------------------------> */}

      <section className="shared-control-panel-cpanel py-8 mt-10 md:px-8 px-4">
        <div className="shared-control-panel-cpanel__container ">
          <div className="shared-control-panel-cpanel__content grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* <!-- Left Content --> */}
            <div className="shared-control-panel-cpanel__left">
              <h2 className="shared-control-panel-cpanel__title font-bold text-4xl py-3">
                cPanel Makes Website Management a Breeze
              </h2>
              <p className="shared-control-panel-cpanel__description text-gray-400 py-2 font-semibold">
                With the cPanel control panel, managing your website is simple
                and seamless. From files, emails, and databases to FTP and
                security settings—everything is at your fingertips. Whether
                you're a beginner or an expert, cPanel makes it easy to take
                full control of your hosting. Even installing WordPress is just
                a single click away!
              </p>

              {/* <!-- Features Grid --> */}
              <div className="shared-control-panel-cpanel__features">
                <div className="shared-control-panel-cpanel__feature-item py-2">
                  <span className="shared-control-panel-cpanel__check-icon mr-1">
                    ✓
                  </span>
                  <span className="shared-control-panel-cpanel__feature-text text-lg text-gray-400">
                    1-Click WordPress Installation
                  </span>
                </div>

                <div className="shared-control-panel-cpanel__feature-item py-2">
                  <span className="shared-control-panel-cpanel__check-icon  mr-1">
                    ✓
                  </span>
                  <span className="shared-control-panel-cpanel__feature-text text-lg text-gray-400">
                    WordPress staging environments
                  </span>
                </div>

                <div className="shared-control-panel-cpanel__feature-item py-2">
                  <span className="shared-control-panel-cpanel__check-icon  mr-1">
                    ✓
                  </span>
                  <span className="shared-control-panel-cpanel__feature-text text-lg text-gray-400">
                    WordPress auto-updates
                  </span>
                </div>

                <div className="shared-control-panel-cpanel__feature-item py-2">
                  <span className="shared-control-panel-cpanel__check-icon mr-1">
                    ✓
                  </span>
                  <span className="shared-control-panel-cpanel__feature-text text-lg text-gray-400">
                    Plugin & theme management
                  </span>
                </div>

                <div className="shared-control-panel-cpanel__feature-item py-2">
                  <span className="shared-control-panel-cpanel__check-icon mr-1">
                    ✓
                  </span>
                  <span className="shared-control-panel-cpanel__feature-text text-lg text-gray-400">
                    WordPress backup & restore
                  </span>
                </div>

                <div className="shared-control-panel-cpanel__feature-item py-2">
                  <span className="shared-control-panel-cpanel__check-icon mr-1">
                    ✓
                  </span>
                  <span className="shared-control-panel-cpanel__feature-text text-lg text-gray-400">
                    WordPress security tools
                  </span>
                </div>
              </div>

              <div className="shared-control-panel-cpanel__cta px-4 py-2 md:mt-24 mt-6 bg-[#8c32ff] rounded-lg text-center w-fit">
                <a
                  href="#plans"
                  className="shared-control-panel-cpanel__button"
                >
                  Get Started with WordPress
                </a>
              </div>
            </div>

            {/* <!-- Right Image --> */}
            <div className="shared-control-panel-cpanel__right">
              <div className="shared-control-panel-cpanel__image-wrapper">
                <img
                  src={cpanel}
                  alt="cPanel Dashboard"
                  className="shared-control-panel-cpanel__image"
                  loading="lazy"
                />
                <div className="shared-control-panel-cpanel__image-overlay"></div>
                <div className="shared-control-panel-cpanel__image-dots"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Background decoration elements --> */}
        <div className="shared-control-panel-cpanel__decoration shared-control-panel-cpanel__decoration--top"></div>
        <div className="shared-control-panel-cpanel__decoration shared-control-panel-cpanel__decoration--bottom"></div>
      </section>
      <div className="">
        <FreeWebsiteMigration />
      </div>
    </div>
  );
}
