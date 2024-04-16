import ButtonGradient from '@/public/assets/svg/ButtonGradient'
import React from 'react'
import Navbar from '@/components/shared/Navbar'
import Hero from '@/components/shared/Hero'

const Home = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Navbar />
      <Hero/>
      </div>
    </>
  )
}

export default Home
