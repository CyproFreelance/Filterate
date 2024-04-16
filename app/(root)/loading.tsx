import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen overflow-hidden bg-n-8'>
      <Image
      src='/assets/loading-01.svg'
      alt=''
      width={50}
      height={50}
      className='animate-spin'
      />
    </div>
  )
}

export default loading
