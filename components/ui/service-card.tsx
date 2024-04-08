import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  title: string;
  color: string;
  order: number;
}

export default function ServiceCard({ title, color, order }: ServiceCardProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="max-w-[350px] sm:min-w-[320px] rounded-lg w-full h-[287px] p-5 flex flex-col justify-between"
    >
      <Image
        src={order === 0 ? "/tech.png" : order === 1 ? "/mod.png" : "/doc.png"}
        alt={title}
        width={160}
        height={160}
      />
      <span className="text-white text-lg">{title}</span>
    </div>
  );
}
