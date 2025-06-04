const Hosting = () => {
  return (
    <div className="md:px-6 px-2 bg-[#000] text-white py-6">
      <section className=" py-5">
        <div class="hosting-services__header text-center mt-4 px-2">
          <h2 className="hosting-services__title font-bold text-3xl">
            Web hosting services for all your business needs
          </h2>
          <p class="hosting-services__subtitle text-center mt-4">
            We offer a range of web hosting plans to suit your needs, from
            budget-friendly starters to feature-rich powerhouses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 mt-10 gap-4 py-4 ">
          <div class="hosting-services__grid  rounded-lg border-2 border-[#8c32ff] transition-all duration-300 ease-in-out py-4 px-4  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            {/* WordPress Hosting */}
            <div className="hosting-services__card hosting-services__card--wordpress text-center py-4 px-4">
              <div class="hosting-services__icon">
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/color/100/wordpress.png"
                  alt="wordpress"
                  className="py-3 "
                />
              </div>
              <h3 className="hosting-services__title font-bold text-2xl mb-4 py-4">
                WordPress Hosting
              </h3>
              <p className="hosting-services__text mt-3 py-4">
                Launch and host your WordPress site in just minutes using our
                pre-optimized WordPress servers—no setup hassles, just instant
                readiness.
              </p>
              <div class="hosting-services__price mt-10">
                Starting at{" "}
                <span className="hosting-services__amount  font-bold text-xl px-3 py-1 rounded-full bg-[#8c32ff] text-[#000]">
                  £59.00
                </span>
                <span class="hosting-services__period">/mo</span>
              </div>
              <button className=" mt-8 w-[60%]  py-2 bg-[#8c32ff] text-[#000] font-semibold">
                <a
                  href="#"
                  class="hosting-services__btn hosting-services__btn--primary"
                >
                  Get Started
                </a>
              </button>
            </div>
          </div>
          {/* Cloud Hosting - Popular */}
          <div class="hosting-services__card hosting-services__card--cloud  rounded-lg text-center py-4 px-4 bg-[#8c32ff] border-2 border-[#8c32ff] relative shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3] mt-10 md:mt-0">
            <div class="hosting-services__popular-tag font-semibold mx-auto  text-xl mb-4 border border-[#8c32ff] rounded-full w-40 px-4 py-1 text-center bg-[#000] text-[#8c32ff] absolute top-[-20px] left-1/2 transform -translate-x-1/2">
              Most Popular
            </div>
            <div class="hosting-services__icon">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/external-vectorslab-flat-vectorslab/100/external-Cloud-Hosting-cloud-and-web-vectorslab-flat-vectorslab.png"
                alt="external-Cloud-Hosting-cloud-and-web-vectorslab-flat-vectorslab"
                className="py-3"
              />
            </div>
            <h3 class="hosting-services__title font-bold text-2xl mb-4 py-2">
              Cloud Hosting
            </h3>
            <p class="hosting-services__text mt-3">
              Built for high-traffic websites with advanced security—delivering
              performance beyond traditional shared hosting.
            </p>
            <div class="hosting-services__price mt-10">
              Starting at{" "}
              <span className="hosting-services__amount font-bold text-xl px-3 py-1 rounded-full bg-[#000] text-[#8c32ff]">
                £599.00
              </span>
              <span class="hosting-services__period">/mo</span>
            </div>
            <button className=" mt-10 w-[60%]  py-2 bg-[#000] text-[#8c32ff] font-semibold">
              <a
                href="#"
                class="hosting-services__btn hosting-services__btn--primary"
              >
                Get Started
              </a>
            </button>
          </div>
          <div class="hosting-services__card hosting-services__card--vps  text-center py-4 px-4 rounded-lg border-2 border-[#8c32ff] shadow-md transition-all duration-300 ease-in-out  hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <div class="hosting-services__icon">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/stickers/100/reseller.png"
                alt="reseller"
                className="py-3"
              />
            </div>
            <h3 class="hosting-services__title font-bold text-2xl mb-4 py-2">
              Reseller Hosting
            </h3>
            <p class="hosting-services__text mt-3">
              Launch your own hosting brand with our fully white-labeled
              reseller platform. Enjoy complete access, premium features, and
              the freedom to sell under your own name.
            </p>
            <div class="hosting-services__price mt-10">
              Starting at{" "}
              <span className="hosting-services__amount font-bold text-xl px-3 py-1 rounded-full bg-[#8c32ff] text-[#000]">
                £429.00
              </span>
              <span class="hosting-services__period">/mo</span>
            </div>
            <button className=" mt-10 w-[60%]  py-2 bg-[#8c32ff] text-[#000] font-semibold">
              <a
                href="#"
                class="hosting-services__btn hosting-services__btn--primary"
              >
                Get Started
              </a>
            </button>
          </div>
          {/* Dedicated Server  */}
          <div class="hosting-services__card hosting-services__card--dedicated  shadow-md text-center  border-2 border-[#8c32ff]  transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <div class="hosting-services__icon">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-linux-a-family-of-open-source-unix-like-operating-systems-based-on-the-linux-kernel-logo-color-tal-revivo.png"
                alt="external-linux-a-family-of-open-source-unix-like-operating-systems-based-on-the-linux-kernel-logo-color-tal-revivo"
                className="py-3"
              />
            </div>
            <h3 className="hosting-services__title font-bold text-2xl mb-4">
              Affordable Linux VPS
            </h3>
            <p class="hosting-services__text mt-3">
              Optimized for high performance, our cloud-based Linux VPS delivers
              exceptional speed, reliability, and lightweight efficiency—perfect
              for demanding workloads.
            </p>
            <div class="hosting-services__price mt-10">
              Starting at{" "}
              <span class="hosting-services__amount font-bold text-xl px-3 py-1 rounded-full bg-[#8c32ff] text-[#000]">
                £5,999.00
              </span>
              <span class="hosting-services__period">/mo</span>
            </div>
            <button className=" mt-10 w-[60%]  py-2 bg-[#8c32ff] text-[#000] font-semibold">
              <a
                href="#"
                class="hosting-services__btn hosting-services__btn--primary"
              >
                Get Started
              </a>
            </button>
          </div>
          {/* WooCommerce Hosting */}
          <div class="hosting-services__card hosting-services__card--woocommerce shadow-md text-center  border-2 border-[#8c32ff]  transition-all duration-300 ease-in-out py-4 px-4 rounded-lg hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <div class="hosting-services__icon">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/pulsar-color/100/add-to-loud.png"
                alt="add-to-loud"
                className="py-3"
              />
            </div>
            <h3 class="hosting-services__title font-bold text-2xl mb-4">
              Cloud KVM VPS
            </h3>
            <p class="hosting-services__text mt-3">
              Cloud KVM VPS hosting built for speed, security, and full
              virtualization—giving you dedicated resources and total control in
              a scalable cloud environment.
            </p>
            <div class="hosting-services__price mt-10">
              Starting at{" "}
              <span class="hosting-services__amount font-bold text-xl px-3 py-1 rounded-full bg-[#8c32ff] text-[#000]">
                £199.00
              </span>
              <span class="hosting-services__period">/mo</span>
            </div>
            <button className=" mt-10 w-[60%]  py-2 bg-[#8c32ff] text-[#000] font-semibold">
              <a
                href="#"
                class="hosting-services__btn hosting-services__btn--primary"
              >
                Get Started
              </a>
            </button>
          </div>
          {/* Magento  */}
          <div class="hosting-services__card hosting-services__card--magento  text-center py-4 px-4 rounded-lg shadow-md border-2 border-[#8c32ff] transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:border-[#4f0cb3]">
            <div class="hosting-services__icon">
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/fluency/100/windows-10.png"
                alt="windows-10"
                className="py-3"
              />
            </div>
            <h3 class="hosting-services__title font-bold text-2xl mb-4">
              Cloud Windows VPS
            </h3>
            <p class="hosting-services__text mt-3">
              Experience unmatched performance with full administrative control.
              Optimized for heavy workloads, it's built to deliver power and
              reliability when you need it most.
            </p>
            <div class="hosting-services__price  mt-10">
              Starting at{" "}
              <span class="hosting-services__amount font-bold text-xl px-3 py-1 rounded-full bg-[#8c32ff] text-[#000]">
                £799.00
              </span>
              <span class="hosting-services__period">/mo</span>
            </div>
            <button className=" mt-10 w-[60%]  py-2 bg-[#8c32ff] text-[#000] font-semibold">
              <a
                href="#"
                class="hosting-services__btn hosting-services__btn--primary"
              >
                Get Started
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hosting;
