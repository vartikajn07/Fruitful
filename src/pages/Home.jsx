import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Guides from "../components/Guides";
import Benefits from "../components/Benefits";
import Membership from "../components/Membership";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    document.title = "Fruitful- Finances made easy for you!";
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="w-full min-h-full overflow-hidden main"
    >
      <Navbar />
      <Landing />
      <About />
      <Guides />
      <Benefits />
      <Membership />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
