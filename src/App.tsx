import FAQSection from "./components/FAQSection/FAQSection"
import Footer from "./components/Footer/Footer"
import Header from "./components/Headre/Header"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import NavigateSection from "./components/NavigateSection/NavigateSection"
import OurBenefitsSection from "./components/OurBenefitsSection/OurBenefitsSection"
import OurTestimonials from "./components/OurTestimonials/OurTestimonials"

function App() {
  return (
    <>
      <NavBar 
          logo = "/assets/img/Logo.png"
          items = {["Home" , "About Us" , "Academics","Admissions" , "Student Life" , "Contact"]}
        />
      <div className="container">
        <Header>
          <Hero />
        </Header>
        <main>
          <OurBenefitsSection />
          <OurTestimonials />
          <FAQSection />
          <NavigateSection />
        </main>
      </div>
      <Footer 
        img = "/assets/img/Logo.png"
        desc = "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        footerItems = {["Home" , "Features" , "Our Testimonials" , "FAQ"]}
        footerItems1 = {["About Us" , "Our Mission" , "Our Vission" , "Awards and Recognitions" , "History" , "Teachers"]}
        footerItems2 = {["Academics" , "Special Features" , "Gallery"]}
        footerItems3 = {["Contact Us" , "Information" , "Map & Direction"]}
      />
    </>
  )
}













export default App
