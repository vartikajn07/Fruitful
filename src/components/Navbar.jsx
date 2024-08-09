import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import HamburgerMenu from "./HamburgerMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoLogin = () => {
    navigate("/login");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  return (
    <div className="fixed w-full h-[7vw] z-[2] bg-transparent lg:px-24  md:py-14 md:px-12 sm:py-14 sm:px-10 px-7 py-16  text-black flex items-center justify-between text-[18px] font-medium">
      <Link
        to="video"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="text-[22px] cursor-pointer z-[50]"
      >
        fruitful
      </Link>
      <div className="justify-between hidden text-black border border-none bg-backdrop  backdrop-blur-[5px] lg:gap-5 lg:py-3 md:py-2 lg:px-5 md:px-3 md:flex ml-[11rem] rounded-3xl">
        <Link
          to="benefits"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="flex items-center gap-2 cursor-pointer hover:text-dark-green "
        >
          <h1 className="">Membership benefits</h1>
          <IoIosArrowDown />
        </Link>
        <Link
          to="membership"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer hover:text-dark-green"
        >
          Pricing
        </Link>
      </div>
      <div className="flex gap-5">
        <button
          onClick={handleGoLogin}
          className="relative items-center hidden gap-2 px-5 py-2 border border-black anim md:flex rounded-3xl "
        >
          Log in <FaArrowRight />
        </button>

        <button
          onClick={handleGoLogin}
          className="relative hidden px-5 py-2 anim-btn sm:hidden md:block md:ml-0 sm:ml-64 rounded-3xl "
        >
          Get started
        </button>
      </div>
      <button className="block z-[50] cursor-pointer md:hidden ">
        <label class="hamburger">
          <input onClick={toggleMenu} type="checkbox" id="menu-toggle" />
          <svg viewBox="0 0 32 32">
            <path
              class="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path class="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </button>
      {isMenuOpen && (
        <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
    </div>
  );
};

export default Navbar;
