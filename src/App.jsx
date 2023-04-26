import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Paragraph, Tech, Works, StarsCanvas  } from "./components"

const App=()=> {


  return (
    <BrowserRouter>
      <div className ="relative z-0 bg-primary">
       <div className = "bh-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
       </div>
       <Paragraph />
       <About />
       <Experience />
       <Tech />
       <Works />
       <Feedbacks />
       <div className="relative z-0">
        <Contact />
        <StarsCanvas />
       </div>

    </div>
    </BrowserRouter>
  )
}

export default App
