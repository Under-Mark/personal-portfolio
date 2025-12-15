import NavBar from "./components/navigation"
import Hero from "./components/hero"
import Divider from "./components/divider"
import About from "./components/about"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Accomplishments from "./components/accomplishments"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Services from "./components/services"
function App() {
  return (
    <>
        <NavBar/>
        <Hero/> 
        <Divider section="About Me"/>
        <About/>
        <Divider section="My Services"/>
        <Services/>
          <Divider section="My Experience"/>
         <Experience/>
          <Divider section="My Projects"/>
        <Projects/>
          <Divider section="My Accomplishments"/>
        <Accomplishments />
          <Divider section="My Contacts"/>
        <Contact/>
        <Footer/>
  </>
  )
}

export default App
