import React from "react";
import Container from "./Container";
import Logo from "../../images/logo.png";
import Search from "../../images/search.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="mt-[30px] ">
      <Container>
        <div className="md:flex justify-between items-center">
          <div className="flex justify-center md:justify-start">
            <img src={Logo} alt="" />
          </div>
          <div className="flex justify-center md:justify-start gap-x-8 mt-3 md:mt-0">
            <img src={Search} alt="" />
            <div className="relative lg:w-[648px] w-auto">
              <input
                className="w-full py-3 px-8 placeholder:text-lg text-primary rounded-lg"
                type="text"
                placeholder="Search here"
              />
              <div className="bg-secandary p-3 absolute top-0 right-0 rounded-r-lg">
                <AiOutlineSearch className=" text-2xl text-white   " />
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center mt-3 md:mt-0">
            <div className="flex gap-x-8">
            <div className="relative ">
              <FaShoppingBag className="text-2xl text-black" />
              <div className="w-6 h-6 rounded-full bg-secandary  text-base text-white flex justify-center items-center absolute top-[-15px] right-[-15px]">99</div>
            </div>
            <div>
              <RiMessage2Fill className="text-2xl text-black" />
            </div>

            </div>
            <div className="ml-[60px] ">
              <button className="text-secandary underline text-sm xl:text-lg">Sing In</button>
            </div>
            <div className="ml-8 ">
              <button className="text-white bg-secandary px-3 py-2 x;:px-10 xl:py-4 rounded-[8px] text-sm xl:text-lg text-normal hover:bg-black ease-in-out duration-300">Sign Up</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
