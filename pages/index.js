import About from "../components/About/About"
import Clinics from "../components/Clicnics/Clinics"
import Cta from "../components/CTA/Cta"
import Faq from "../components/Faq/Faq"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import Testimonials from "../components/Testimonials/Testimonials"


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Faq />
      <Clinics />
      <Features />
      <Testimonials />
    </>
  )
}

export default HomePage