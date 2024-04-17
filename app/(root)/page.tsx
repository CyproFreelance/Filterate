import Navbar from '@/components/shared/Navbar'
import Hero from '@/components/shared/Hero'
import BelowHero from '@/components/shared/BelowHero'

const Home = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Navbar />
        <Hero/>
        <BelowHero/>
      </div>
    </>
  )
}

export default Home
