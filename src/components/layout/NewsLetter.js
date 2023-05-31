import React from "react";
import Container from "./Container";

const NewsLetter = () => {
  return (
    <div className="mt-[100px] lg:mt-[160px] ">
      <Container>
        <div className="w-full p-10 lg:py-[103px] lg:px-[128px]  bg-[#C4C4C4] rounded-[32px] ">
          <h3 className="Headding text-[36px] lg:text-[48px] font-bold text-white ">Join our newsletter now!</h3>
          <p className="text-lg font-normal text-primary mt-4 ">Register now and get our latest updates and promos.</p>
          <div className="mt-[56px]  lg:w-[518px] relative">
            <input className="w-full  placeholder:text-lg font-normal placeholder:text-primary  py-4 px-8 rounded-2xl" placeholder="Enter your email" type="text" />
            <button className="text-lg font-bold bg-secandary py-4 px-8 rounded-2xl text-white absolute top-[-3px] right-[-3px] ">Join</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;
