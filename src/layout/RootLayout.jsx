
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import RegistrationModal from "../components/modal/RegistrationModal";

const RootLayout = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('')

  return <div style={{backgroundColor: "#E9F7EE", }} >
    <Navbar setOpen={setOpen} open={open}/>
    <RegistrationModal value={value} setValue={setValue} open={open} setOpen={setOpen}/>
    
    <Outlet/>
    <Footer open={open} setOpen={setOpen}/>
  </div>;
};

export default RootLayout;
