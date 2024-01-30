// import './landingpage.scss'
import HeroSection from '../home/components/HeroSection'
import Section3 from '../home/components/Section3'
import Section5 from '../home/components/Section5'
import Section2 from '../home/components/Section2'

import style from './landingpage.module.scss'
import Section4 from '../home/components/Section4'
import Section6 from '../home/components/Section6'


const LandingPage = () => {
  return (
    <div >
    <HeroSection />
    <Section2 />
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    </div>
  )
}

export default LandingPage