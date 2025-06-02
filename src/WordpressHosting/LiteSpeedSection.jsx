import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const cachingData = [
  { label: "LSCache", value: 2198.45 },
  { label: "WP Rocket", value: 1559.09 },
  { label: "W3 Total Cache", value: 1071.92 },
  { label: "WP Fastest Cache", value: 419.68 },
  { label: "WP Super Cache", value: 92.82 },
  { label: "WP Simple Cache", value: 182.16 },
  { label: "No Cache", value: 3.52 },
];

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-[#171717] text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:outline focus-within:outline-green-300"
  >
    <div className="text-green-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default function LiteSpeedSection() {
  const graphRef = useRef();
  const inView = useInView(graphRef, { once: true });
  const maxValue = 2500;

  return (
    <section className="relative py-16 px-4 bg-[#1f1f1f] text-white">
      <div className="absolute text-7xl sm:text-9xl font-bold text-gray-100 top-4 left-1/2 transform -translate-x-1/2 select-none pointer-events-none opacity-20">
        LiteSpeed
      </div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold">LiteSpeed Web Server + LSCache</h2>
        <p className="text-[#8c32ff] text-lg mt-2">
          Supercharge Your WordPress
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <div className="md:w-1/2 w-full">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
              <div className="flex gap-1">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="text-sm font-medium">PageSpeed Insights</div>
              <div></div>
            </div>
            <img
              src="/images/litespeed-pagespeed-results.jpg"
              alt="LiteSpeed PageSpeed Test Results"
              className="w-full"
            />
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <p className="text-gray-300">
            At EuroHost, we've integrated LiteSpeed Web Server and LSCache
            technology into our WordPress hosting platform, delivering unmatched
            performance. LSCache is a{" "}
            <span className="text-[#8c32ff] font-semibold">
              server-level caching solution
            </span>{" "}
            designed for high traffic loads and visitor spikes. It works at the
            server level for dramatically faster page loads and improved user
            experience. With our optimized LiteSpeed configuration, your site
            achieves exceptional PageSpeed scores.
          </p>
        </div>
      </div>

      <div className="mb-16" ref={graphRef}>
        <h3 className="text-xl font-semibold text-center mb-6">
          WordPress Caching Comparison: Requests Handled Per Second
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
          {cachingData.map((item, i) => (
            <div key={item.label} className="flex flex-col">
              <span className="text-sm font-medium mb-1">{item.label}</span>
              <div className="relative h-4 bg-gray-200 rounded-full">
                <motion.div
                  className={`absolute top-0 left-0 h-4 rounded-full bg-[#8c32ff]`}
                  style={{
                    width: inView ? `${(item.value / maxValue) * 100}%` : "0%",
                    transition: "width 1.2s ease-out",
                  }}
                ></motion.div>
              </div>
              <span className="text-xs mt-1 text-right text-gray-500">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          delay={0.1}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#8c32ff"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title="Superior Performance for Dynamic Content"
          description="EuroHost's LiteSpeed implementation delivers PHP processing significantly faster than PHP-FPM, 4-6x faster static file serving than Apache, and dynamic content caching up to 100x faster with LSCache."
        />
        <FeatureCard
          delay={0.3}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#8c32ff"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          }
          title="Effortlessly Handle Traffic Spikes"
          description="LiteSpeed-powered WordPress hosting uses an event-driven architecture like Nginx but with better compatibility. Your site remains responsive even with hundreds of concurrent users."
        />
        <FeatureCard
          delay={0.5}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#8c32ff"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
            </svg>
          }
          title="Maximize ROI with Lower Resource Requirements"
          description="LiteSpeed's efficiency reduces server resource needs while boosting performance. This means better value for your hosting, improved SEO, and higher conversion rates."
        />
      </div>
    </section>
  );
}
