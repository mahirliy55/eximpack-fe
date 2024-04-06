import CatalogCard from "@/components/ui/catalog-card";
import React from "react";

const Page = () => {
  return (
    <main>
      <div className="relative">
        <video
          width="320"
          height="338"
          preload="auto"
          autoPlay
          muted
          loop
          className="w-full h-[338px] object-cover"
        >
          <source src="/catalog.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute w-full h-full top-0 left-0 opacity-90"
          style={{
            backgroundImage:
              "linear-gradient(92.54deg, #FF0000 1.96%, rgba(255, 0, 0, 0) 97.87%)",
          }}
        />
        <div className="absolute top-20 px-8 flex flex-col gap-y-6">
          <h4 className="uppercase text-white text-2xl font-semibold">
            new equipment
          </h4>
          <p className="text-white font-medium text-xl w-[1120px]">
            We present a complete catalog of new equipment from the best
            manufacturers with warranty support. The catalog shows both series
            of machines and individual units of equipment (models). Some of them
            may already be in stock. Call!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 py-8 px-4">
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
    </main>
  );
};

export default Page;
