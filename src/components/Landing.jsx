import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useNavigate } from "react-router-dom";
import videoHero from "../assets/videoHero.mp4";

const Landing = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };
  const openLogin = () => {
    const url = `${window.location.origin}/login`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      {
        scaleX: "100%",
      },
      {
        scaleX: "95%",
        ease: "power3.inOut",
        borderRadius: "3rem",
        scrollTrigger: {
          trigger: ".video",
          scrub: true,
          markers: false,
          start: "top center",
        },
      }
    );
  }, []);
  return (
    <div ref={ref} className="w-full h-screen overflow-hidden video ">
      <div className="w-full h-screen lg:h-screen md:h-screen">
        <video
          className="object-cover object-center w-full h-full "
          autoPlay
          loop
          muted
          src={videoHero}
        />
      </div>
      <div className="absolute lg:top-[30%] md:top-[63%] top-[65%] px-5  w-full lg:px-28 md:px-12 text-white ">
        <h1 className="lg:text-[110px] md:text-[50px] text-[45px] leading-[2.8rem] md:leading-[4.5rem] lg:w-[35%] lg:leading-[5.5rem] ">
          Finances made easy for you
        </h1>

        <h1 className="lg:mt-5 md:mt-2 mt-3 lg:text-[24.5px]  md:text-[25px] w-fit">
          Track, save and invest your money all in one place.
        </h1>

        <button
          on
          onClick={handleGoToLogin}
          className="get-started relative sm:px-20 px-28 py-3 sm:py-4 mt-6 text-black text-[20px] font-semibold bg-white login rounded-3xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
