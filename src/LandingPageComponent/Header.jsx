import { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";

import minus from "../assets/Minus.svg";
import menu from "../assets/menu.svg";
import cancelmenu from "../assets/CancelMenu.svg";

import plus from "../assets/plus.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [domain, setDomain] = useState(false);
  const handleMouseEnterDomain = () => {
    setDomain(true);
  };
  const [domainOpen, setDomainOpen] = useState(false);
  const handleDomainOpen = () => {
    setDomainOpen(!domainOpen);
  };
  const [Hosting, setHosting] = useState(false);
  const handleMouseEnterHosting = () => {
    setHosting(true);
  };
  const [HostingOpen, setHostingOpen] = useState(false);
  const handleHostingOpen = () => {
    setHostingOpen(!HostingOpen);
  };
  const [Email, setEmail] = useState(false);
  const handleMouseEnterEmail = () => {
    setEmail(true);
  };
  const [EmailOpen, setEmailOpen] = useState(false);
  const handleEmailOpen = () => {
    setEmailOpen(!EmailOpen);
  };
  const [Security, setSecurity] = useState(false);
  const [SecurityOpen, setSecurityOpen] = useState(false);
  const handleSecurityOpen = () => {
    setSecurityOpen(!SecurityOpen);
  };
  const handleMouseEnterSecurity = () => {
    setSecurity(true);
  };
  const [OpenMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!OpenMenu);
  };

  return (
    <div className=" bg-black text-[#fff] md:h-20 w-full flex items-center justify-between space-x-10 gap-6 fixed top-0  z-10 px-4">
      <div className=" h-20 w-1/4  flex items-center justify-center">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className=" h-14 md:w-full flex">
        <div className="hidden md:flex w-full justify-between items-center h-14 relative ">
          <nav>
            <div className="flex list-none space-x-6 gap-6 items-center  ">
              <li
                onMouseEnter={handleMouseEnterDomain}
                onMouseLeave={() => setDomain(false)}
                className="cursor-pointer relative font-semibold text-xl h-14 md:flex justify-center items-center"
              >
                Domain
                {domain && (
                  <nav
                    onMouseEnter={handleMouseEnterDomain}
                    onMouseLeave={() => setDomain(false)}
                  >
                    <div className="bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] absolute top-14 left-0 w-[800px]   rounded-lg p-4 shadow-lg z-10 md:flex space-x-6 justify-between px-6">
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Register
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Register Domain
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Bulk Domain Registration
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          <Link to="/devHomepage">New Domain Extensions</Link>
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Sunrise Domains
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Transfer
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Transfer Domain
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Bulk Domain Transfer
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          IDN Domain Registration
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Add-ons
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Free with every domain{" "}
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          {" "}
                          Name suggestion tool
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Whois lookup
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Premium Domains
                        </li>
                      </div>
                    </div>
                  </nav>
                )}
              </li>
              <li
                onMouseEnter={handleMouseEnterHosting}
                onMouseLeave={() => setHosting(false)}
                className="cursor-pointer font-semibold text-xl h-14 flex justify-center items-center"
              >
                Hosting
                {Hosting && (
                  <nav>
                    <div className="bg-[#171717]  border-[#ffffff1a] text-[#fff] absolute top-14 left-0  w-[800px] border-2 rounded-lg p-4 shadow-lg z-10 flex space-x-6 justify-between px-6">
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Shared Hosting
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Linux Shared Hosting
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          <Link to="/windowShared">Window Shared Hosting</Link>
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          <Link to="/wordPressHosting">WordPress Hosting</Link>
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Reseller Hosting
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Linux Reseller Hosting
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Window Reseller Hosting
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Cloud Hosting
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Servers
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          VPS Server{" "}
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          {" "}
                          <Link to="/instantDedicatedServer">
                            Linux Dedicated Server (Instant server)
                          </Link>
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          <Link to="/dedicatedServer">
                            Window Dedicated Server
                          </Link>
                        </li>
                      </div>
                    </div>
                  </nav>
                )}
              </li>
              <li
                onMouseEnter={handleMouseEnterEmail}
                onMouseLeave={() => setEmail(false)}
                className="cursor-pointer font-semibold text-xl h-14 flex justify-center items-center"
              >
                Email{" "}
                {Email && (
                  <div className="bg-[#171717] border-3 border-[#ffffff1a] text-[#fff] absolute top-14 left-30  w-fit border-2 rounded-lg p-4 shadow-lg z-10 flex space-x-6 justify-between px-6">
                    <nav>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Bussiness Email
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Titan Business Email
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Enterprises Email
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Google Workspace
                      </li>
                    </nav>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={handleMouseEnterSecurity}
                onMouseLeave={() => setSecurity(false)}
                className="cursor-pointer font-semibold text-xl h-14 flex justify-center items-center"
              >
                {" "}
                Security
                {Security && (
                  <div className="bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] absolute top-14 left-30  w-fit  rounded-lg p-4 shadow-lg z-10 flex space-x-6 justify-between px-6">
                    <nav>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        SSL Certificate
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Sitelock Malware
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        CodeGuard Backup
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Acronis Cyber Backup
                      </li>
                    </nav>
                  </div>
                )}
              </li>
              <li className="hover:text-[#8a42ff] hover:underline font-semibold cursor-pointer  text-xl">
                About us
              </li>
            </div>
          </nav>
        </div>
        <div className="flex space-x-8 gap-3">
          <button className="flex space-x-2 items-center">
            <img src={user} alt="" />
            <span className="font-semibold text-xl hover:underline">Login</span>
          </button>
          <button className="hidden md:block border-2 border-[#8c32ff] rounded-xl py-1 px-4 w-40 font-semibold text-xl text-[#000] bg-[#8c32ff] hover:bg-[#000] hover:text-[#fff] tranistion 0s ease-in-out">
            Register
          </button>
          <button
            className="md:hidden block z-10 py-1 px-3 bg-[#8c32ff] rounded-lg font-semibold text-xl text-[#000]   tranistion 0s ease-in-out"
            onClick={handleOpenMenu}
          >
            {OpenMenu ? (
              <img src={cancelmenu} alt="" className="w-8" />
            ) : (
              <img src={menu} alt="" className="w-8" />
            )}
          </button>
        </div>
      </div>

      {/* mobile navbar */}

      {OpenMenu && (
        <div
          className=" bg-[#000]  ml-0  block md:hidden h-screen absolute top-0 left-0 w-[80%] z-30 overflow-x-hidden"
          style={{ marginLeft: OpenMenu ? "0" : "-100%" }}
        >
          <div className=" h-20 w-full flex items-center justify-center">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="block md:hidden    px-4 mt-4">
            <nav>
              <div className=" list-none   ">
                <li className="cursor-pointer   font-semibold text-xl h-14 border-t border-dotted py-2">
                  <div className="flex justify-between items-center">
                    <span>Domain</span>

                    {domainOpen ? (
                      <img
                        src={minus}
                        alt=""
                        className="w-8"
                        onClick={handleDomainOpen}
                      />
                    ) : (
                      <img
                        src={plus}
                        alt=""
                        className="w-8"
                        onClick={handleDomainOpen}
                      />
                    )}
                  </div>
                </li>
                {domainOpen && (
                  <nav>
                    <div className="bg-[#171717] border-2 border-[#ffffff1a] text-[#fff]     w-full  rounded-lg p-4 shadow-lg z-10 block">
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Register
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Register Domain
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Bulk Domain Registration
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          New Domain Extensions
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Sunrise Domains
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Transfer
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Transfer Domain
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Bulk Domain Transfer
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          IDN Domain Registration
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Add-ons
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Free with every domain{" "}
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          {" "}
                          Name suggestion tool
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Whois lookup
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Premium Domains
                        </li>
                      </div>
                    </div>
                  </nav>
                )}
                <li className="cursor-pointer font-semibold text-xl h-14  flex justify-between items-center border-t border-dotted py-2">
                  <span>Hosting</span>
                  {HostingOpen ? (
                    <img
                      src={minus}
                      alt=""
                      className="w-8"
                      onClick={handleHostingOpen}
                    />
                  ) : (
                    <img
                      src={plus}
                      alt=""
                      className="w-8"
                      onClick={handleHostingOpen}
                    />
                  )}
                </li>
                {HostingOpen && (
                  <nav>
                    <div className="bg-[#171717] border-2 border-[#ffffff1a] text-[#fff]   rounded-lg p-4 shadow-lg z-10  px-6">
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Shared Hosting
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Linux Shared Hosting
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          <Link to="/windowShared">Window Shared Hosting</Link>
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          <Link to="/wordPressHosting">WordPress Hosting</Link>
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Reseller Hosting
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Linux Reseller Hosting
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Window Reseller Hosting
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          Cloud Hosting
                        </li>
                      </div>
                      <div className="">
                        <h2 className="mb-3 underline font-meduim text-base">
                          Servers
                        </h2>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          VPS Server{" "}
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          {" "}
                          <Link to="/instantDedicatedServer">
                            Linux Dedicated Server (Instant server)
                          </Link>
                        </li>
                        <li className="hover:text-[#8a42ff] hover:underline mb-3">
                          <Link to="/dedicatedServer">
                            Window Dedicated Server
                          </Link>
                        </li>
                      </div>
                    </div>
                  </nav>
                )}
                <li className="cursor-pointer font-semibold text-xl h-14 flex justify-between items-center border-t border-dotted py-2">
                  <span>Email</span>{" "}
                  {EmailOpen ? (
                    <img
                      src={minus}
                      alt=""
                      className="w-8"
                      onClick={handleEmailOpen}
                    />
                  ) : (
                    <img
                      src={plus}
                      alt=""
                      className="w-8"
                      onClick={handleEmailOpen}
                    />
                  )}
                </li>
                {EmailOpen && (
                  <div className="bg-[#171717] border-2 border-[#ffffff1a] text-[#fff]    w-fit rounded-lg p-4 shadow-lg z-10  px-6">
                    <nav>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Bussiness Email
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Titan Business Email
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Enterprises Email
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Google Workspace
                      </li>
                    </nav>
                  </div>
                )}
                <li className="cursor-pointer font-semibold text-xl h-14 flex justify-between items-center border-t border-dotted py-2">
                  {" "}
                  Security Email
                  {SecurityOpen ? (
                    <img
                      src={minus}
                      alt=""
                      className="w-8"
                      onClick={handleSecurityOpen}
                    />
                  ) : (
                    <img
                      src={plus}
                      alt=""
                      className="w-8"
                      onClick={handleSecurityOpen}
                    />
                  )}
                </li>
                {SecurityOpen && (
                  <div className="bg-[#171717] border-3 border-[#ffffff1a] text-[#fff] w-fit  rounded-lg p-4 shadow-lg z-10  px-6">
                    <nav>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        SSL Certificate
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Sitelock Malware
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        CodeGuard Backup
                      </li>
                      <li className="hover:text-[#8a42ff] hover:underline mb-3">
                        Acronis Cyber Backup
                      </li>
                    </nav>
                  </div>
                )}
                <li className="hover:text-[#8a42ff] hover:underline font-semibold cursor-pointer py-3  text-xl">
                  About us
                </li>
              </div>
            </nav>
            <button className="w-full mx-auto  my-4 border-2 border-[#8c32ff] rounded-xl py-1 px-4  font-semibold text-xl text-[#000] bg-[#8c32ff] hover:bg-[#000] hover:text-[#fff] tranistion 0s ease-in-out">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
