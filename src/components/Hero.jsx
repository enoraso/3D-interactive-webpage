import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import CustomCanvas from './CustomCanvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#84e889]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />



        </div>
        <div className='relative z-40'>
          <h1 className={`${styles.heroHeadText} text-white`}>Interaktīva 3D <span className="text-[#84e889]">mājaslapa</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Izmantojot Three.JS un <br className='sm:block hidden' /> react-three-fiber
        </p>
        </div>
        <CustomCanvas />
      </div>
    
    </section>
  )
}

export default Hero