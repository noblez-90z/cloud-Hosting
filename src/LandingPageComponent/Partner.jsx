import virtual from "../assets/virtualizor_logo.png";
import cpanel from "../assets/cpanel_orange.png";
import proxmox from "../assets/proxmox-full-lockup-color.png";
import letsEncrypt from "../assets/lets-encrypt-logo.png";
import ripe from "../assets/RIPE-NCC-Member.png";
import dell from "../assets/dell-logo.png";
import hp from "../assets/hp-logo.png";
import intel from "../assets//intel-logo.png";

const Partner = () => {
  return (
    <div className="">
      <div className="our-partner-content-slide text-center" id="partnersSlide">
        <div class="our-partner-header">
          <h2 className="text-2xl font-bold text-center mb-10">Our Partners</h2>
          <p class="our-partner-subtitle py-4">
            Corporate partners nationwide that we're associated with.
          </p>
        </div>

        <div class="our-partner-logos-container">
          <div class="our-partner-logos-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="our-partner-logo py-6 px-4 rounded-lg shadow-lg  shadow-md flex justify-center items-center">
              <img src={cpanel} alt="cPanel" />
            </div>
            <div class="our-partner-logo py-6 px-4 rounded-lg shadow-lg  shadow-md flex justify-center items-center">
              <img src={virtual} alt="Virtualizor" />
            </div>
            <div class="our-partner-logo flex justify-center items-center py-6 px-4 rounded-lg shadow-lg  shadow-md">
              <img src={proxmox} alt="Proxmox" />
            </div>
            <div class="our-partner-logo py-6 px-4 rounded-lg shadow-lg  shadow-md">
              <img src={letsEncrypt} alt="Let's Encrypt" />
            </div>
            <div class="our-partner-logo py-6 px-4 rounded-lg shadow-lg  shadow-md flex justify-center items-center">
              <img src={ripe} alt="RIPE NCC" />
            </div>
            <div class="our-partner-logo py-6 px-4 rounded-lg shadow-lg  shadow-md flex justify-center items-center">
              <img src={dell} alt="Dell Technologies" />
            </div>
            <div class="our-partner-logo py-6 px-4 rounded-lg shadow-lg  shadow-md">
              <img src={hp} alt="HP" />
            </div>
            <div class="our-partner-logo py-6 px-4 rounded-lg shadow-lg  shadow-md">
              <img src={intel} alt="Intel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
