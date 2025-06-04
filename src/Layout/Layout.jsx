import Footer from "../LandingPageComponent/Footer";
import Header from "../LandingPageComponent/Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
