import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[220px] bg-white border-t mt-2">
      <div className="md:w-[65%] w-full mx-auto md:p-10 p-4">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="flex md:flex-row flex-col items-center md:gap-x-4 gap-x-0">
            <Image
              src="/logo-black.svg"
              alt="Eximpak"
              width={200}
              height={50}
              className="w-[70px] h-[70px]"
            />
            <span className="md:max-w-[425px] w-full md:text-base text-xs text-center md:text-start">
              RAKEZ building, RAK Economic Zone, Ras Al Khaiman, UAE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="md:text-base text-xs">TRN 104077697100001</span>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <Link href="mailto:director@eximpack.ae" className="text-[#0671ef]">
            director@eximpack.ae
          </Link>
          <Link href="tel:+971561062061" className="text-[#0671ef]">
            +971561062061
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
