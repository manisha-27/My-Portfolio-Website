import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-7xl sm:text-3xl text-secondary font-semibold'>Manisha Singh</h1>
      <h1 className='text-6xl sm:text-2xl text-white font-semibold'>I build things for the Web.</h1>
      <p className='text-white w-2/3'>I am a dedicated software developer with a strong foundation in programming and a deep passion for web technologies.</p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro