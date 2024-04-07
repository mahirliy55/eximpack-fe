import Image from "next/image";
import React from "react";
import Owl from "@/public/owl.svg";

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
          className="md:w-full md:h-screen object-cover w-full h-full"
        >
          <source src="/bg-big.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute w-full h-full top-0 left-0 opacity-90"
          style={{
            backgroundImage:
              "linear-gradient(92.54deg,#252525e9 1.96%,rgba(37,37,37,0) 97.87%)",
          }}
        />
        <div className="absolute md:top-20 top-5 md:px-8 px-0 flex flex-col md:gap-y-6 gap-y-3 md:left-20 left-4">
          <div className="flex items-center md:gap-x-4 gap-x-2">
            <Image
              src={Owl}
              alt="owl"
              className="w-[75px] h-[75px] md:w-[144px] md:h-[251px]"
            />
            <h4 className="uppercase text-white md:text-3xl text-lg font-semibold md:w-[300px] w-[200px]">
              reliable supply of equipment
            </h4>
          </div>
          <p className="text-white font-medium md:text-xl md:w-[505px] w-[304px] text-sm">
            Eximpak equipment is a Russian supplier of equipment for the
            packaging and processing industry since 1997.
          </p>
        </div>
      </div>
      <div className="mt-8 md:px-8 px-0 md:mx-20 mx-5">
        <div className="flex flex-col gap-y-8">
          <p className="text-lg font-medium text-black">
            Today the Eximpak-Equipment company is the largest Russian supplier
            of high-performance equipment for the production and processing of
            polymer products and packaging. Together with partners from Taiwan,
            China and Italy, we have been supplying quality equipment to the
            packaging and processing industry since 1997. Among our exclusive
            partners are world-famous manufacturers who have repeatedly
            confirmed the reliability and quality of their equipment.
          </p>
          <p className="text-lg font-medium text-black">
            Long-term contracts with these equipment manufacturers are the
            result of many years of careful selection of partners based on the
            criteria of reliability - price - quality . An indicator of the
            reliability and quality of the equipment we supply can be the fact
            that more than 2,500 units of equipment were installed and launched
            in Russia alone.
          </p>
          <div className="border-2 border-[#EB0000] p-5 flex flex-col justify-between rounded-lg md:w-[600px] w-full">
            <h4 className="text-[#EB0000] font-semibold">OUR MISSION</h4>
            <p className="mt-4 text-[#EB0000] font-medium">
              Development and implementation of technologies that are optimal
              for Russia and the CIS countries for the production of bags, films
              and processing of polymer waste, aimed at maximum investment
              results for the client.
            </p>
            <p className="mt-2 text-[#EB0000] font-medium">
              Use in the technological chain only reliable and high-performance
              equipment with a service potential of 15-20 years.
            </p>
            <p className="mt-2 text-[#EB0000] font-medium">
              Providing a high level of service in the post-sales period.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
