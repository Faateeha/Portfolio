import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Socials from "./components/Socials"
import Footer from "./components/Footer"


import Navbar from "./components/Navbar"



function App() {
  
  return (
    <BrowserRouter>
    <main className="text-white h-full w-full font-body">
     <Navbar />
      <Home />
      <About />
      <Socials />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </main>
    </BrowserRouter>
  )
}

export default App
