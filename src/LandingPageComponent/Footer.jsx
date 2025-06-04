import logo from "../assets/logo.png";
import {
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" md:px-8 px-3 w-full  bg-[#000] text-white overflow-x-hidden overflow-y-hidden">
      <div className="flex justify-between items-center md:py-4 ">
        <div className="md:flex  gap-10 md:space-x-6  md:py-6 mt-3   w-full">
          <div className="">
            <div className="w-[80%] md:w-full rounded-full p-2 bg-[#002143]">
              <img src={logo} alt="" />
            </div>
            <div className="footer-social-link">
              <h4 className="font-semibold text-lg py-4">Follow Us</h4>
              <ul className="flex gap-4 py-4">
                <li>
                  <a href="#" aria-label="Twitter">
                    <FaXTwitter className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="WhatsApp">
                    <FaWhatsapp className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Facebook">
                    <FaFacebook className="text-xl" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin className="text-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 md:flex justify-around  w-full ">
            <div className="flex mt-10 md:mt-0 gap-4 flex-1 ">
              <div className="w-full">
                <div className="footer-nav font-semibold">
                  <ul className="footer-nav-link style-none">
                    <li className="hover:text-[#8c32ff]">
                      <a href="shared-hosting.html">Shared Hosting</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="wordpress-hosting.html">WordPress Hosting</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="reseller-hosting.html">Reseller Hosting</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="cloud-hosting.html">Cloud Hosting</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="dedicated-server.html">Dedicated Server</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="vps-server.html">VPS Server</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full ">
                <div className="footer-nav font-semibold">
                  <ul className="footer-nav-link style-none">
                    <li className=" hover:text-[#8c32ff]">
                      <a href="bussiness-email.html">Bussiness Email</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="titan-business-email.html">
                        Titan Business Email
                      </a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="enterprises-email.html">Enterprises Email</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="google-workspace.html">Google Workspace</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 md:mt-0 flex-1 flex gap-4">
              <div className="w-full">
                <div className="footer-nav mb-20 font-semibold">
                  <ul className="footer-nav-link style-none">
                    <li className=" hover:text-[#8c32ff]">
                      <a href="ssl-certificate.html">SSL Certificate</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="sitelock-malware.html">Sitelock Malware</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="codeguard-backup.html">CodeGuard Backup</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="acronis-cyber-backup.html">
                        Acronis Cyber Backup
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full ">
                <div className="footer-nav mb-20 font-semibold">
                  <ul className="footer-nav-link style-none">
                    <li className=" hover:text-[#8c32ff]">
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="legal-agreement.html">Legal Agreement</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li className="py-3 hover:text-[#8c32ff]">
                      <a href="#">Knowledgebase</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-lg-12">
          <div className="policy flex space-x-4 items-center justify-center font-bold py-2">
            <p> © 2024 EuroHost All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
