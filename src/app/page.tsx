import Hero from "@/components/Home/Hero"
import LogoSection from './../components/Home/LogoSection';
import KeyBenefits from "@/components/Home/KeyBenefits";
import Timeline from "@/components/Home/Timeline";


const Home = () => {
  return (
    <div className="web-container px-4 md:px-10 mt-10 lg:mt-24">
         <Hero/> 
         <LogoSection/>
         <KeyBenefits/>
         <Timeline/>
    </div>
  )
}

export default Home