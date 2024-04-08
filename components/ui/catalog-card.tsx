import Image from "next/image";
import React from "react";
import { Catalog } from "@/lib/definitions";

interface CatalogCardProps {
  catalog: Catalog;
}

const CatalogCard = ({ catalog }: CatalogCardProps) => {
  return (
    <div className="flex flex-col md:w-[262px] w-full justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
      <Image src={catalog.image} alt={catalog.name} width={200} height={200} />
      <span className="font-medium w-[250px] text-center">{catalog.name}</span>
      {/* <span className="text-start text-xs">40 offers</span> */}
    </div>
  );
};

export default CatalogCard;
