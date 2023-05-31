import React from 'react'
import Container from './Container'
import Title from './Title'

const Collection = () => {
  return (
    <div className='mt-[80px] lg:mt-[160px] '>
        <Container>
            <Title headding='Our Collections'></Title>
            <div className='flex flex-wrap justify-between mt-[80px] '>
                <div className=' bg-primary py-10 px-10 lg:py-[150px]  2xl:py-[211px] lg:px-[100px] 2xl:px-[153px] rounded-[32px] '>
                    <div className='text-center bg-white  p-8 rounded-[16px] '>
                        <h2 className='Headding text-[36px] font-bold  text-black mb-4'>PC Gaming Collection</h2>
                        <p className='lg:w-[368px] text-lg font-normal text-black '>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod. </p>
                    </div>
                </div>
                <div className=' bg-primary py-10 px-10 lg:py-[150px]  2xl:py-[211px] lg:px-[100px] 2xl:px-[153px] rounded-[32px] '>
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