import CatalogCard from "@/components/ui/catalog-card";
import { getCatalogs } from "@/lib/data";
import React from "react";

export default async function Page() {
  const catalogs = await getCatalogs();

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
          className="w-full h-[338px] object-cover hidden md:block"
        >
          <source src="/catalog.mp4" type="video/mp4" />
        </video>
        <video
          width="320"
          height="338"
          muted
          className="w-full h-[338px] object-cover md:hidden"
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
          <p className="text-white font-medium md:text-xl text-sm md:max-w-[1120px] w-full">
            We present a complete catalog of new equipment from the best
            manufacturers with warranty support. The catalog shows both series
            of machines and individual units of equipment (models). Some of them
            may already be in stock. Call!
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-8 px-4">
        {catalogs?.map((catalog) => (
          <CatalogCard key={catalog.id} catalog={catalog} />
        ))}
      </div>
    </main>
  );
}
