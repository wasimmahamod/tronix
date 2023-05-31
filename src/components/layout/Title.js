import React from 'react'

const Title = ({headding}) => {
  return (
    <div className='text-center'>
    <h2 className='Headding text-[40px] lg:text-[56px] font-bold text-black'>{headding}</h2>
    <p className='text-lg font-normal leadding-8 text-primary w-auto  lg:w-[480px] inline-block mt-3 lg:mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
  </div>
  )
}

export default Title