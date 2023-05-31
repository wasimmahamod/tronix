import React, { useEffect, useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
const NavbarButtom = () => {
  let [show, setshow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      window.addEventListener("resize", (e) => {
        if (e.target.innerWidth < 1024) {
          setshow(false);
        } else {
          setshow(true);
        }
      });
    }
    scrollWidth();
    window.addEventListener('resize',scrollWidth)
  }, []);
  return (
    <div className="w-full mt-9 ">
      <div className="w-full flex justify-center relative">
        {show ? (
          <GrClose
            onClick={() => setshow(!show)}
            className="mx-auto block md:hidden absolute top-[-30px] text-xl "
          />
        ) : (
          <FaBars
            onClick={() => setshow(!show)}
            className="mx-auto block md:hidden absolute top-[-30px] text-xl"
          />
        )}
        {show && (
          <List className="w-full bg-secandary md:bg-transparent  block md:flex justify-center gap-x-12 text-lg font-normal p-2.5 md:p-0 text-white md:text-black">
            <ListItem className='mt-2'>Home</ListItem>
            <ListItem  className='mt-2'>About</ListItem>
            <ListItem className='mt-2'>Product</ListItem>
            <ListItem className='mt-2'>Blog</ListItem>
            <ListItem className='mt-2'>Contact</ListItem>
          </List>
        )}
      </div>
    </div>
  );
};

export default NavbarButtom;
