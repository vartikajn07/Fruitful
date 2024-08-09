import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FAQs = () => {
  const [selected, setSelected] = useState([]);
  const contentRefs = useRef([]);
  const ref = useRef();

  const toggle = (i) => {
    if (selected.includes(i)) {
      setSelected(selected.filter((index) => index !== i));
    } else {
      setSelected([...selected, i]);
    }
  };
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight = selected.includes(index)
          ? `${ref.scrollHeight}px`
          : "0";
      }
    });
  }, [selected]);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      {
        y: "50",
        opacity: 0,
      },
      {
        y: 0,
        ease: "power4.inOut",
        duration: 0.8,
        opacity: 1,

        scrollTrigger: {
          trigger: ".faq",
          scrub: true,
          markers: false,
          start: "top bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
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
      ref={ref}
      className="faq w-full min-h-[150vh]  sm:min-h-[130vh] pt-30 sm:py-20"
    >
      <div className="flex flex-col items-center justify-center sm:gap-14">
        <h1 className="md:text-[48px] md:tracking-wide font-semibold sm:text-[35px] text-[30px] leading-9 md:leading-normal md:w-fit text-center w-[18rem]">
          Frequently asked Questions
        </h1>
        <div className="flex flex-col items-center gap-5 py-5 md:gap-4 ">
          {data.map((item, i) => (
            <div
              key={i}
              onClick={() => toggle(i)}
              className="accordian accordian-btn md:w-[70rem] sm:w-[40rem] w-[20rem] md:px-12 sm:px-7 px-5 md:py-5 py-5 bg-blueish rounded-xl flex flex-col justify-center cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <h1 className="md:text-[22px] text-[20px]">{item.question}</h1>
                <span>
                  {" "}
                  {selected.includes(i) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                    </svg>
                  ) : (
                    <svg
                      className="rotate-first"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                    </svg>
                  )}
                </span>
              </div>

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                className={` content md:text-[20px] mt-3 md:leading-7 md:w-[59rem] sm:text-[18px] text-[15px] leading-5 sm:leading-6  accordian-content  bg-blueish ${
                  selected.includes(i)
                    ? "accordian-visible"
                    : "accordian-hidden"
                }`}
              >
                {selected == i ? "" : ""}
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: "What is fruitful?",
    answer:
      "Fruitful is a financial wellness membership that provides access to a number of benefits. The core benefits that we provide allows our members to organize and optimize their finances in a way that's simple, smart, stress-free, and sustainable. Members can improve their finances, make real progress toward goals, and eliminate stress. That sounds nice!",
  },
  {
    question: "How does it work?",
    answer:
      "Thinking about money can be stressful and confusing. It's all too common to have looming anxiety about your finances, feel overwhelmed, or be unsure about how to make progress toward your goals. Our all-encompassing membership makes managing your money easy, effective, and empowering. That means providing a real expert human to support and advise you at every turn. That means creating a blueprint with easy-to-implement steps. That means simpler, smarter ways to save and invest that support your personal goals. And that means doing it all at a transparent, more affordable cost.",
  },
  {
    question: "What can Fruitful help me with?",
    answer:
      "Any part of your life that involves money. Our Guides provide support and advice on each aspect of members' financial worlds while considering all aspects - from managing monthly finances and getting organized to saving and investing, from buying a home to negotiating compensation and choosing benefits, from strategizing around taxes to starting a family and combining finances, and from retirement to insurance and legacy planning.",
  },
  {
    question: "How much does Fruitful cost?",
    answer:
      "Our pricing is simple and transparent — ₹92 per month with a quarterly membership and discounts at longer durations. Fruitful members also get access to unique benefits on savings and tailored investment portfolios with no management fees and no minimums. We never try to sell financial products to members and our pricing doesn't change based on your financial profile. There are no setup or onboarding fees to become a member.",
  },
  {
    question: "How do I start?",
    answer:
      "Choose your Guide, sign-up to become a Fruitful Member (try it risk-free for 30 days), and schedule your 1st session. Tell us about you. Hear about us. Your financial wellness journey just started.",
  },
  {
    question: "What if I'm not sure Fruitful is the right fit for me?",
    answer:
      "Good news - your Fruitful membership is risk-free for the first 30 days. We're confident you'll feel better and do better in no time. But if you decide it's not a great a fit for you, you can cancel your membership in the first month and get a full refund—guaranteed.",
  },
];

export default FAQs;
