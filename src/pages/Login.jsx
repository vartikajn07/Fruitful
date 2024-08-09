import React, { useEffect, useRef } from "react";
import LoginBackground from "../assets/LoginBackground.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const LoginRef = useRef();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  useEffect(() => {
    document.title = "Fruitful- Get Started";
  }, []);
  return (
    <div className="w-screen h-screen overflow-hidden md:w-full md:h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full md:flex-row ">
        <div className="md:w-[85rem] w-full sm:h-[40%] h-[30%] md:h-full md:order-2 order-1">
          <img
            className="object-cover w-full h-full rounded-bl-2xl rounded-br-2xl md:rounded-tl-2xl md:rounded-bl-2xl"
            src={LoginBackground}
            alt=""
          />
          <div className="absolute md:top-[27rem] sm:top-[13rem] top-[7rem] md:right-[4rem] sm:right-[2rem] left-[10rem] sm:left-auto md:w-[41rem]  ">
            <h1 className=" text-white md:text-[60px] sm:text-[33px] text-[21px] font-semibold text-right md:leading-[4rem] leading-5 tracking-wider w-[12rem] sm:w-fit ">
              Start your financial wellness journey.
            </h1>
            <h1 className="text-dark-green md:text-[25px] sm:text-[18px] lg:mr-3 text-[13px] w-[9rem] ml-12 sm:ml-auto sm:w-fit md:text-left text-right md:mt-2 sm:mt-4 mt-1 leading-4 md:leading-normal">
              Get going, get growing, get on track in 30 days.
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center sm:justify-center order-2 md:w-1/2 w-full sm:px-20 sm:py-6 pt-16 sm:pt-auto md:py-0  md:h-full sm:h-[60%] h-[70%] md:order-1 ">
          <div
            onClick={handleGoHome}
            className="absolute flex items-center gap-1 md:top-10 top-8 md:left-16 left-9"
          >
            <FaArrowLeft />
            <button className=" md:text-[20px] text-[18px]">back</button>
          </div>

          <h1 className="md:text-[46px] sm:text-[40px] text-[30px] font-semibold text-dark-green">
            Get Started.
          </h1>
          <h1 className="md:text-[22px] sm:text-[20px] text-[15px] mt-3 sm:mt-1">
            Membership is risk-free for 30 days.
          </h1>
          <h1 className="sm:text-[18px] text-[14px] sm:w-[19rem] w-[11rem] sm:leading-6 leading-4 lg:mt-1 text-center ">
            Try Fruitful for a month! Not your thing? Get a full refund. No
            fuss.
          </h1>
          <input
            placeholder="Your email address"
            className="sm:w-[25rem] md:mt-32 w-[16rem] sm:mt-20 mt-16 sm:py-3 py-3 sm:px-5 px-3 sm:text-[20px] text-[15px] border border-black sm:rounded-2xl rounded-lg"
          ></input>
          <button className="relative overflow-hidden anim-btn sm:py-3 py-3 sm:mt-4 mt-2 text-white sm:text-[20px] text-[15px] sm:px-[10.3rem] px-[6.5rem] bg-dark-green sm:rounded-2xl rounded-lg">
            Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
