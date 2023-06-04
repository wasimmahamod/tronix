import React from 'react'
import Container from './Container'
import Arrivl from '../../images/arrivel.png'
import Title from './Title'

const NewArrivel = () => {
  return (
    <div className='mt-[50px] lg:mt-[160px]'>
      <Container>
      <Title headding='New Arrival'/>
      <div className='flex flex-wrap justify-between gap-y-5 2xl:gap-y-0 mt-10 lg:mt-[80px]  '>
        <div className='text-center   relative  z-50 '>
         <div className='border border-solid border-primary rounded-[32px]'>
         <img className='relative z-[-1] w-[380px] 2xl:w-full' src={Arrivl} alt="" />
          <h5 className='text-lg font-normal text-black mt-8 '>Smartphone 5G</h5>
          <h6 className='font-medium  text-secandary text-lg mt-2 mb-8'>$299</h6>
          <h3 className='text-sm lg:text-lg text-white font-normal bg-secandary w-10 h-10  lg:w-[64px] lg:h-[64px] rounded-full flex justify-center items-center absolute top-8 right-8'>NEW</h3>
         </div>
        </div>
        <div className='text-center   relative  z-50 '>
         <div className='border border-solid border-primary rounded-[32px]'>
         <img className='relative z-[-1] w-[380px] 2xl:w-full ' src={Arrivl} alt="" />
          <h5 className='text-lg font-normal text-black mt-8 '>Smart TV</h5>
          <h6 className='font-medium  text-secandary text-lg mt-2 mb-8'>$299</h6>
          <h3 className='text-sm lg:text-lg text-white font-normal bg-secandary w-10 h-10  lg:w-[64px] lg:h-[64px] rounded-full flex justify-center items-center absolute top-8 right-8'>NEW</h3>
         </div>
        </div>
        <div className='text-center   relative  z-50 '>
         <div className='border border-solid border-primary rounded-[32px]'>
         <img className='relative z-[-1] w-[380px] 2xl:w-full' src={Arrivl} alt="" />
          <h5 className='text-lg font-normal text-black mt-8 '>USB Speaker Portable
</h5>
          <h6 className='font-medium  text-secandary text-lg mt-2 mb-8'>$299</h6>
          <h3 className='text-sm lg:text-lg text-white font-normal bg-secandary w-10 h-10  lg:w-[64px] lg:h-[64px] rounded-full flex justify-center items-center absolute top-8 right-8'>NEW</h3>
         </div>
        </div>
   
      </div>

      </Container>
    </div>
  )
}

export default NewArrivel  