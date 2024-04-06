import React from "react";

import HeaderMenu from "./header-menu";
import NavMenu from "./nav-menu";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="w-full h-16 bg-[#252525] grid grid-cols-3 items-center px-4 md:px-8">
      <Logo />
      <NavMenu />
      <div />
      <HeaderMenu />
    </header>
  );
};

export default Header;
