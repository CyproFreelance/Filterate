import { AboutOne } from '@/components/component/about-one'
import Navbar from '@/components/shared/Navbar'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center text-4xl'>
    <Navbar/>
  <AboutOne/>
    </div>
  )
}

export default About
