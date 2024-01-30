
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>;
};

export default RootLayout;
