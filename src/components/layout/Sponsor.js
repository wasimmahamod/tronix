import React from 'react'
import Logo1 from '../../images/logop1.png'
import Logo2 from '../../images/logop2.png'
import Logo3 from '../../images/logop3.png'
import Logo4 from '../../images/logop4.png'
import Logo5 from '../../images/logop5.png'
import Logo6 from '../../images/logop6.png'
import Container from './Container'

const Sponsor = () => {
  return (
    <div className='mt-[80px] lg:mt-[160px] '>
        <Container>
            <div className='flex flex-wrap gap-y-2 xl:gap-y-0 xl:flex-nowrap gap-x-[80px] justify-center'>
                <img className='mt-5 lg:mt-0' src={Logo1} alt="" />
                <img className='mt-5 lg:mt-0' src={Logo2} alt="" />
                <img className='mt-5 lg:mt-0' src={Logo3} alt="" />
                <img className='mt-5 lg:mt-0' src={Logo4} alt="" />
                <img className='mt-5 lg:mt-0' src={Logo5} alt="" />
                <img className='mt-5 lg:mt-0' src={Logo6} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Sponsor