import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TiltCard1 from "./TiltCards/TiltCard1";
import TiltCard2 from "./TiltCards/TiltCard2";
import TiltCard3 from "./TiltCards/TiltCard3";

const Benefitscard = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="swiper h-[95vh] sm:h-[100vh] md:h-[80vh] w-full bg-white rounded-2xl flex md:flex-row flex-col sm:justify-around justify-center gap-5 md:px-32 sm:px-8 py-2 sm:py-8 px-2 md:py-16 ">
            <div className="flex flex-col items-start justify-center order-2 md:w-1/2 sm:h-1/2 md:h-full md:order-1 ">
              <h1 className="md:text-[20px] sm:text-[20px] text-[18px] ">
                Guidance
              </h1>
              <h1 className="md:text-[30px] md:w-[22rem] sm:text-[25px] text-[18px] font-semibold sm:leading-8">
                Talk to a human. An expert. A Fruitful Guide.
              </h1>
              <ul className="md:w-[28rem] sm:w-[38rem] md:text-[20px] sm:text-[18px] text-[18px] leading-5 sm:leading-5 lg:leading-7 md:pb-5 sm:pt-6 pt-3 px-2 list-disc ml-3">
                <li>
                  Dedicated advice and support on all aspects of your finances
                  from a Fruitful Guide.
                </li>
                <li>
                  1-to-1 video sessions focused on organizing your finances,
                  building wealth, and making real progress.
                </li>
                <li>
                  Ongoing progress check-ins, quick syncs and anytime messaging.
                </li>
                <li>
                  A clear blueprint to hit your goals with simple steps that
                  your Guide helps you implement.
                </li>
              </ul>
              <button
                className="relative md:px-10 py-3 text-lg sm:px-[13rem] anim-btn md:mt-3 sm:mt-1 md:block md:ml-0 sm:ml-16 rounded-3xl
              px-20 mt-5 ml-10 sm:text-lg anim-btn"
              >
                Tell me more
              </button>
            </div>
            <TiltCard1 />
          </div>
        </div>
        <div>
          <div className="swiper h-[90vh] sm:h-[100vh] md:h-[80vh] w-full bg-white rounded-2xl flex md:flex-row flex-col sm:justify-around justify-center gap-5 md:px-32 sm:px-8 py-2 sm:py-8 px-2 md:py-16 ">
            <div className="flex flex-col items-start justify-center order-2 md:w-1/2 sm:h-1/2 md:h-full md:order-1 ">
              <h1 className="md:text-[20px] text-[20px]">Save</h1>
              <h1 className=" md:text-[30px] md:w-[24rem] text-[18px] font-semibold leading-10 sm:leading-8 sm:text-[25px] ">
                Earn 5% on savings set up for your goals.
              </h1>
              <ul className="md:w-[28rem] sm:w-[38rem] md:text-[20px] sm:text-[20px] text-[18px] leading-5 sm:leading-7 md:pb-5 sm:pt-6 pt-3 px-2 list-disc ml-3">
                <li>
                  Dedicated advice and support on all aspects of your finances
                  from a Fruitful Guide.
                </li>
                <li>
                  1-to-1 video sessions focused on organizing your finances,
                  building wealth, and making real progress.
                </li>
                <li>
                  Ongoing progress check-ins, quick syncs and anytime messaging.
                </li>
              </ul>
              <button
                className="relative md:px-10 py-3 text-lg sm:px-[13rem] anim-btn md:mt-5 sm:mt-4 md:block md:ml-0 sm:ml-12 rounded-3xl
              px-20 mt-5 ml-10  sm:text-lg anim-btn"
              >
                Tell me more
              </button>
            </div>
            <TiltCard2 />
          </div>
        </div>
        <div>
          <div className="swiper h-[90vh] sm:h-[100vh] md:h-[80vh] w-full bg-white rounded-2xl flex md:flex-row flex-col sm:justify-around justify-center gap-5 md:px-32 sm:px-8 py-2 sm:py-8 px-2 md:py-16 ">
            <div className="flex flex-col items-start justify-center order-2 md:w-1/2 sm:h-1/2 md:h-full md:order-1 ">
              <h1 className="md:text-[20px] text-[20px]">Invest</h1>
              <h1 className="md:text-[30px] md:w-[24rem] text-[18px] font-semibold sm:leading-8 leading-10 sm:text-[25px]">
                A smarter way to start or scale your investing.
              </h1>
              <ul className="md:w-[28rem] sm:w-[38rem] md:text-[20px] sm:text-[18px] text-[18px] leading-5 sm:leading-7 md:pb-5 sm:pt-6 pt-3 px-2 list-disc ml-3">
                <li>
                  Portfolios built by experts, an investment approach tailored
                  to you.
                </li>
                <li>Advice from your Fruitful Guide at every step.</li>
                <li>0% management fees.</li>
                <li>No investment minimums, start with as little as ₹50.</li>
              </ul>
              <button
                className="relative md:px-10 py-3 text-lg sm:px-[13rem] anim-btn md:mt-5 sm:mt-5 md:block md:ml-0 sm:ml-14 rounded-3xl
              px-20 mt-5 ml-10 sm:text-lg anim-btn "
              >
                Tell me more
              </button>
            </div>
            <TiltCard3 />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Benefitscard;
