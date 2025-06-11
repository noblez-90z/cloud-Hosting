import { li } from "framer-motion/client";

const Devfooter = () => {
  const list = [
    {
      tittle: "product",
      items: ["Ai site builder", "libraries", "figma library", "pricing"],
    },
    {
      tittle: "Company",
      items: ["About", "careers", "Contact us", "how we work"],
    },
    {
      tittle: "resources",
      items: ["help center", "tutorials", "community", "api documentation"],
    },
    {
      tittle: "support",
      items: ["support center", "faqs", " feedback", "troubling"],
    },
    {
      tittle: "solution",
      items: ["Ai Developer", "integrations", "use cases", "building website"],
    },
    {
      tittle: "Extensions",
      items: ["intergrations", "mobiles apps", " webinar", "blog"],
    },
  ];
  return (
    <div className="px-3 md:px-6 py-6 bg-[#000] text-white">
      <div className="text-center  py-6 px-3">
        <h2 className="font-bold text-2xl py-2 capitalize">
          innovative techiques for web Development
        </h2>
        <p>
          discover the groundbreaking methods that are transforming web
          development. making it faster,easier,and more intuitive than before
        </p>
        <button className="py-2 px-3 my-5 border">get started</button>
      </div>
      <div className="">
        <footer className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
          <div className="  ">
            <div className="">
              <h2>logo</h2>
              <p className="font-light ">
                discover the groundbreaking methods that are transforming web
                development. making it faster,easier,and more intuitive than
                before
              </p>
              <div className="">
                <input type="text" className="py-2 bg-[#171717]" />
                <button className="border py-2 px-3">subscribe</button>
              </div>
            </div>
          </div>
          <div className=" ">
            <h2 className="font-bold text-2xl py-4">
              change your techiques for web Development
            </h2>
            <nav>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {list.map((list) => (
                  <div className="list-none ">
                    <h2 className="text-lg font-semibold capitalize py-2">
                      {list.tittle}
                    </h2>
                    <li>
                      {list.items.map((item) => (
                        <div className="">{item}</div>
                      ))}
                    </li>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Devfooter;
