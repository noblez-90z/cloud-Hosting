import { useState } from "react";
import customer from "../assets/customer-support.webp";
import iconCheck from "../assets/icon-check.svg";

const plans = {
  monthly: [
    {
      name: "Starter",
      description: "For those 'Getting Started'",
      save: "Save 75%",
      price: "$3.99",
      regular: "$13.99",
      features: [
        "1 Website",
        "Free Domain name",
        "Unlimited Free Domain",
        "Fast SSD Storage",
        "10 Email & Domain",
        "WP Installer",
        "Free SSL Certificate",
        "Free Migration",
        "WP Website Builder",
      ],
    },
    {
      name: "Standard",
      description: "For bloggers & websites with avg. traffic",
      save: "Save 75%",
      price: "$3.99",
      regular: "$13.99",
      features: [
        "1 Website",
        "Free Domain name",
        "Unlimited Free Domain",
        "Fast SSD Storage",
        "10 Email & Domain",
        "WP Installer",
        "Free SSL Certificate",
        "Free Migration",
        "WP Website Builder",
      ],
    },
    {
      name: "Professional",
      description: "For growing business with scaling needs",
      save: "Save 80%",
      price: "$7.99",
      regular: "$29.99",
      features: [
        "1 Website",
        "Free Domain name",
        "Unlimited Free Domain",
        "Fast SSD Storage",
        "10 Email & Domain",
        "WP Installer",
        "Free SSL Certificate",
        "Free Migration",
        "WP Website Builder",
      ],
    },
  ],
  yearly: [
    {
      name: "Personal",
      description: "Available for single person",
      save: "Save 75%",
      price: "$3.99",
      regular: "$13.99",
      features: [
        "1 Website",
        "Unlimited Traffic",
        "Unlimited Free Domain",
        "Fast SSD Storage",
        "10 Email & Domain",
        "WP Installer",
        "Free SSL Certificate",
        "Free Migration",
        "WP Website Builder",
      ],
    },
    {
      name: "Business",
      description: "Available for single person",
      save: "Save 80%",
      price: "$7.99",
      regular: "$29.99",
      features: [
        "Unlimited Website",
        "Unlimited Traffic",
        "Unlimited Free Domain",
        "Fast SSD Storage",
        "Unlimited Email & Domain",
        "WP Installer",
        "Free SSL Certificate",
        "Free Migration",
        "WP Website Builder",
      ],
    },
    {
      name: "Business",
      description: "Available for single person",
      save: "Save 80%",
      price: "$7.99",
      regular: "$29.99",
      features: [
        "Unlimited Website",
        "Unlimited Traffic",
        "Unlimited Free Domain",
        "Fast SSD Storage",
        "Unlimited Email & Domain",
        "WP Installer",
        "Free SSL Certificate",
        "Free Migration",
        "WP Website Builder",
      ],
    },
  ],
};

export default function HostingPricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className=" px-4 md:px-8 py-12 bg-[#000] text-white">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          High-Performance Web Hosting.
        </h2>
        <div className="text-lg text-white font-medium mt-6 mb-4">
          Billing Cycle
        </div>
        <div className="flex justify-center gap-4 mb-12 border-2 w-fit mx-auto rounded-full p-1">
          <button
            className={`px-4 py-2 rounded-full  ${
              billing === "monthly"
                ? "bg-[#8c32ff] text-black font-bold"
                : "bg-[#000] text-white font-semibold"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full  ${
              billing === "yearly"
                ? "bg-[#8c32ff] text-black font-bold"
                : "bg-[#000] text-white font-semibold"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans[billing].map((plan, index) => (
          <div
            key={index}
            className="bg-[#171717] border-2 border-[#ffffff1a]  shadow-lg rounded-3xl p-6 flex flex-col justify-between"
          >
            <div className="text-center mb-6">
              <div className="text-2xl font-bold">{plan.name}</div>
              <div className="text-gray-300 mt-1">{plan.description}</div>
              <div className="text-blue-300 font-medium mt-2 border-dotted border-2 bg-[#555555] border-[#171717] py-3 my-3">
                {plan.save}
              </div>
              <div className="text-3xl font-bold mt-2">
                {plan.price}
                <sub className="text-sm">/mo*</sub>
              </div>
              <div className="text-gray-300 mt-1">
                Regular price{" "}
                <del className="font-medium text-gray-100">{plan.regular}</del>
              </div>
            </div>
            <a
              href="#"
              className="w-full  py-2 px-4  flex justify-between items-center border-2 border-[#8c32ff]   font-semibold text-xl text-[#fff] bg-[#000] hover:bg-[#8c32ff] hover:text-[#fff] tranistion 0s ease-in-out"
            >
              Start Free Trial
              <span className="ml-2">&rarr;</span>
            </a>
            <h6 className="text-lg font-semibold mt-4 mb-2">Features</h6>
            <ul className="text-gray-300 space-y-1">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="row mt-20">
        <div className="col-12  bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] px-4 py-2 rounded-xl">
          <div className="feature-block block-one w-100 ">
            <div className="row md:flex justify-between items-center gap-3">
              <div className="col-lg-6 flex-1">
                <h3 className="color-white font-bold text-4xl py-4">
                  We Listen, We Care, We Solve!{" "}
                </h3>
                <div className="row py-4">
                  <div className="col-xxl-10 py-4">
                    <p className="text-[24px] font-semibold text-white leading-tight">
                      Any questions or topics you'd like to discuss? Feel free
                      to share your thoughts, and let's engage in a
                      conversation. I'm here to help and chat with you.
                    </p>
                  </div>
                </div>
                <ul className="style-none list-item font-semibold text-[20px]">
                  <li className="py-3 flex gap-3">
                    <img src={iconCheck} alt="" />
                    Round-the-Clock Assistance
                  </li>
                  <li className="py-3 flex gap-3">
                    <img src={iconCheck} alt="" />
                    Prompt & Friendly Response
                  </li>
                  <li className="py-3 flex gap-3">
                    <img src={iconCheck} alt="" />
                    99% User Satisfaction
                  </li>
                  <li className="py-3 flex gap-3">
                    <img src={iconCheck} alt="" />
                    Expert Technical Handling
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 flex-1 flex   justify-center ">
                {" "}
                <img src={customer} alt="" className=" w-[300px] " />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
