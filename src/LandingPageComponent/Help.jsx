import livechat from "../assets/live-chat.svg";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
const Help = () => {
  return (
    <div className="md:px-6 py-10 ">
      <div class="container lg">
        <div class="address-wrapper">
          <h2 className="text-xl font-semibold py-3 mb-6">Need Some Help?</h2>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="col-lg-4 d-flex">
              <div class="block d-flex w-100 align-items-center mt-25 bg-[#171717] px-4 py-3 rounded-xl">
                <div class="icon d-flex align-items-center justify-content-center rounded-circle py-3">
                  <img src={mail} alt="" />
                </div>
                <div class="text">
                  <div class="title">We’r always happy to help</div>
                  <span class="fs-20">info@yourdomain.com</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex">
              <div class="block d-flex w-100 align-items-center mt-25 bg-[#171717] px-4 py-3 rounded-xl">
                <div class="d-flex align-items-center">
                  <div class="icon d-flex align-items-center justify-content-center rounded-circle py-3">
                    <img src={phone} alt="" />
                  </div>
                  <div class="text">
                    <div class="title">Our Hotline Number</div>
                    <span class="fs-20">+91 895 475 8694</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex">
              <div class="block d-flex w-100 align-items-center mt-25 bg-[#171717] px-4 py-3 rounded-xl">
                <div class="icon d-flex align-items-center justify-content-center rounded-circle py-3">
                  <img src={livechat} alt="" />
                </div>
                <div class="text">
                  <div class="title">Live chat</div>
                  <span class="fs-20">support@yourdomain.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
