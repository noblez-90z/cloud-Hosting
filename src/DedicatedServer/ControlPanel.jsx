import React, { useState, useEffect } from "react";

const panelsData = [
  {
    id: "directadmin",
    name: "DirectAdmin",
    icon: "https://www.directadmin.com/img/logo/symbol_directadmin.svg",
    features: [
      { feature: "1 Account (10 domains)", price: "€450", period: "/mo" },
      { feature: "10 Account (50 domains)", price: "€1190", period: "/mo" },
      {
        feature: (
          <>
            Unlimited accounts
            <br />
            <span className="text-sm text-gray-500">(unlimited domains)</span>
          </>
        ),
        price: "€2380",
        period: "/mo",
      },
    ],
  },
  {
    id: "cpanel",
    name: "cPanel",
    icon: "https://img.icons8.com/windows/96/cpanel.png",
    features: [
      { feature: "1 Account", price: "€1500", period: "/mo" },
      { feature: "100 Account", price: "€4850", period: "/mo" },
    ],
  },
  {
    id: "plesk",
    name: "Plesk",
    icon: "https://img.icons8.com/color/64/plesk.png",
    features: [
      {
        feature: (
          <>
            Plesk web admin
            <span
              className="ml-1 cursor-pointer text-blue-500"
              title="Full administrative access to manage your websites"
            >
              ⓘ
            </span>
          </>
        ),
        price: "€1100",
        period: "/mo",
      },
      {
        feature: (
          <>
            Plesk web pro
            <span
              className="ml-1 cursor-pointer text-blue-500"
              title="Professional tools for developers and agencies"
            >
              ⓘ
            </span>
          </>
        ),
        price: "€1850",
        period: "/mo",
      },
      {
        feature: (
          <>
            Plesk web host
            <span
              className="ml-1 cursor-pointer text-blue-500"
              title="Advanced hosting features for multiple domains"
            >
              ⓘ
            </span>
          </>
        ),
        price: "€3850",
        period: "/mo",
      },
    ],
  },
];

export default function ControlPanels() {
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loadingCompare, setLoadingCompare] = useState(false);

  // Toast logic
  useEffect(() => {
    if (toastMessage) {
      setShowToast(true);
      const timeout = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [toastMessage]);

  const selectPanel = (id) => {
    setSelectedPanel(id);
    setToastMessage(
      `${id.charAt(0).toUpperCase() + id.slice(1)} plan selected!`
    );
  };

  const handleCompare = () => {
    setLoadingCompare(true);
    setTimeout(() => {
      setLoadingCompare(false);
      setToastMessage("Control panel comparison coming soon!");
    }, 1500);
  };

  return (
    <section className="py-12 bg-[#000] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3  text-center">
          Feature-Rich Control Panels
        </h2>
        <p className=" mb-10  text-center text-lg">
          Minimize server management hassles with our intuitive control panels.
          Choose from a wide range of options at checkout for seamless
          administration.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {panelsData.map(({ id, name, icon, features }) => {
            const isSelected = selectedPanel === id;
            return (
              <div
                key={id}
                data-panel={id}
                onClick={() => selectPanel(id)}
                className={`cursor-pointer rounded-lg   text-[#fff]  transition-shadow duration-300 p-6 flex flex-col justify-between 
                  ${
                    isSelected
                      ? "border-[#8c32ff] bg-[#8c32ff] shadow-lg"
                      : "border-2 border-[#ffffff1a] bg-[#171717] hover:shadow-md "
                  }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6 ">
                    <h3 className="text-xl font-semibold text-gray-300">
                      {name}
                    </h3>
                    <img
                      src={icon}
                      alt={name}
                      className="h-12 w-12 object-contain"
                    />
                  </div>

                  <ul className="space-y-4">
                    {features.map(({ feature, price, period }, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center group"
                      >
                        <span
                          className="text-teal-500 font-bold text-lg transform transition-transform duration-200 group-hover:scale-110"
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span className="mx-3 flex-1 text-gray-300">
                          {feature}
                        </span>
                        <span className="font-semibold text-gray-400">
                          {price}
                          <span className="text-gray-400 text-sm ml-1">
                            {period}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    selectPanel(id);
                  }}
                  className={`mt-6 w-full py-3 rounded-md font-semibold transition-colors ${
                    isSelected
                      ? "bg-[#000] border-teal-400 text-[#8c32ff]"
                      : "bg-transparent border border-gray-300 text-gray-300 hover:bg-[#8c32ff] hover:border-[#8c32ff] hover:text-black"
                  }`}
                >
                  {isSelected ? "Selected" : "Select Plan"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleCompare}
            disabled={loadingCompare}
            className="inline-flex items-center px-6 py-3 border border-[#8c32ff] bg-[#8c32ff] rounded-md font-semibold text-[#000] hover:bg-[#000] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingCompare ? (
              <>
                Loading comparison...
                <svg
                  className="ml-2 h-5 w-5 animate-spin text-teal-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </>
            ) : (
              <>
                Compare all control panels <span className="ml-1">→</span>
              </>
            )}
          </button>
        </div>

        {/* Toast */}
        {showToast && (
          <div
            className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg opacity-90 animate-slide-up"
            style={{ animationDuration: "0.3s" }}
          >
            {toastMessage}
          </div>
        )}
      </div>
    </section>
  );
}
