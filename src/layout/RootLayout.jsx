
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return <div style={{backgroundColor: "#E9F7EE"}} className=" mx-auto">
    {/* <Navbar/> */}
    <Outlet/>
    {/* <Footer/> */}
  </div>;
};

export default RootLayout;
