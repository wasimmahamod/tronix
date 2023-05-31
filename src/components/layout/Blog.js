import React from 'react'
import Container from './Container'
import Blogimg from '../../images/blog.png'

const Blog = () => {
  return (
    <div className='mt-[100px] xl:mt-[160px] '>
        <Container>
        <h2 className='Headding text-[56px] font-bold text-black text-center mb-[80px] '>Blog</h2>
        <div className='flex  flex-wrap  gap-y-2 xl:gap-y-0   justify-between'>
            <div className='border border-solid border-primary rounded-[32px]  text-center'>
                <img className='mx-auto' src={Blogimg} alt="" />
                <div className='px-8'>
                <h3 className='text-2xl font-medium text-black xl:w-[448px] mt-8 '>We Offer the Best Quality Product to Our Customers</h3>

                <h5 className='text-lg font-normal text-primary mt-8 mb-10'>by <span className='text-secandary'>Admin</span>, 12 Jan 2021</h5>

                </div>
            </div>
            <div className='border border-solid border-primary rounded-[32px] text-center'>
                <img className='mx-auto' src={Blogimg} alt="" />
                <div className='px-8'>
                <h3 className='text-2xl font-medium text-black xl:w-[448px] mt-8 '>We Offer the Best Quality Product to Our Customers</h3>

                <h5 className='text-lg font-normal text-primary mt-8 mb-10'>by <span className='text-secandary'>Admin</span>, 12 Jan 2021</h5>

                </div>
            </div>
            <div className='border border-solid border-primary rounded-[32px] text-center'>
                <img className='mx-auto' src={Blogimg} alt="" />
                <div className='px-8'>
                <h3 className='text-2xl font-medium text-black xl:w-[448px] mt-8 '>We Offer the Best Quality Product to Our Customers</h3>

                <h5 className='text-lg font-normal text-primary mt-8 mb-10'>by <span className='text-secandary'>Admin</span>, 12 Jan 2021</h5>

                </div>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Blog