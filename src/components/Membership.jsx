import React, { useEffect, useRef, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Membership = () => {
  const memberRef = useRef();
  useEffect(() => {
    const el = memberRef.current;

    gsap.fromTo(
      el,
      {
        x: "150",
        opacity: 0,
      },
      {
        x: 0,
        ease: "power3.inOut",
        duration: 0.001,
        opacity: 1,

        scrollTrigger: {
          trigger: ".membership",
          markers: false,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
    const handleCardEnter = () => {
      gsap.to(el, { scale: 1.1, duration: 0.05 });
    };
    const handleCardLeave = () => {
      gsap.to(el, { scale: 1, duration: 0.05 });
    };
    el.addEventListener("mouseenter", handleCardEnter);
    el.addEventListener("mouseleave", handleCardLeave);
    return () => {
      // Clean up ScrollTrigger instances on component unmount
      el.removeEventListener("mouseenter", handleCardEnter);
      el.removeEventListener("mouseleave", handleCardLeave);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const memberRef2 = useRef();
  useEffect(() => {
    const el = memberRef2.current;

    gsap.fromTo(
      el,
      {
        x: "-150",
        opacity: 0,
      },
      {
        x: 0,
        ease: "power3.inOut",
        duration: 0.001,
        opacity: 1,

        scrollTrigger: {
          trigger: ".membership",
          markers: false,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
    const handleCardEnter = () => {
      gsap.to(el, { scale: 1.1, duration: 0.05 });
    };
    const handleCardLeave = () => {
      gsap.to(el, { scale: 1, duration: 0.05 });
    };
    el.addEventListener("mouseenter", handleCardEnter);
    el.addEventListener("mouseleave", handleCardLeave);
    return () => {
      // Clean up ScrollTrigger instances on component unmount
      el.removeEventListener("mouseenter", handleCardEnter);
      el.removeEventListener("mouseleave", handleCardLeave);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [isClicked1, setisClicked1] = useState(true);
  const [isClicked2, setisClicked2] = useState(false);

  const handleClick1 = () => {
    setisClicked2(false);
    setisClicked1(!isClicked1);
  };
  const handleClick2 = () => {
    setisClicked1(false);
    setisClicked2(!isClicked2);
  };

  const [hoveredCard, setHoveredCard] = useState(1); // Initially, the second card is hovered

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(1); // Reset hover state when the mouse leaves any card
  };

  //hover over card
  return (
    <div
      id="membership"
      className="membership flex flex-col items-center justify-center w-full lg:pb-10 py-14  md:gap-5 sm:gap-10 gap-2 lg:gap-10 lg:h-[140vh] sm:h-[240vh] h-[240vh]"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="sm:text-[40px] text-[33px] font-semibold">
          Fruitful Membership
        </h1>
        <h1 className="sm:text-[17px] text-[15px]">
          Membership is risk-free for 30 days.
        </h1>
        <div className="flex flex-col gap-4 mt-5 sm:gap-10 sm:flex-row">
          <button
            onClick={handleClick1}
            className={`button ${
              isClicked1 ? "clicked" : "unclicked"
            } px-16 py-2 border border-black  font-medium  rounded-2xl cursor-pointer `}
          >
            <div className="flex flex-col ">
              <h1 className="font-semibold">Solo</h1>
              <h1 className="text-[13px] ">For just you</h1>
            </div>
          </button>
          <button
            onClick={handleClick2}
            className={`button ${
              isClicked2 ? "clicked" : "unclicked"
            } px-7 py-2 border border-black text-black font-medium rounded-2xl cursor-pointer `}
          >
            <div className="flex flex-col ">
              <h1 className="font-semibold">Joint</h1>
              <h1 className="text-[13px] ">For you and your partner</h1>
            </div>
          </button>
        </div>
      </div>
      <div className="cards lg:h-[24rem] lg:w-[82rem] h-[82rem] flex lg:flex-row flex-col justify-center items-center gap-8 ">
        <div
          ref={memberRef}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className={`${
            hoveredCard === 0 ? "bg-hover" : "bg-white"
          }  border card sm:h-[18rem] sm:w-[23rem] h-[15rem] w-[20rem] lg:py-5 flex flex-col sm:justify-evenly justify-center items-center rounded-3xl cursor-pointer shadow-2xl md:-rotate-3 md:translate-y-5 `}
        >
          <div className="flex flex-col items-center justify-center ">
            <h1 className="absolute sm:top-10 top-8 sm:left-[7.2rem] left-[6rem] text-dark-green text-[25px] font-semibold">
              &#8377;
            </h1>
            <h1 className="text-dark-green sm:text-[70px] text-[60px] font-semibold sm:h-[5.5rem]">
              {isClicked1 ? "98" : "148"}
            </h1>

            <h1 className="text-dark-green text-[20px] font-bold">Monthly</h1>
            <h1 className="text-dark-green text-[15px]">
              {isClicked1 ? " ₹98 paid every month." : "₹148 paid every month."}
            </h1>
            <button className="cards-btn sm:px-24 sm:py-3 px-10 py-2 font-semibold sm:mt-12 mt-6 border border-dark-green rounded-xl text-[16px] text-dark-green">
              Start with monthly
            </button>
          </div>
        </div>
        <div
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className={`${
            hoveredCard === 1 ? "bg-hover" : "bg-white"
          } border hover:scale-110  relative card sm:h-[18rem] sm:w-[23rem] h-[15rem] w-[20rem] flex flex-col sm:justify-evenly justify-center items-center rounded-3xl cursor-pointer shadow-2xl`}
        >
          <h1 className="absolute sm:top-[10.2rem] sm:mt-1 text-[14px] sm:px-8 px-8 sm:py-1 py-1 rounded-2xl font-semibold text-dark-green bg-light-green">
            Most popular
          </h1>
          <div className="flex flex-col items-center justify-center">
            <h1 className="absolute sm:top-10 top-8 sm:left-[7.2rem] left-[6rem] text-dark-green text-[25px] font-semibold">
              &#8377;
            </h1>
            <h1 className="text-dark-green sm:text-[70px] text-[60px] font-semibold sm:h-[5.5rem]">
              {isClicked1 ? "92" : "135"}
            </h1>
            <h1 className="text-dark-green text-[20px] font-bold">Quarterly</h1>
            <h1 className="text-dark-green text-[15px]">
              {isClicked1
                ? "₹275 paid every 3 months."
                : "₹415 paid every 3 months."}
            </h1>
            <button className="cards-btn sm:px-24 sm:py-3 px-10 py-2 font-semibold sm:mt-12 mt-6 border border-dark-green rounded-xl text-[16px] text-dark-green">
              Start with quarterly
            </button>
          </div>
        </div>
        <div
          ref={memberRef2}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          className={`${
            hoveredCard === 2 ? "bg-hover" : "bg-white"
          }  border card sm:h-[18rem] sm:w-[23rem] h-[15rem] w-[20rem] flex flex-col sm:justify-evenly justify-center items-center rounded-3xl cursor-pointer shadow-2xl md:rotate-3 md:translate-y-5`}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="absolute sm:top-10 top-8 sm:left-[7.2rem] left-[6rem] text-dark-green text-[25px] font-semibold">
              &#8377;
            </h1>
            <h1 className="text-dark-green sm:text-[70px] text-[60px] font-semibold sm:h-[5.5rem]">
              {isClicked1 ? "83" : "125"}
            </h1>
            <h1 className="text-dark-green text-[20px] font-bold">Annually</h1>
            <h1 className="text-dark-green text-[15px]">
              {isClicked1 ? "₹998 paid every year." : "₹1,498 paid every year."}
            </h1>
            <button className="cards-btn sm:px-24 sm:py-3 px-10 py-2 font-semibold sm:mt-12 mt-6 border border-dark-green rounded-xl text-[16px] text-dark-green">
              Start with annually
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 md:gap-8 sm:px-16 lg:px-0 lg:pt-10 h-[49rem] md:h-[20rem] md:w-[49rem]">
        <h1 className="md:text-[23px] text-[20px] font-semibold">
          All plans provide access to
        </h1>
        <div className="flex flex-col items-center gap-5 px-6 md:px-0 md:flex-row md:gap-8 md:justify-center ">
          <div className="flex flex-col gap-5 md:w-1/2">
            <div className="flex gap-3">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g data-name="60-Check">
                  <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
                  <path d="m13 20.59-4.29-4.3-1.42 1.42 5 5a1 1 0 0 0 1.41 0l11-11-1.41-1.41z" />
                </g>
              </svg>
              <h1 className="md:text-[18px] md:leading-7 text-[18px]">
                Expert advice and support from your dedicated Guide, a Fruitful
                Professional
              </h1>
            </div>
            <div className="flex items-start gap-3">
              <svg
                className="w-12 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g data-name="60-Check">
                  <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
                  <path d="m13 20.59-4.29-4.3-1.42 1.42 5 5a1 1 0 0 0 1.41 0l11-11-1.41-1.41z" />
                </g>
              </svg>
              <h1 className="md:text-[18px] md:leading-7 text-[18px]">
                1-to-1 video sessions focused on hitting your goals with
                progress check-ins, quick syncs and anytime messaging
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:w-1/2">
            <div className="flex gap-3">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g data-name="60-Check">
                  <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
                  <path d="m13 20.59-4.29-4.3-1.42 1.42 5 5a1 1 0 0 0 1.41 0l11-11-1.41-1.41z" />
                </g>
              </svg>
              <h1 className="md:text-[18px] md:leading-7 text-[18px]">
                Personalised support and guidance with simple and transparent
                pricing
              </h1>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-12 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g data-name="60-Check">
                  <path d="M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z" />
                  <path d="m13 20.59-4.29-4.3-1.42 1.42 5 5a1 1 0 0 0 1.41 0l11-11-1.41-1.41z" />
                </g>
              </svg>
              <h1 className="md:text-[18px] md:leading-7 text-[18px]">
                Tailored investment portfolios with expert support at every
                crucial step on your way, no management fees
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
