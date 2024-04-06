import Image from "next/image";
import React from "react";
import Logo from "../public/logo-red.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-16 bg-[#252525] grid grid-cols-3 px-8">
      <Link href="/" className="flex items-center gap-x-3">
        <Image src={Logo} width={35} height={35} alt="Logo" />
        <h2 className="font-bold text-white text-2xl uppercase">Eximpack</h2>
      </Link>
      <div className="flex items-center justify-center gap-x-7 text-white">
        <Link href="/">Consulting</Link>
        <Link href="/catalog">Catalog</Link>
        <Link href="#">About Us</Link>
      </div>
      <div />
    </header>
  );
};

export default Header;
