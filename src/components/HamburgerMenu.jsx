import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import gsap from "gsap";

const Hamburger = ({ toggleMenu }) => {
  const menuRef = useRef();
  const navigate = useNavigate();

  const handleGologin = () => {
    navigate("/login");
  };
  useEffect(() => {
    const el = menuRef.current;
    gsap.fromTo(
      el,
      {
        y: "-500",
        opacity: 0,
        borderRadius: "50%",
      },
      {
        y: 0,
        ease: "power3.inOut",
        duration: 1,
        opacity: 1,
        borderRadius: 0,
      }
    );
  }, []);

  return (
    <>
      <div
        ref={menuRef}
        className="fixed top-0 left-0 flex flex-col justify-center w-screen h-full px-6 overflow-hidden text-black bg-white sm:px-14 gap-14"
      >
        <div className="flex flex-col items-center justify-center w-full gap-3">
          <Link
            to="benefits"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={toggleMenu}
            className="sm:text-[30px] text-[25px] w-full cursor-pointer "
          >
            <h1 className="sm:pb-2">Member Benefits </h1>
            <hr className="border-black border-t-[1px]" />
          </Link>
          <Link
            to="membership"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={toggleMenu}
            className="sm:text-[30px] text-[25px] w-full cursor-pointer "
          >
            <h1 className="sm:pb-2">Pricing</h1>
            <hr className="border-black border-t-[1px]" />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGologin}
            className="menu-btn relative w-full px-3 sm:py-4 py-3 text-[20px] text-white bg-black rounded-2xl"
          >
            Log in
          </button>
          <button
            onClick={handleGologin}
            className="menu-secondbtn relative w-full px-3 sm:py-4 py-3 text-[20px] text-black bg-white border border-black rounded-2xl"
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
