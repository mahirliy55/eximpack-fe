import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-x-3">
      <Image src="/logo-red.svg" width={35} height={35} alt="Logo" />
      <h2 className="font-bold text-white text-2xl uppercase">Eximpack</h2>
    </Link>
  );
}
