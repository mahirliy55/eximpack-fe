import Link from "next/link";
import React from "react";

export default function NavMenu() {
  return (
    <div className="items-center justify-center gap-x-7 text-white hidden md:flex">
      <Link href="/">Consulting</Link>
      <Link href="/catalog">Catalog</Link>
      <Link href="/about-us">About Us</Link>
    </div>
  );
}
