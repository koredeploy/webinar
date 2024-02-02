// import './landingpage.scss'
import HeroSection from "../home/components/HeroSection";
import Section3 from "../home/components/Section3";
import Section5 from "../home/components/Section5";
import Section2 from "../home/components/Section2";

import style from "./landingpage.module.scss";
import Section4 from "../home/components/Section4";
import Section6 from "../home/components/Section6";
import RegistrationModal from "../../components/modal/RegistrationModal";
import { useState } from "react";
// import SuccessModal from '../../components/modal/SuccessModal'

const LandingPage = () => {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);

    // const [showModal, setShowModal] = useState()
    return (
        <div style={{ maxWidth: "1600px ", margin: "auto" }}>
            <HeroSection setOpen={setOpen} open={open} />
            <Section2 />
            <Section3 setOpen={setOpen} />
            <Section4 />
            <Section5 setOpen={setOpen} />
            <Section6 />
            {/* <SuccessModal/> */}
            <RegistrationModal value={value} open={open} setOpen={setOpen} />
        </div>
    );
};

export default LandingPage;
