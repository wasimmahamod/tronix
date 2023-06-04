import React from 'react'
import Container from './Container'
import TopImg from '../../images/top.png'
import {AiFillStar} from 'react-icons/ai'

const TopRated = () => {
  return (
    <div className='mt-[80px] lg:mt-[160px] '>
        <Container>
        <h2 className="Headding text-[30px] lg:text-[40px] 2xl:text-[56px] font-bold text-black text-center">Top Rated Product</h2>
        <div className='flex flex-wrap gap-y-5 2xl:gap-y-2  justify-between mt-10 2xl:mt-[80px] '>
            <div className='border border-solid border-primary rounded-[32px] p-8 text-center'>
                <img className='mx-auto' src={TopImg} alt="" />
                <div className='text-center mt-8'>
                <h3 className='text-2xl font-normal text-black'>Smart Mop Robot</h3>
                <h4 className='text-2xl text-secandary font-bold'>$1000.00</h4>
                <div className='flex justify-center mt-6'>
                    <ul className='flex '>
                        <h3 className='text-primary text-2xl font-medium mr-2'>5.0</h3>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                    </ul>
                </div>
                <button className='font-normal text-lg  text-white bg-secandary py-3 px-7 rounded-[8px] mt-6 text-center'>Add to Cart</button>

                </div>
            </div>
            <div className='border border-solid border-primary rounded-[32px] p-8 text-center'>
                <img className='mx-auto' src={TopImg} alt="" />
                <div className='text-center mt-8'>
                <h3 className='text-2xl font-normal text-black'>Smart Mop Robot</h3>
                <h4 className='text-2xl text-secandary font-bold'>$1000.00</h4>
                <div className='flex justify-center mt-6'>
                    <ul className='flex '>
                        <h3 className='text-primary text-2xl font-medium mr-2'>5.0</h3>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                    </ul>
                </div>
                <button className='font-normal text-lg  text-white bg-secandary py-3 px-7 rounded-[8px] mt-6 text-center'>Add to Cart</button>

                </div>
            </div>
            <div className='border border-solid border-primary rounded-[32px] p-8 text-center'>
                <img className='mx-auto' src={TopImg} alt="" />
                <div className='text-center mt-8'>
                <h3 className='text-2xl font-normal text-black'>Smart Mop Robot</h3>
                <h4 className='text-2xl text-secandary font-bold'>$1000.00</h4>
                <div className='flex justify-center mt-6'>
                    <ul className='flex '>
                        <h3 className='text-primary text-2xl font-medium mr-2'>5.0</h3>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                    </ul>
                </div>
                <button className='font-normal text-lg  text-white bg-secandary py-3 px-7 rounded-[8px] mt-6 text-center'>Add to Cart</button>

                </div>
            </div>
            <div className='border border-solid border-primary rounded-[32px] p-8 text-center'>
                <img className='mx-auto' src={TopImg} alt="" />
                <div className='text-center mt-8'>
                <h3 className='text-2xl font-normal text-black'>Smart Mop Robot</h3>
                <h4 className='text-2xl text-secandary font-bold'>$1000.00</h4>
                <div className='flex justify-center mt-6'>
                    <ul className='flex '>
                        <h3 className='text-primary text-2xl font-medium mr-2'>5.0</h3>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                        <li className='text-[#FFD687] text-[32px] '><AiFillStar/></li>
                    </ul>
                </div>
                <button className='font-normal text-lg  text-white bg-secandary py-3 px-7 rounded-[8px] mt-6 text-center'>Add to Cart</button>

                </div>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default TopRated