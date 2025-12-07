import NavBar from "./components/navigation"
import Hero from "./components/hero"
import Divider from "./components/divider"
import About from "./components/about"
import Projects from "./components/projects"
import Experience from "./components/experience"
function App() {
  return (
    <>
        <NavBar/>
        <Hero/> 
        <Divider/>
        <About/>
        <Divider/>
        <Projects/>
        <Divider/>
        <Experience/>
  </>
  )
}

export default App
