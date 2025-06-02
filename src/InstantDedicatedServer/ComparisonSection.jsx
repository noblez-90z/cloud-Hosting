const ComparisonSection = () => {
  return (
    <section className="py-16 bg-[#000]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          Why Our Instant Servers Beat The Competition
        </h2>
        <p className="text-gray-400 mb-8">
          See how EuroHost Instant Dedicated Servers compare to traditional
          deployment options
        </p>

        <div className="overflow-x-auto rounded-2xl bg-[#171717]">
          <table className="min-w-full table-auto  text-left ">
            <thead className="bg-[#8c32ff] ">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold text-center">
                  <div className="flex items-center justify-center mb-1">
                    <img
                      src="/images/logo.png"
                      alt="EuroHost Logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  EuroHost Instant
                </th>
                <th className="p-4 font-semibold text-center">
                  <div className="flex items-center justify-center mb-1">
                    <img
                      src="/images/competitor1.png"
                      alt="Traditional Dedicated"
                      className="w-10 h-10 object-contain"
                      onError={(e) =>
                        (e.currentTarget.src = "/images/fallback1.svg")
                      }
                    />
                  </div>
                  Traditional Dedicated
                </th>
                <th className="p-4 font-semibold text-center">
                  <div className="flex items-center justify-center mb-1">
                    <img
                      src="/images/competitor2.png"
                      alt="Cloud VPS"
                      className="w-10 h-10 object-contain"
                      onError={(e) =>
                        (e.currentTarget.src = "/images/fallback2.svg")
                      }
                    />
                  </div>
                  Cloud VPS
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Deployment Time",
                  "5 minutes",
                  "24-48 hours",
                  "15-60 minutes",
                ],
                [
                  "Hardware Dedication",
                  "Fully dedicated",
                  "Fully dedicated",
                  "Shared resources",
                ],
                ["Performance", "Maximum", "Maximum", "Variable"],
                ["Storage Type", "NVMe SSD", "SSD/HDD", "SSD"],
                ["Root Access", "Yes", "Yes", "Yes"],
                ["Scaling Time", "Minutes", "Hours/Days", "Minutes"],
                ["Starting Price", "₹14.99", "₹19.11", "₹9.99"],
              ].map(([feature, euro, traditional, cloud], i) => (
                <tr
                  key={feature}
                  className={`border-t ${
                    i === 6 ? "bg-gray-600 font-semibold" : ""
                  }`}
                >
                  <td className="p-4">{feature}</td>
                  <td
                    className={`p-4 text-center ${
                      i !== 6 ? "text-emerald-400 font-semibold" : ""
                    }`}
                  >
                    {euro}
                  </td>
                  <td className="p-4 text-center">{traditional}</td>
                  <td className="p-4 text-center">{cloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <p className="text-lg mb-4">
            Get the perfect balance of dedicated hardware performance and
            cloud-like rapid deployment
          </p>
          <a
            href="#plan"
            className="inline-block px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl font-semibold transition"
          >
            Deploy Your Instant Server Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
