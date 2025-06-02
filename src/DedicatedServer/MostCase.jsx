import React, { useEffect, useRef } from "react";
import {
  BiBriefcase,
  BiBarChartAlt2,
  BiCheckCircle,
  BiTrophy,
} from "react-icons/bi";

import {
  FaBolt, // Replacing BiLightningCharge
  FaHistory, // Replacing BiClockHistory
  FaTachometerAlt, // Replacing BiSpeedometer
  FaChartLine, // Replacing BiGraphUp
  FaMoneyBill, // Replacing BiCashCoin
  FaMicrochip, // Replacing BiCpu
  FaRocket, // Replacing BiRocketTakeoff
} from "react-icons/fa";
import photo from "../assets/3772680.jpg";
import ph2 from "../assets/3509263.jpg";

const cardsData = [
  {
    id: 1,
    title: "Optimized for Growing E-Commerce",
    text: `Our flexible configurations allow you to scale your eCommerce business effortlessly. No matter the technology, we offer the best solutions within your budget—so you can grow with confidence.`,
    icons: [<FaBolt />, <BiBriefcase />, <FaHistory />],
    imgSrc: ph2,
    imgAlt: "Optimized for Growing E-Commerce",
    bgColor: "bg-blue-600",
    imgWithOverlay: true,
    reverse: false,
  },
  {
    id: 2,
    title: "Resell Your Own Hosting Plans",
    text: `A Dedicated Server is the perfect choice for starting your own hosting business. You can easily set up and host thousands of websites, depending on your plan, allowing you to generate revenue and gain the freedom to build your IT business.
Launch your web hosting business instantly with a dedicated server. Add a control panel to streamline setup, automate operations, and start selling hosting services with ease.`,
    icons: [<FaTachometerAlt />, <FaChartLine />, <BiCheckCircle />],
    bgColor: "bg-green-600",
    wide: true,
  },
  {
    id: 3,
    title: "Deploy Virtual Machines",
    text: `Deploy virtual machines on dedicated servers for various purposes or resell them to your customers. With full virtualization support, you can use software like Proxmox and VMware, while control panels such as SolusVM, Virtualizor, and AutoVM simplify server management. Leverage powerful hardware to deliver exceptional performance and a seamless experience for your customers.`,
    icons: [<FaMicrochip />, <FaMoneyBill />],
    //   <BiArrowsAngleExpand />
    bgColor: "bg-purple-700",
    wide: true,
  },
  {
    id: 4,
    title: "Streaming Solutions",
    text: `Our servers are designed for 24/7 streaming. Whether you're a content creator, running a news channel, or hosting a product launch, our servers offer the reliability and performance you need.`,
    icons: [<BiTrophy />, <FaRocket />, <BiBarChartAlt2 />],
    imgSrc: photo,
    imgAlt: "Technical advantage",
    bgColor: "bg-blue-300",
    imgWithOverlay: true,
    reverse: true,
  },
];

const DedicatedPopularUseScenarios = () => {
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animation on scroll with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add(
          "opacity-0",
          "translate-y-8",
          "transition-all",
          "duration-500",
          "ease-out"
        );
        observer.observe(card);
      }
    });

    // Parallax effect on images
    const onScroll = () => {
      imageRefs.current.forEach((img) => {
        if (!img) return;
        const card = img.closest(".card-wrapper");
        if (!card) return;
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const distance = windowHeight / 2 - cardTop;

        if (distance > -windowHeight && distance < windowHeight) {
          const parallaxValue = distance * 0.05;
          img.style.transform = `translateY(${parallaxValue}px) scale(1.05)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    // CTA button pulse animation
    if (ctaRef.current) {
      const btn = ctaRef.current;
      btn.style.animation = "ctaPulse 2s infinite";

      const onMouseEnter = () => {
        btn.style.animation = "none";
      };
      const onMouseLeave = () => {
        setTimeout(() => {
          btn.style.animation = "ctaPulse 2s infinite";
        }, 500);
      };

      btn.addEventListener("mouseenter", onMouseEnter);
      btn.addEventListener("mouseleave", onMouseLeave);

      // Cleanup
      return () => {
        window.removeEventListener("scroll", onScroll);
        btn.removeEventListener("mouseenter", onMouseEnter);
        btn.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  // Hover icon and title animation handlers
  const handleMouseEnter = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const icons = card.querySelectorAll(".icon-wrapper");
    icons.forEach((icon, i) => {
      setTimeout(() => {
        icon.style.transform = "translateY(-5px) scale(1.1)";
        icon.style.backgroundColor = "#e8fcf1";
        const iconEl = icon.querySelector("svg");
        if (iconEl) iconEl.style.color = "#0fbd91";
      }, i * 100);
    });

    const title = card.querySelector("h3");
    if (title) title.style.color = "#0fbd91";
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const icons = card.querySelectorAll(".icon-wrapper");
    icons.forEach((icon) => {
      icon.style.transform = "";
      icon.style.backgroundColor = "";
      const iconEl = icon.querySelector("svg");
      if (iconEl) iconEl.style.color = "";
    });

    const title = card.querySelector("h3");
    if (title) title.style.color = "";
  };

  return (
    <section className="px-4 md:px-12 py-12 bg-[#000] text-white max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-300">
          Common Use Cases for Servers
        </h2>
        <p className=" mb-10 text-gray-400 text-lg">
          Our servers are versatile and built for multitasking. Whether you're
          hosting an application or handling resource-intensive tasks, they
          deliver the power and performance you need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardsData.map((card, i) => {
            const CardContent = (
              <>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-200 mb-6">{card.text}</p>
                <div className="flex space-x-4">
                  {card.icons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="icon-wrapper p-2 rounded-md bg-white text-gray-600 shadow-md transition-transform duration-300"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </>
            );

            return (
              <div
                key={card.id}
                className={`card-wrapper rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                  card.bgColor
                } ${
                  card.reverse
                    ? "flex flex-col-reverse md:flex-row-reverse"
                    : "flex flex-col md:flex-row"
                }`}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                {card.imgSrc && (
                  <div className="relative w-full md:w-1/2">
                    <img
                      src={card.imgSrc}
                      alt={card.imgAlt}
                      className="w-[300px] h-full object-fit"
                      ref={(el) => (imageRefs.current[i] = el)}
                      onError={(e) =>
                        (e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2VlZWVlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=")
                      }
                    />
                    {card.imgWithOverlay && (
                      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
                    )}
                  </div>
                )}

                <div
                  className={`p-6 md:w-1/2 text-white flex flex-col justify-center`}
                >
                  {CardContent}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#explore-servers"
            ref={ctaRef}
            className="inline-block px-8 py-3 bg-[#8c32ff] text-[#000] rounded-md font-semibold shadow-lg hover:bg-[#8c32ff] transition"
          >
            Explore our dedicated servers
          </a>
        </div>
      </div>

      {/* Keyframes for CTA pulse */}
      <style>{`
        @keyframes ctaPulse {
          0% { box-shadow: 0 0 0 0 rgba(15, 189, 145, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(15, 189, 145, 0); }
          100% { box-shadow: 0 0 0 0 rgba(15, 189, 145, 0); }
        }
      `}</style>
    </section>
  );
};

export default DedicatedPopularUseScenarios;
