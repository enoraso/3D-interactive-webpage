import { BrowserRouter } from "react-router-dom"
import {About, Hero, Navbar, Paragraph, StarsCanvas, Footer  } from "./components"

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
     
       <div className="relative z-0">
       
        <StarsCanvas />
       </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
