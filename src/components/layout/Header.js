import React from "react";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook, AiOutlinePhone } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import ListItem from "./ListItem";
import List from "./List";

const Header = () => {
  return (
    <div className=" py-2 md:py-[18px] bg-white border-b border-solid border-[#E5E5E5]">
      <Container>
        <div className="md:flex  justify-between">
          <div>
            <List className="flex justify-center md:justify-start gap-x-8 text-primary text-2xl">
              <ListItem>
                <FaInstagram />
              </ListItem>
              <ListItem>
                <AiFillFacebook />
              </ListItem>
              <ListItem>
                <BsTwitter />
              </ListItem>
              <ListItem>
                <BsLinkedin />
              </ListItem>
            </List>
          </div>
          <div>
            <div className="md:flex gap-x-8 mt-4 md:mt-0">
              <div className="flex justify-center md:justify-start items-center gap-x-4">
                <AiOutlinePhone className="text-secandary text-2xl" />
                <h3 className="text-black text-lg font-normal">
                  +12 345 6789 0
                </h3>
              </div>
              <div className="flex justify-center md:justify-start  items-center gap-x-4">
                <MdOutlineMessage className="text-secandary text-2xl" />
                <h3 className="text-black text-lg font-normal">
                  support@tronix.com
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
