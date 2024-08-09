import React, { useEffect, useRef } from "react";
import Benefitscard from "./BenefitsCard/Benefitscard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const benefitsRef = useRef();
  useEffect(() => {
    const el = benefitsRef.current;

    gsap.fromTo(
      el,
      {
        y: "50",
        opacity: 0,
      },
      {
        y: 0,
        ease: "power3.inOut",
        duration: 0.3,
        opacity: 1,

        scrollTrigger: {
          trigger: ".benefits-header",
          markers: true,
          start: "top bottom",
          end: "center top",
          scrub: true,
        },
      }
    );
    return () => {
      // Clean up ScrollTrigger instances on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      data-scroll
      data-scroll-speed="0.3"
      id="benefits"
      className="flex flex-col justify-center gap-10 sm:gap-20 md:gap-20 md:px-36 sm:px-14 px-[0.5] py-5 min-h-[100vh] sm:py-2 md:py-14 md:min-h-[130vh] sm:min-h-[150vh] bg-sky-100"
    >
      <div
        ref={benefitsRef}
        className="flex flex-col items-center justify-center gap-2 benefits-header"
      >
        <h1 className="md:text-[50px] text-[30px] sm:text-[40px] w-[10rem] text-center leading-9 sm:leading-normal sm:w-fit font-semibold">
          Membership Benefits
        </h1>
        <h1 className="sm:w-[26rem] w-[18rem] text-[18px] leading-[1.3rem] text-center sm:text-[20px] sm:leading-6 md:leading-7">
          Get expert advice and access to smarter, simpler ways to save and
          invest all in one place.
        </h1>
      </div>
      <Benefitscard />
    </div>
  );
};

export default Benefits;
