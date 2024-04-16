import Navbar from '@/components/shared/Navbar'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center text-4xl'>
    <Navbar/>
      About Page
      <Link className='underlinie text-sm text-n-2 py-4' href='/'>Go back to home</Link>
    </div>
  )
}

export default About
