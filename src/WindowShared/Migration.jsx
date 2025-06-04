import { useEffect, useRef } from "react";
import wordpress from "../assets/10433757.jpg";

export default function FreeWebsiteMigration() {
  const imageContainerRef = useRef(null);
  const floatingRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const floatingElements = floatingRefs.current;

    if (imageContainer) {
      const handleMouseMove = (e) => {
        if (window.innerWidth > 992) {
          const rect = imageContainer.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xPercent = x / rect.width - 0.5;
          const yPercent = y / rect.height - 0.5;

          imageContainer.style.transform = `perspective(1000px) rotateY(${
            xPercent * 8
          }deg) rotateX(${-yPercent * 8}deg)`;

          floatingElements.forEach((el) => {
            const depth = el?.dataset?.depth
              ? parseFloat(el.dataset.depth)
              : 0.5;
            if (el) {
              el.style.transform = `
                translate(${-xPercent * 30 * depth}px, ${
                -yPercent * 30 * depth
              }px)
                rotate(${xPercent * 5}deg)
              `;
            }
          });
        }
      };

      const handleMouseLeave = () => {
        imageContainer.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg)";
        floatingElements.forEach((el) => {
          if (el) el.style.transform = "";
        });
      };

      imageContainer.addEventListener("mousemove", handleMouseMove);
      imageContainer.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        if (imageContainer) {
          imageContainer.removeEventListener("mousemove", handleMouseMove);
          imageContainer.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }
  }, []);

  useEffect(() => {
    const btn = buttonRef.current;
    if (btn) {
      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const posX = (x / rect.width) * 100;

        btn.style.background = `
          linear-gradient(90deg, rgb(15, 189, 145) 0%, rgb(15, 189, 145) ${
            posX - 10
          }%,
          rgb(57, 239, 192) ${posX}%, rgb(15, 189, 145) ${
          posX + 10
        }%, rgb(15, 189, 145) 100%)
        `;
      };

      const handleMouseLeave = () => {
        btn.style.background = "rgb(15, 189, 145)";
      };

      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <section className="relative py-16 px-4 md:px-12 bg-[#000] overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image & floating elements */}
        <div className="relative" ref={imageContainerRef}>
          <div className="relative z-10">
            <img
              src={wordpress}
              alt="WordPress migration specialist transferring a site"
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
            {/* Floating images */}
            {/* <div
              ref={(el) => (floatingRefs.current[0] = el)}
              data-depth="0.6"
              className="absolute top-0 left-0 w-20"
            >
              <img
                src="/images/wordpress-site-thumbnail.png"
                alt=""
                aria-hidden="true"
              />
            </div>
            <div
              ref={(el) => (floatingRefs.current[1] = el)}
              data-depth="0.4"
              className="absolute bottom-0 right-0 w-12"
            >
              <img src="/images/wordpress-icon.png" alt="" aria-hidden="true" />
            </div> */}
          </div>
          {/* Optional backdrop */}
          <div className="absolute inset-0 bg-cyan-100 opacity-10 z-0 rounded-xl"></div>
        </div>

        {/* Text content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-300">
            Free Website Migration
          </h2>
          <p className="text-gray-400">
            Migrating your website to a new host can be stressful and complex.
            That’s why we offer a completely free migration service handled by
            our expert specialists. We’ll transfer your entire site—including
            files, databases, themes, and configurations—ensuring everything
            works seamlessly on our high-performance hosting platform. Your
            website will retain its exact appearance and functionality, but with
            enhanced speed, stability, and reliability.
          </p>
          <div>
            <a
              href="#migrate"
              ref={buttonRef}
              className="inline-block px-6 py-3 text-white rounded-lg font-semibold transition duration-300 bg-[#8c32ff]"
            >
              Request for Migration <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Optional decoration (dots/circles) */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-cyan-200 rounded-full opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-200 rounded-full opacity-20 -z-10"></div>
    </section>
  );
}
