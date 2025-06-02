import React, { useState } from "react";

import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

const faqData = [
  {
    question: "What is Shared Web hosting?",
    answer:
      "In Shared Web Hosting, multiple clients are hosted on a single server i.e. the clients share the server's resources. This helps reduce the cost, since the cost of the server and its resources are spread over all the clients/packages hosted on the server. Shared Hosting is perfect for personal websites, small and mid-sized businesses that do not require all the resources of a server.",
  },
  {
    question: "Can I host multiple Web sites within one Shared Hosting plan?",
    answer:
      "Yes! Our Pro and Business shared hosting plans allow you to host more than one Website, by adding secondary domains through your hosting control panel i.e. cPanel.",
  },
  {
    question: "Is there a Money Back Guarantee?",
    answer: "Yes, we offer a 100% Risk Free, 30 day Money Back Guarantee.",
  },
  {
    question: "Is Email hosting included in my package?",
    answer: "Yes, all our Hosting packages come with Unlimited Email Hosting.",
  },
  {
    question: "Can I upgrade to a higher plan?",
    answer:
      "Yes, you can easily upgrade to one of our higher plans at any time.",
  },
  {
    question: "Is my data safe? Do you take backups?",
    answer: "Yes, your data is 100% secure and is backed-up every 5 days.",
  },
  {
    question: "Do you offer SSH access?",
    answer:
      "Yes, we provide SSH access to your domain. Because this is a shared environment, you will not get root access. However, you will be able to achieve most of your requirements by having the rights to access only the files relevant to your domain.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 bg-[#000] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="  rounded-lg shadow-sm bg-[#171717] hover:border hover:border-[#4f0cb3]"
          >
            <button
              className="flex justify-between items-center w-full px-5 py-4 text-left  font-medium text-lg focus:outline-none bg-[#171717] text-white  transition duration-300 ease-in-out rounded-lg"
              onClick={() => toggle(index)}
            >
              <span className="text-white">{item.question}</span>
              <span className="ml-4">
                {activeIndex === index ? (
                  <img src={minus} alt="" className="w-8" />
                ) : (
                  <img src={plus} alt="" className="w-8" />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-5 pb-4 text-gray-300 text-base leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
