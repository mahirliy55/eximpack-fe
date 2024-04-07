import React from "react";

import HeaderMenu from "./header-menu";
import NavMenu from "./nav-menu";
import Logo from "./logo";
import Image from "next/image";
import Owl from "@/public/owl.svg";

const Header = () => {
  return (
    <header className="w-full h-16 bg-[#252525] grid md:grid-cols-3 grid-cols-2 items-center px-4 md:px-8">
      <Logo />
      <NavMenu />
      {/* <Image
        src={Owl}
        alt="owl"
        width={25}
        height={25}
        className="justify-self-end hidden md:block"
      /> */}
      <HeaderMenu />
    </header>
  );
};

export default Header;
