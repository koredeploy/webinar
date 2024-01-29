
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return <div className="w-11/12 mx-auto">
    {/* <Navbar/> */}
    <Outlet/>
    {/* <Footer/> */}
  </div>;
};

export default RootLayout;
