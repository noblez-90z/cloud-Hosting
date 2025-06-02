import { useEffect } from "react";
import { SiRedis } from "react-icons/si";
import { FaServer, FaCloudflare, FaShieldAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <SiRedis className="text-red-500 text-4xl" />,
    title: "OPcache",
    barColor: "bg-red-400",
    description:
      "URLStart uses OPcache to accelerate WordPress by caching PHP code in memory, reducing load times and improving performance—even with heavy plugins and complex themes. This results in faster page delivery, lower CPU usage, and a smoother experience for your visitors.",
  },
  {
    icon: <FaServer className="text-blue-500 text-4xl" />,
    title: "WordPress-Optimized Server",
    barColor: "bg-blue-400",
    description:
      "Our WordPress hosting infrastructure is fine-tuned specifically for WordPress performance. With custom PHP configurations, advanced MySQL optimizations, and server-level caching, your WordPress site receives the perfect environment to deliver exceptional speed and reliability.",
  },
  {
    icon: <FaCloudflare className="text-yellow-500 text-4xl" />,
    title: "CloudFlare CDN + Railgun",
    barColor: "bg-yellow-400",
    description:
      "All EuroHost WordPress hosting plans include CloudFlare's CDN with Railgun acceleration technology. Your content is served from 200+ global data centers, reducing latency and load times for visitors worldwide.",
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-4xl" />,
    title: "Advanced WordPress Security",
    barColor: "bg-green-400",
    description:
      "EuroHost provides comprehensive WordPress security with real-time threat detection, malware scanning, and automated security patching. Our multi-layered security protects your site from vulnerabilities and zero-day exploits.",
  },
  {
    icon: <FaHeadset className="text-purple-500 text-4xl" />,
    title: "WordPress Expert Support",
    barColor: "bg-purple-400",
    description:
      "Our WordPress specialists provide expert guidance to help you maximize your website’s potential. We offer assistance with performance optimization, plugin recommendations, and troubleshooting.",
  },
];

const FeaturesSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".feature-card");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && "IntersectionObserver" in window) {
      items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.transition =
                "opacity 0.6s ease-out, transform 0.6s ease-out";
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      items.forEach((item, index) => {
        item.style.transitionDelay = `${0.1 * (index + 1)}s`;
        observer.observe(item);
      });
    } else {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
    }
  }, []);

  return (
    <section className="relative py-20 md:px-6 px-4 bg-[#000] text-gray-800">
      {/* Background Text */}
      <div className="absolute text-7xl sm:text-9xl font-bold text-gray-100 top-5 left-1/2 transform -translate-x-1/2 select-none pointer-events-none opacity-20">
        FEATURES
      </div>

      {/* Section Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16 relative  text-white">
        WordPress Hosting Advanced Features
      </h2>

      {/* Features List */}
      <div className="grid grid-flow-row gap-6 relative ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-[#1f1f1f]  flex gap-4 pl-3"
            tabIndex="0"
            aria-label={`Feature: ${feature.title}`}
          >
            <div className="flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <div className=" p-6 rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none hover:border-l-[5px] hover:border-[#8c32ff] bg-[#171717] text-white">
              <div
                className={`h-1 w-8 mb-4 ${feature.barColor} transition-all duration-300`}
              ></div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
