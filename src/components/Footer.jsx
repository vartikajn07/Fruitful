import React from "react";

const Footer = () => {
  return (
    <footer class=" bg-gray-50">
      <div className="container px-6 md:px-[14rem] py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-6">
          <div className="md:col-span-2 sm:col-span-2">
            <h1 className=" sm:text-[30px] text-2xl text-dark-green cursor-pointer ">
              Fruitful
            </h1>
          </div>
          <div>
            <p className="font-semibold text-[16px] text-black cursor-pointer">
              Explore Fruitful
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 cursor-pointer">Login</p>
              <p className="text-gray-600 cursor-pointer ">Pricing</p>
              <p className="text-gray-600 cursor-pointer ">Legal</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[16px] text-black cursor-pointer">
              Careers
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 cursor-pointer">Email</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px] text-black cursor-pointer">
              Social
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 cursor-pointer ">Instagram</p>
              <p className="text-gray-600 cursor-pointer">LinkedIn</p>
              <p className="text-gray-600 cursor-pointer ">Tiktok</p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px] text-black cursor-pointer">
              Support
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 cursor-pointer">Contact desk</p>
            </div>
          </div>
        </div>

        <hr className="h-2 my-2 border-gray-200 md:my-3 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className=" text-start sm:text-[16px] text-[12px]">
            Fruitful &copy; 2024
          </h1>
          <h1 className="sm:text-[16px] text-[12px]">Made by Vartika</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
