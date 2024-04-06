import Image from "next/image";
import React from "react";
import Trash from "@/public/trash.png";

const CatalogCard = () => {
  return (
    <div className="flex flex-col w-[262px] justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
      <Image src={Trash} alt="trash" width={200} height={200} />
      <span className="font-medium w-[250px] text-center">
        Recycling of polymer waste
      </span>
      <span className="text-start text-xs">40 offers</span>
    </div>
  );
};

export default CatalogCard;
