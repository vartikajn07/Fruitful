import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const animref = useRef();
  useEffect(() => {
    const el = animref.current;

    gsap.fromTo(
      el,
      {
        y: "30",
        opacity: 0,
      },
      {
        y: 0,
        ease: "power3.inOut",
        duration: 0.6,
        opacity: 1,

        scrollTrigger: {
          trigger: ".about",
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
      ref={animref}
      className="flex flex-col items-center justify-center w-full min-h-[90vh] gap-20 mt-7 about md:pt-10 md:gap-36 "
    >
      <div>
        <h1 className="lg:text-[60px] text-[30px] sm:text-[5vw] sm:leading-[3rem] leading-[2.2rem]  text-center lg:leading-[4.3rem] font-medium w-[65vw]">
          Work with Fruitful who understands you. Get organized, optimized, and
          on track to hit your goals in no time.
        </h1>
      </div>
      <div className="flex flex-col items-center gap-2 text-center min-w-fit">
        <h1 className="lg:text-[60px] text-[30px] sm:text-[5vw] sm:leading-[3rem] w-[70vw] leading-8   lg:leading-[4.3rem] font-medium lg:w-[50vw]">
          A partner and a platform that make money simple.
        </h1>
        <h1 className="lg:text-[20px] text-[20px] w-[60vw]   md:w-[25vw] lg:leading-7  font-medium">
          Take control of your finances with expert human help and a single
          intuitive place to track it all.
        </h1>
      </div>
    </div>
  );
};

export default About;
