import React from 'react';
import { useState, useEffect } from 'react';
import SphereCanvas from './SphereCanvas'
import { styles } from '../styles'

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const [isVisible, setIsVisible ] = useState(false)
  const [text, setText] = useState(0);
  function turnOff () {
    setIsVisible(false);
  }
  function handleToggle(params) {
    setIsVisible(true);
    if(params === 1){
      setText(0)
    }
    if(params === 2){
      setText(1)
    }
    if (params === 3){
      setText(2)
    }
    console.log(text);
    
  }
  return (
 <section id='about' className='relative w-full h-screen mx-auto z-19 px-10 '>
  <div className='w-100 h-[10px] green-horizontal-gradient'/>
    <div className={`absolute inset-0 top-[120px] max-w-6xl mx-auto flex flex-row items-start gap-5`}>
    <Module isMobile={isMobile} text={text} isVisible={isVisible} turnOff={turnOff}/>
    <SphereCanvas  handleToggle = {handleToggle} />
    </div>

  </section>

  )
}

export default About



const Module = ({isMobile, text, isVisible, turnOff}) => {
 
  return(
    <div
    id="module"
    className = {isVisible ? "flex items-center fixed h-screen w-screen left-0 top-0 z-50" : "hidden"}
    style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
    onClick={(e)=>{
      var wrapper = document.getElementById('wraper');
      var targetElement = e.target; // Get the clicked element
    
      // Traverse up the DOM tree until we find the wrapper element or hit the top of the tree
      while (targetElement != null) {
        if (targetElement === wrapper) {
          // The clicked element is within the wrapper element
          return;
        }
        targetElement = targetElement.parentElement;
      }
    
      // The clicked element is not within the wrapper element
      // Add your code here to handle this case
      turnOff();
    }}
    >
      
      <div id = "wraper" className={isMobile? "max-w-[80%] relative px-10 py-20 mx-auto bg-[#84e889]":'max-w-[60%] relative px-20 py-20 mx-auto bg-[#84e889]'}>
      <div id="btn" className=' ease-in cursor-pointer rounded text-black bg-white py-2 px-2 absolute top-5 right-10 hover:bg-sky-500' onClick={turnOff}>Aiztaisīt</div>
        <h2 className='text-4xl font-extrabold text-black'>{texts[text].title}</h2>
        <p className="mt-5 text-black text-xl">
        {texts[text].text}
        </p>

      </div>
    </div>
  )
}

const texts= [
  {
    title: "React",
    text: "Šī lapa izmanto react-three/fiber, react-three/drei un arī pašu react bibliotēku. Tās atvieglo darbu ar 3D elementiem, ietinot Three.js ietvara klases un funkcijas react componentēs"
  },
  {
    title: "Three",
    text: "Three.js ir JavaScript bibliotēka, kas ļauj veidot 3D grafiku un animācijas tieši pārlūkprogrammā. Tā izmanto WebGL tehnoloģiju, kas nodrošina lielāku 3D grafikas jaudu pārlūkprogrammām, nekā būtu iespējams, izmantojot tikai HTML un CSS."
  },
  {
    title: "Vite",
    text: "Vite ir moderns un ātrs Javascript projektu būvētājs, kas ļauj izveidot un attīstīt lietotnes, izmantojot jaunākos web tehnoloģiju standartus, piemēram, ES Modules. Tā galvenais mērķis ir samazināt sākuma ielādes laiku un nodrošināt ātrāku attīstības procesu, automātiski konfigurējot sākotnējās projektu iestatījumus, piemēram, CSS, TypeScript un SCSS."
  }
]