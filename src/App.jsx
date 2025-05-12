
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSelection from './components/HeroSelection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Proyects from './Pages/Proyects'
import SkillGrid from './Pages/SkillGrid'
import Certificates from './components/Certificates'

function App() {

  return (
    <div>
     <Navbar />
     <HeroSelection />
     <About />
     <Proyects />
     <Services />
     <Contact />
     <Footer />
     
    </div>
  )
}

export default App
