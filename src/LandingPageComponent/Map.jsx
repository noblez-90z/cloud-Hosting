import React, { useState, useEffect } from "react";
import worldMap from "../assets/worldMap.png"; // adjust path as needed

const markersData = [
  {
    location: "usa",
    label: "USA",
    details: "USA: 4 data centers with 99.999% uptime guarantee",
    tooltip: {
      title: "United States",
      lines: [
        "Multiple tier 4 data centers",
        "Latency: 15-45ms",
        "Up to 40 Gbps connectivity",
      ],
    },
  },
  {
    location: "canada",
    label: "CANADA",
    details: "Canada: Eco-friendly centers with 100% renewable energy",
    tooltip: {
      title: "Canada",
      lines: [
        "Green data centers",
        "Latency: 20-50ms",
        "Up to 20 Gbps connectivity",
      ],
    },
  },
  {
    location: "europe",
    label: "EUROPE",
    details: "Europe: GDPR compliant centers across several countries",
    tooltip: {
      title: "Europe",
      lines: [
        "GDPR compliant centers",
        "Latency: 10-40ms",
        "Up to 30 Gbps connectivity",
      ],
    },
  },
  {
    location: "india",
    label: "INDIA",
    details: "India: Strategic edge locations for the Asian market",
    tooltip: {
      title: "India",
      lines: [
        "Strategic edge locations",
        "Latency: 30-60ms",
        "Up to 25 Gbps connectivity",
      ],
    },
  },
  {
    location: "singapore",
    label: "SINGAPORE",
    details: "Singapore: Premium connectivity hub for Southeast Asia",
    tooltip: {
      title: "Singapore",
      lines: [
        "Premium connectivity hub",
        "Latency: 20-45ms",
        "Up to 35 Gbps connectivity",
      ],
    },
  },
  {
    location: "australia",
    label: "AUSTRALIA",
    details: "Australia: Redundant data centers with oceanic fiber connections",
    tooltip: {
      title: "Australia",
      lines: [
        "Redundant data centers",
        "Latency: 40-70ms",
        "Up to 20 Gbps connectivity",
      ],
    },
  },
];

export default function DataCenterLocations() {
  const defaultMessage =
    "Hover over any location to see details about our data centers.";
  const [description, setDescription] = useState(defaultMessage);
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHighlighted(markersData[index].location);
      setDescription(markersData[index].details);
      index = (index + 1) % markersData.length;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-gray-50 bg-[#171717]">
      <div className="max-w-8xl  px-4 bg-[#171717] text-white ">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Global Data Center Locations
        </h2>

        <div className="relative w-full max-w-5xl ">
          <img src={worldMap} alt="World Map" className="w-full h-auto" />

          {markersData.map((marker) => (
            <div
              key={marker.location}
              onMouseEnter={() => {
                setDescription(marker.details);
                setHighlighted(marker.location);
              }}
              onMouseLeave={() => {
                setDescription(defaultMessage);
                setHighlighted(null);
              }}
              className={`absolute group cursor-pointer transition-all duration-300 ${
                marker.location === highlighted ? "z-10 scale-110" : ""
              }`}
              // You can replace with specific positioning styles below
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 90}%`,
              }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full "></div>
              <div className="w-px h-6 bg-green-500 "></div>
              <div className="text-xs text-white bg-green-600 px-2 py-1 rounded-full mt-1">
                {marker.label}
              </div>

              <div className="absolute top-full mt-2 bg-white shadow-md p-3 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                <h4 className="font-semibold mb-1">{marker.tooltip.title}</h4>
                {marker.tooltip.lines.map((line, i) => (
                  <p key={i} className="text-sm text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10  shadow p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-white">
            Our Global Infrastructure
          </h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex justify-center gap-8">
            <Stat number="6" label="Regions" />
            <Stat number="18" label="Data Centers" />
            <Stat number="99.99%" label="Uptime" />
          </div>
        </div>
      </div>
    </section>
  );
}

const Stat = ({ number, label }) => (
  <div className="text-center">
    <span className="block text-2xl font-bold">{number}</span>
    <span className="text-gray-600">{label}</span>
  </div>
);
