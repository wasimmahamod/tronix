import React from 'react'
import Container from './Container'
import Title from './Title'
import FeatureLeftImg from '../../images/fetureleftimg.png'
import FeatureRightImg from '../../images/fetureRightimg.png'

const Feature = () => {
  return (
    <div className='mt-[100px] lg:mt-[160px] '>
        <Container>
            <Title headding='Featured Products'/>
            <div className='2xl:flex flex-wrap xl:flex-nowrap  gap-x-8   mt-[80px] '>
              <div className='text-center border border-solid border-primary 2xl:py-12 2xl:px-[136px] px-5 py-5  rounded-[32px] '>
                <h3 className='text-2xl lg:text-[36px] font-normal text-black'>Wireless Microphone</h3>
                <h5 className='text-xl lg:text-2xl mt-2'><del>$29.99</del><span className=' text-secandary '> - $19.99</span></h5>
                <img  className='mt-8 mx-auto' src={FeatureLeftImg} alt="" />
                <div className='flex mt-8  lg:gap-x-8 justify-center '>
                  <div className='lg:w-[120px] lg:h-[120px] p-2 lg:p-0  rounded-[32px] border border-solid border-primary flex justify-center items-center '>
                 <div>
                 <h2 className='lg:text-[36px] font-bold text-secandary'>2</h2>
                    <h4 className='font-normal lg:text-2xl text-black'>Hours</h4>
                 </div>
                  </div>
                  <div className='lg:w-[120px] lg:h-[120px]  p-2 lg:p-0  rounded-[32px] border border-solid border-primary flex justify-center items-center '>
                 <div>
                 <h2 className='lg:text-[36px] font-bold text-secandary'>16</h2>
                    <h4 className='font-normal lg:text-2xl text-black'>Minutes</h4>
                 </div>
                  </div>
                  <div className='lg:w-[120px] lg:h-[120px] p-2 lg:p-0 rounded-[32px] border border-solid border-primary flex justify-center items-center '>
                 <div>
                 <h2 className='lg:text-[36px] font-bold text-secandary'>27</h2>
                    <h4 className='font-normal lg:text-2xl text-black'>Seconds</h4>
                 </div>
                  </div>
                 
                </div>
              </div>
              <div>
            <div className='flex flex-wrap  relative z-50 mt-8 lg:mt-0 '>
            <div className='border border-solid border-primary rounded-[32px] flex     gap-x-8 p-2 '>
                  <img className='relative z-[-1] ' src={FeatureRightImg} alt="" />
                  <div className='pt-12 pb-10 pr-[83px] '>
                    <h3 className='text-base lg:text-lg font-medium text-white bg-secandary lg:py-2.5 py-1 px-2 lg:px-4 rounded-[8px] inline-block mb-8'>Limited Offer</h3>

                    <h4 className='text-2xl xl:w-[293px] font-normal text-black'>Smart Watch New Series</h4>
                <h5 className='lg:text-2xl mt-2'><del>$29.99</del><span className=' text-secandary '> - $19.99</span></h5>
                <div className=' flex flex-wrap xl:flex-nowrap  mt-8 gap-x-6 justify-center '>
                  <div className='w-[80px] h-[80px] rounded-[16px] border border-solid border-primary flex justify-center items-center '>
                 <div className='text-center'>
                 <h2 className='text-2xl font-bold text-secandary'>2</h2>
                    <h4 className='font-normal text-lg text-black'>Hrs</h4>
                 </div>
                  </div>
                  <div className='w-[80px] h-[80px] rounded-[16px] border border-solid border-primary flex justify-center items-center '>
                 <div className='text-center'>
                 <h2 className='text-2xl font-bold text-secandary'>16</h2>
                    <h4 className='font-normal text-lg text-black'>Min</h4>
                 </div>
                  </div>
                  <div className='w-[80px] h-[80px] rounded-[16px] border border-solid border-primary flex justify-center items-center '>
                 <div className='text-center'>
                 <h2 className='text-2xl font-bold text-secandary'>27</h2>
                    <h4 className='font-normal text-lg text-black'>Sec</h4>
                 </div>
                  </div>
                 
                </div>
                  </div>
                </div>
            </div>
            <div className='flex flex-wrap   relative z-50 mt-8 '>
            <div className='border border-solid border-primary rounded-[32px] flex  gap-x-8 p-2'>
                  <img className='relative z-[-1] ' src={FeatureRightImg} alt="" />
                  <div className='pt-12 pb-10 pr-[83px] '>
                    <h3 className='text-base lg:text-lg font-medium text-white bg-secandary lg:py-2.5 py-1 px-2 lg:px-4 rounded-[8px] inline-block mb-8'>Limited Offer</h3>

                    <h4 className='text-2xl font-normal text-black'>Camera HD + Lens</h4>
                <h5 className='lg:text-2xl mt-2'><del>$29.99</del><span className=' text-secandary '> - $19.99</span></h5>
                <div className='flex flex-wrap xl:flex-nowrap  mt-8 gap-x-6 justify-center '>
                  <div className='w-[80px] h-[80px] rounded-[16px] border border-solid border-primary flex justify-center items-center '>
                 <div className='text-center'>
                 <h2 className='text-2xl font-bold text-secandary'>2</h2>
                    <h4 className='font-normal text-lg text-black'>Hrs</h4>
                 </div>
                  </div>
                  <div className='w-[80px] h-[80px] rounded-[16px] border border-solid border-primary flex justify-center items-center '>
                 <div className='text-center'>
                 <h2 className='text-2xl font-bold text-secandary'>16</h2>
                    <h4 className='font-normal text-lg text-black'>Min</h4>
                 </div>
                  </div>
                  <div className='w-[80px] h-[80px] rounded-[16px] border border-solid border-primary flex justify-center items-center '>
                 <div className='text-center'>
                 <h2 className='text-2xl font-bold text-secandary'>27</h2>
                    <h4 className='font-normal text-lg text-black'>Sec</h4>
                 </div>
                  </div>
                 
                </div>
                  </div>
                </div>
            </div>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Feature