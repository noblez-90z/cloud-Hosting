import woman from "../assets/6r746.jpg";
import ControlPanels from "./ControlPanel";
import DedicatedPopularUseScenarios from "./MostCase";
const Add_ons = () => {
  return (
    <div className="w-full py-6 bg-[#000] text-white px-2">
      <section class="add-ons-for-your-dedicated-server-section mx-auto">
        <div class="container  py-6 mx-auto">
          <div class="add-ons-for-your-dedicated-server-header text-center py-6 px-2">
            <h2 class="add-ons-for-your-dedicated-server-title  font-bold text-2xl">
              Enhance Your Dedicated Server with Powerful Add-Ons
            </h2>
            <p className="font-[400] py-3">
              These add-ons simplify server setup and management, enabling you
              to focus on growing your business without worry.
            </p>
          </div>

          <div class="add-ons-for-your-dedicated-server- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 ">
            {/* <!-- Server Security Suite Card --> */}
            <div class="add-ons-for-your-dedicated-server-card add-ons-for-your-dedicated-server-card-left ">
              <div class="add-ons-for-your-dedicated-server-card-content">
                <h3 class="add-ons-for-your-dedicated-server-card-title text-2xl font-bold py-3">
                  Managed Support Add-on
                </h3>
                <p class="add-ons-for-your-dedicated-server-card-text py-3 text-lg font-[400]">
                  Get managed support for your server with our experienced team.
                  Whether you're a beginner or need assistance at any stage,
                  we’re here to help—from setup to ongoing maintenance. We offer
                  high-priority support for OS installation, website
                  configuration, and technical issues via call or ticket.
                  Consult us today for our paid managed support on bare metal
                  servers. Our team is always ready to assist you.
                </p>
              </div>
            </div>

            {/* <!-- Server Security Image --> */}
            <div class="add-ons-for-your-dedicated-server-image-container add-ons-for-your-dedicated-server-image-right">
              <div class="add-ons-for-your-dedicated-server-image-frame ">
                <img
                  src={woman}
                  height="600px"
                  width="600px"
                  alt="Server Security"
                  class="add-ons-for-your-dedicated-server-image"
                />
                <div class="add-ons-for-your-dedicated-server-image-caption">
                  Certified Expert's Team
                </div>
                <div class="add-ons-for-your-dedicated-server-icon-row">
                  <div class="add-ons-for-your-dedicated-server-icon">
                    <i class="bi bi-shield-lock"></i>
                  </div>
                  <div class="add-ons-for-your-dedicated-server-icon">
                    <i class="bi bi-hdd-rack"></i>
                  </div>
                  <div class="add-ons-for-your-dedicated-server-icon">
                    <i class="bi bi-gear"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Remote Hands Card --> */}
            <div class="add-ons-for-your-dedicated-server-card add-ons-for-your-dedicated-server-card-left">
              <div class="add-ons-for-your-dedicated-server-card-content">
                <h3 class="add-ons-for-your-dedicated-server-card-title text-2xl font-bold py-3">
                  Dedicated Backup Storage Add-On
                </h3>
                <p class="add-ons-for-your-dedicated-server-card-text py-3 text-lg font-[400]">
                  Backups are essential for any online business, ensuring the
                  safety of websites and applications. With this add-on, we
                  provide additional storage via an extra disk or FTP access,
                  allowing you to securely back up your data and restore it when
                  needed. This safeguard protects against hardware failures,
                  disk crashes, or any unexpected data loss.
                </p>
              </div>
            </div>

            {/* <!-- Google Workspace Image --> */}
            <div class="add-ons-for-your-dedicated-server-image-container add-ons-for-your-dedicated-server-image-left">
              <div class="add-ons-for-your-dedicated-server-image-frame h-[250px] border rounded-lg">
                <img
                  src="images/google-workspace.jpg"
                  alt="Google Workspace"
                  class="add-ons-for-your-dedicated-server-image"
                />
                <div class="add-ons-for-your-dedicated-server-image-caption">
                  Dedicated IP Add-On
                </div>
                <div class="add-ons-for-your-dedicated-server-icon-row">
                  <div class="add-ons-for-your-dedicated-server-icon">
                    <i class="bi bi-google"></i>
                  </div>
                  <div class="add-ons-for-your-dedicated-server-icon">
                    <i class="bi bi-hdd-network"></i>
                  </div>
                  <div class="add-ons-for-your-dedicated-server-icon">
                    <i class="bi bi-bar-chart"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Load Balancer Card --> */}
            <div class="add-ons-for-your-dedicated-server-card add-ons-for-your-dedicated-server-card-right">
              <div class="add-ons-for-your-dedicated-server-card-content">
                <h3 class="add-ons-for-your-dedicated-server-card-title text-2xl font-bold py-3">
                  Dedicated IP Add-On
                </h3>
                <p class="add-ons-for-your-dedicated-server-card-text py-3 text-lg font-[400]">
                  Expand your server’s networking capabilities with up to 256
                  on-demand IPv4 and IPv6 addresses. Whether you're deploying
                  VMs, assigning dedicated IPs to websites, or optimizing
                  network configurations, our intuitive dashboard makes IP
                  management effortless.
                </p>
              </div>
            </div>

            {/* <!-- Upgrade Your Server Hardware --> */}
            <div class="add-ons-for-your-dedicated-server-card add-ons-for-your-dedicated-server-card-right">
              <div class="add-ons-for-your-dedicated-server-card-content">
                <h3 class="add-ons-for-your-dedicated-server-card-title text-2xl font-bold py-3">
                  Upgrade Your Server Hardware
                </h3>
                <p class="add-ons-for-your-dedicated-server-card-text">
                  We understand that startups often require minimal resources
                  initially. That’s why we offer the flexibility to scale your
                  server as your business grows. Upgrade your RAM up to 512GB
                  and expand storage up to 10TB per server—seamlessly and
                  without data loss. Enhance your existing bare metal dedicated
                  server whenever you need more power.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ControlPanels />
        </div>
        <div className="">
          <DedicatedPopularUseScenarios />
        </div>
      </section>
    </div>
  );
};

export default Add_ons;
