import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import ScrollToTopButton from "./components/ScrollToTopButton";
import PlayerMusic from "./components/PlayerMusic";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <PlayerMusic />
        </div>
        <About />
        {/* <Tech /> */}
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <ScrollToTopButton />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
