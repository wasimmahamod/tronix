import React from "react";
import Container from "./Container";
import BannerImg from "../../images/banner.png";
import "slick-carousel/slick/slick.css";
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa' 

import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='bannerLeftArrow'
      style={{ ...style, display: "flex", background: "#FAFAFA",width:'48px',height:'48px', justifyContent:'center',alignItems:'center',borderRadius:"8px",boxShadow: '1px 2px 9px gray',position:"absolute",top:"50%",right:'-20px',color:'#F46B5B',fontSize:"24px" }}
      onClick={onClick}
    ><FaAngleRight/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="bannerRightArrow"
    style={{ ...style, display: "flex", background: "#FAFAFA",width:'48px',height:'48px', justifyContent:'center',alignItems:'center',borderRadius:"8px",boxShadow: '1px 2px 9px gray',position:"absolute",top:"50%",left:'-20px',zIndex:'999',color:'#F46B5B',fontSize:"24px"  }}
      onClick={onClick}
    ><FaAngleLeft/></div>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };
  return (
    <div className="mt-4 lg:mt-12">
      <Container>
        <Slider {...settings}>
        <div 
          className="bannersliderItem bg-no-repeat bg-center  relative "
        >
          <div className="pl-5 lg:pl-[104px] pb-7 lg:pb-[62px] relative z-50">
            <h1 className="banner__headding text-4xl lg:text-[56px] font-bold  text-black lg:w-[650px] pt-7 lg:pt-[54px]  leading-[65px] ">Better Devices for Better Life</h1>
            <p className="lg:w-[544px] text-lg lg:text-2xl font-normal lg:leading-10  mt-3 lg:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
            <a className="bg-secandary px-3  lg:px-7 py-2 lg:py-4 text-white rounded-[8px] inline-block text-base lg:text-lg font-normal mt-4 lg:mt-12 " href="#">Shop Now</a>
          </div>
          {/* <img className="absolute top-0 left-0 rounded-[32px]" src={BannerImg} alt="" /> */}
        </div>
        <div 
          className="bannersliderItem bg-no-repeat bg-center  relative "
        >
          <div className="pl-5 lg:pl-[104px] pb-7 lg:pb-[62px] relative z-50">
            <h1 className="banner__headding text-4xl lg:text-[56px] font-bold  text-black lg:w-[650px] pt-7 lg:pt-[54px]  leading-[65px] ">Better Devices for Better Life</h1>
            <p className="lg:w-[544px] text-lg lg:text-2xl font-normal lg:leading-10  mt-3 lg:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
            <a className="bg-secandary px-3  lg:px-7 py-2 lg:py-4 text-white rounded-[8px] inline-block text-base lg:text-lg font-normal mt-4 lg:mt-12 " href="#">Shop Now</a>
          </div>
          {/* <img className="absolute top-0 left-0 rounded-[32px]" src={BannerImg} alt="" /> */}
        </div>
        <div 
          className="bannersliderItem bg-no-repeat bg-center  relative "
        >
          <div className="pl-5 lg:pl-[104px] pb-7 lg:pb-[62px] relative z-50">
            <h1 className="banner__headding text-4xl lg:text-[56px] font-bold  text-black lg:w-[650px] pt-7 lg:pt-[54px]  leading-[65px] ">Better Devices for Better Life</h1>
            <p className="lg:w-[544px] text-lg lg:text-2xl font-normal lg:leading-10  mt-3 lg:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
            <a className="bg-secandary px-3  lg:px-7 py-2 lg:py-4 text-white rounded-[8px] inline-block text-base lg:text-lg font-normal mt-4 lg:mt-12 " href="#">Shop Now</a>
          </div>
          {/* <img className="absolute top-0 left-0 rounded-[32px]" src={BannerImg} alt="" /> */}
        </div>
        <div 
          className="bannersliderItem bg-no-repeat bg-center  relative "
        >
          <div className="pl-5 lg:pl-[104px] pb-7 lg:pb-[62px] relative z-50">
            <h1 className="banner__headding text-4xl lg:text-[56px] font-bold  text-black lg:w-[650px] pt-7 lg:pt-[54px]  leading-[65px] ">Better Devices for Better Life</h1>
            <p className="lg:w-[544px] text-lg lg:text-2xl font-normal lg:leading-10  mt-3 lg:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
            <a className="bg-secandary px-3  lg:px-7 py-2 lg:py-4 text-white rounded-[8px] inline-block text-base lg:text-lg font-normal mt-4 lg:mt-12 " href="#">Shop Now</a>
          </div>
          {/* <img className="absolute top-0 left-0 rounded-[32px]" src={BannerImg} alt="" /> */}
        </div>
        <div 
          className="bannersliderItem bg-no-repeat bg-center  relative "
        >
          <div className="pl-5 lg:pl-[104px] pb-7 lg:pb-[62px] relative z-50">
            <h1 className="banner__headding text-4xl lg:text-[56px] font-bold  text-black lg:w-[650px] pt-7 lg:pt-[54px]  leading-[65px] ">Better Devices for Better Life</h1>
            <p className="lg:w-[544px] text-lg lg:text-2xl font-normal lg:leading-10  mt-3 lg:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
            <a className="bg-secandary px-3  lg:px-7 py-2 lg:py-4 text-white rounded-[8px] inline-block text-base lg:text-lg font-normal mt-4 lg:mt-12 " href="#">Shop Now</a>
          </div>
          {/* <img className="absolute top-0 left-0 rounded-[32px]" src={BannerImg} alt="" /> */}
        </div>
      
   
      

        </Slider>
      </Container>
    </div>
  );
};

export default Banner;
