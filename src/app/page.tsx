'use client'
import React from 'react'
import { motion } from "framer-motion"

const HomePage = () => {
  return (
    <div className='home'>
      <h2>
        AZIZBEK<span>JAKSILIKOV</span>
      </h2>
      <h3>Frontend Developer</h3>
      <motion.button whileTap={{ scale: 0.9 }}>Get in Touch</motion.button>
    </div>
  )
}

export default HomePage