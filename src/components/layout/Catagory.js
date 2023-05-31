import React from 'react'
import Container from './Container'
import {BsLaptop,BsFillCameraFill} from 'react-icons/bs'
import {CiMobile3} from 'react-icons/ci'
import {FcHome} from 'react-icons/fc'


const Catagory = () => {
  return (
    <div className='mt-[80px] '>
        <Container>
            <h1 className='catagoryHeadding font-bold text-[36px] text-black'>Category</h1>
            <div className='flex flex-wrap gap-x-8 mt-8 justify-between gap-y-3 lg:gap-y-0'>
                <div className='flex items-center gap-x-2.5 p-3 border border-solid border-[#A7A7A7] rounded-[8px] '>
                    <BsLaptop/>
                    <h3 className='text-lg font-normal text-black '>Computer & Laptop</h3>
                </div>
                <div className='flex items-center gap-x-2.5 p-3 border border-solid border-[#A7A7A7] rounded-[8px] '>
                    <CiMobile3/>
                    <h3 className='text-lg font-normal text-black '>Mobile & Tablet
</h3>
                </div>
                <div className='flex items-center gap-x-2.5 p-3 border border-solid border-[#A7A7A7] rounded-[8px] '>
                    <BsFillCameraFill/>
                    <h3 className='text-lg font-normal text-black '>Camera</h3>
                </div>
                <div className='flex items-center gap-x-2.5 p-3 border border-solid border-[#A7A7A7] rounded-[8px] '>
                    <BsLaptop/>
                    <h3 className='text-lg font-normal text-black '>TV & Smart Box
</h3>
                </div>
                <div className='flex items-center gap-x-2.5 p-3 border border-solid border-[#A7A7A7] rounded-[8px] '>
                    <FcHome/>
                    <h3 className='text-lg font-normal text-black '>Home Appliance</h3>
                </div>
                <div className='flex items-center gap-x-2.5 p-3 border border-solid border-[#A7A7A7] rounded-[8px] '>
                    <BsLaptop/>
                    <h3 className='text-lg font-normal text-black '>Accessories</h3>
                </div>
                <div className='flex items-center gap-x-2.5 p-3 border border-solid border-[#A7A7A7] rounded-[8px] '>
                    <BsLaptop/>
                    <h3 className='text-lg font-normal text-black '>Other Categories
</h3>
                </div>
         
            </div>
        </Container>
    </div>
  )
}

export default Catagory