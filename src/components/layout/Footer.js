import React from 'react'
import Container from './Container'
import Flogo from '../../images/flogo.png'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {CiMail} from 'react-icons/ci'
import {RiVisaLine,RiMastercardLine,RiPaypalLine} from 'react-icons/ri'
import {AiFillFacebook,AiOutlinePhone} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='mt-[80px] '>
        <Container>
            <div className="lg:flex justify-between">
                <div className='w-2/4'>
                    <img src={Flogo} alt="" />
                    <p className='text-lg font-normal text-black w-[381px]  leading-[32px] mt-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                    <ul className='mt-12'>
                        <li className='text-[40px] p-2 rounded-md bg-secandary inline-block text-white'><FiInstagram/></li>
                        <li className='text-[40px] p-2 rounded-md bg-secandary inline-block ml-6 text-white'><FaTwitter/></li>
                        <li className='text-[40px] p-2 rounded-md bg-secandary inline-block text-white ml-6'><AiFillFacebook/></li>
                    </ul>
                </div>
                <div className='lg:w-[15%] '>
                    <h3 className='Headding font-bold text-2xl text-black mb-8'>Company</h3>
                    <ul className=''>
                        <li className='text-lg font-normal text-black mb-4'>About</li>
                        <li className='text-lg font-normal text-black mb-4'>Products</li>
                        <li className='text-lg font-normal text-black mb-4'>Contact</li>
                        <li className='text-lg font-normal text-black mb-4'>Blog</li>
                        <li className='text-lg font-normal text-black mb-4'>Careers</li>
                     
                    </ul>
                </div>
                <div className='lg:w-[20%] '>
                    <h3 className='Headding font-bold text-2xl text-black mb-8'>Information</h3>
                    <ul className=''>
                        <li className='text-lg font-normal text-black mb-4'>Help Center </li>
                        <li className='text-lg font-normal text-black mb-4'>Payment Methods</li>
                        <li className='text-lg font-normal text-black mb-4'>Return & Refund</li>
                        <li className='text-lg font-normal text-black mb-4'>Privacy Policy</li>
                     
                    </ul>
                </div>
                <div className='lg:w-[15%] '>
                    <h3 className='Headding font-bold text-2xl text-black mb-8'>Contact</h3>
                   <h4 className='flex text-lg font-normal  text-black items-center gap-x-2'><AiOutlinePhone className='text-secandary'/> +1234567890</h4>
                   <h4 className='flex text-lg font-normal  text-black items-center gap-x-2 mt-4'><CiMail className='text-secandary'/> support@tronix.com</h4>
                </div>
            </div>
            <div className='w-full h-[.5px] lg:h-[1px] border border-solid border-primary lg:mt-[127px] '></div>
            <div className='flex items-center flex-wrap justify-between mt-11 lg:mb-[60px] '>
                <h4 className='text-xs font-normal text-black '>Copyright © 2021 Tronix. All Right Reseved</h4>
                <ul className='flex  gap-x-4'>
                  
                    <li className='text-[32px]  text-black '><RiMastercardLine/></li>
                    <li className='text-[32px]  text-black '><RiVisaLine/></li>
                    <li className='text-[32px]  text-black '><RiPaypalLine/></li>
                </ul>
            </div>
        </Container>
    </footer>
  )
}

export default Footer