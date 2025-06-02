import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className=" px-8 w-full  bg-[#000] text-white">
      <div className="flex justify-between items-center py-4 ">
        <div className="flex  gap-10 space-x-6  py-6 mt-3 flex-1 ">
          <div className="w-full ">
            <div className=" rounded-full p-2 bg-[#002143]">
              <img src={logo} alt="" />
            </div>
            <div className="footer-social-link">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
          <div className="w-full">
            <div className="footer-nav font-semibold">
              <ul className="footer-nav-link style-none">
                <li className=" hover:text-[#8c32ff]">
                  <a href="bussiness-email.html">Bussiness Email</a>
                </li>
                <li className="py-3 hover:text-[#8c32ff]">
                  <a href="titan-business-email.html">Titan Business Email</a>
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
                  <a href="acronis-cyber-backup.html">Acronis Cyber Backup</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
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

      <hr />
      <div className="row">
        <div className="col-lg-12">
          <div className="policy flex space-x-4 items-center ">
            <a href="privacy-policy.html">Privacy policy</a>
            <a href="terms.html">Terms Of Use</a>
            <a href="about-us.html">About Us</a>
            <a href="javascript:void(0)">Blog</a>
            <a href="javascript:void(0)">Sitemap</a>
            <a href="contact.html">Contact Us</a>
            <p> © 2024 EuroHost All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
