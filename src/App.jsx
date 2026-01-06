
import './App.css'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import FeaturedProject from './components/featuredProjects/FeaturedProject.jsx'
import Hero from './components/Hero/hero'
import OtherProjects from './components/otherProjects/otherProjects.jsx'

function App() {


  return (
    <>
     <Hero/>
     <FeaturedProject/>
     <OtherProjects/>
     <About/>
     <Contact/>
    </>
  )
}

export default App
