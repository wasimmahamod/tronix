import React from "react";
import Container from "./Container";
import SaleImg from "../../images/sale.png";

const Sale = () => {
  return (
    <div className="mt-[80px] lg:mt-[160px] ">
      <Container>
        <h2 className="Headding text-[30px] lg:text-[40px] 2xl:text-[56px] font-bold text-black text-center">
          Flash Sale
        </h2>
        <div className="flex flex-wrap 2xl:flex-nowrap gap-y-5 2xl:gap-y-0 justify-between mt-[43px] ">
          <div className="2xl:w-[376px] 2xl:h-[603px] p-2 rounded-[32px] bg-secandary text-center">
            <h3 className="text-[36px] font-medium text-white mt-12">
              Up to 30% Off!
            </h3>

            <div className="mt-[329px] ">
              <div>
                <h3 className="text-2xl font-bold text-white">Sale End In:</h3>
                <div className="flex mt-8 gap-x-6 justify-center ">
                  <div className="w-[80px] h-[80px] rounded-[16px] border border-solid border-white  flex justify-center items-center ">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white">2</h2>
                      <h4 className="font-normal text-lg text-white">Hrs</h4>
                    </div>
                  </div>
                  <div className="w-[80px] h-[80px] rounded-[16px] border border-solid border-white  flex justify-center items-center ">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white">16</h2>
                      <h4 className="font-normal text-lg text-white">Min</h4>
                    </div>
                  </div>
                  <div className="w-[80px] h-[80px] rounded-[16px] border border-solid border-white  flex justify-center items-center ">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white">27</h2>
                      <h4 className="font-normal text-lg text-white">Sec</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[376px] 2xl:h-[603px] p-2  relative z-50">
            <div className="rounded-[32px] border border-solid border-primary  ">
              <div className="relative ">
                <img className="relative z-[-1] " src={SaleImg} alt="" />
                <h4 className="text-lg font-medium text-white bg-secandary px-6 py-2.5 inline-block rounded-[8px]  absolute top-8 right-8">
                  25% OFF
                </h4>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-2xl font-normal text-black">
                  Wireless Microphone
                </h3>
                <h5 className="text-2xl font-medium text-primary mt-2">
                  <del>$29.99</del>
                  <span className=" text-secandary "> - $19.99</span>
                </h5>

                <div className="flex justify-center my-8">
                  <div className="w-[312px]">
                    <div className="flex justify-between">
                      <h3 className="text-lg text-black ">Available: 10 </h3>
                      <h3 className="text-lg text-black ">Sold: 5 </h3>
                    </div>
                    <progress
                      className="w-full h-4 accent-secandary"
                      value="32"
                      max="100"
                    >
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[376px] 2xl:h-[603px] p-2  relative z-50">
            <div className="rounded-[32px] border border-solid border-primary  ">
              <div className="relative ">
                <img className="relative z-[-1] " src={SaleImg} alt="" />
                <h4 className="text-lg font-medium text-white bg-secandary px-6 py-2.5 inline-block rounded-[8px]  absolute top-8 right-8">
                  25% OFF
                </h4>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-2xl font-normal text-black">
                  Air Purifier
                </h3>
                <h5 className="text-2xl font-medium text-primary mt-2">
                  <del>$29.99</del>
                  <span className=" text-secandary "> - $19.99</span>
                </h5>

                <div className="flex justify-center my-8">
                  <div className="w-[312px]">
                    <div className="flex justify-between">
                      <h3 className="text-lg text-black ">Available: 10 </h3>
                      <h3 className="text-lg text-black ">Sold: 5 </h3>
                    </div>
                    <progress
                      className="w-full h-4 accent-secandary"
                      value="32"
                      max="100"
                    >
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-[376px] 2xl:h-[603px] p-2  relative z-50">
            <div className="rounded-[32px] border border-solid border-primary  ">
              <div className="relative ">
                <img className="relative z-[-1] " src={SaleImg} alt="" />
                <h4 className="text-lg font-medium text-white bg-secandary px-6 py-2.5 inline-block rounded-[8px]  absolute top-8 right-8">
                  25% OFF
                </h4>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-2xl font-normal text-black">
                  Bluetooth Printer
                </h3>
                <h5 className="text-2xl font-medium text-primary mt-2">
                  <del>$29.99</del>
                  <span className=" text-secandary "> - $19.99</span>
                </h5>

                <div className="flex justify-center my-8">
                  <div className="w-[312px]">
                    <div className="flex justify-between">
                      <h3 className="text-lg text-black ">Available: 5 </h3>
                      <h3 className="text-lg text-black ">Sold: 2 </h3>
                    </div>
                    <progress
                      className="w-full h-4 accent-secandary"
                      value="32"
                      max="100"
                    >
                      {" "}
                      32%{" "}
                    </progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sale;
