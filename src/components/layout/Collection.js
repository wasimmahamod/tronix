import React from 'react'
import Container from './Container'
import Title from './Title'

const Collection = () => {
  return (
    <div className='mt-[80px] lg:mt-[160px] '>
        <Container>
            <Title headding='Our Collections'></Title>
            <div className='flex flex-wrap gap-y-5 2xl:gap-y-0 justify-between mt-10 2xl:mt-[80px] '>
                <div className=' bg-primary py-5 px-5 lg:py-[100px]  2xl:py-[211px] lg:px-[70px] 2xl:px-[153px] rounded-[32px] '>
                    <div className='text-center bg-white  p-8 rounded-[16px] '>
                        <h2 className='Headding text-[36px] font-bold  text-black mb-4'>PC Gaming Collection</h2>
                        <p className='lg:w-[368px] text-lg font-normal text-black '>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod. </p>
                    </div>
                </div>
                <div className=' bg-primary py-10 px-10 lg:py-[100px]  2xl:py-[211px] lg:px-[70px] 2xl:px-[153px] rounded-[32px] '>
                    <div className='text-center bg-white  p-8 rounded-[16px] '>
                        <h2 className='Headding text-[36px] font-bold  text-black mb-4'>Camera Collection</h2>
                        <p className='lg:w-[368px] text-lg font-normal text-black '>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod. </p>
                    </div>
                </div>
   
            </div>
        </Container>
    </div>
  )
}

export default Collection