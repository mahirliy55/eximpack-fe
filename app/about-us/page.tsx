import React from "react";
import Image from "next/image";

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
                    className="w-full h-full object-cover"
                >
                    <source src="/bg-big.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="absolute top-40 left-20 px-8 flex flex-col gap-y-6">
                <div className="flex gap-3">
                    <Image src="/owl.svg" alt="Owl" width={144} height={251}/>
                    <h4 className="uppercase text-white text-[clamp(2.5rem,1vw,1rem)] font-semibold w-3/5">
                        RELIABLE SUPPLY OF EQUIPMENT
                    </h4>
                </div>
                <p className="text-white font-medium text-[clamp(1rem,2vw,2rem)] max-w-[550px] mt-20">
                    Eximpak equipment is a Russian
                    supplier of equipment for the packaging and processing industry since 1997.
                </p>
            </div>

            <section className="text-[1.2rem] w-[min(750px,100%)] mt-[min(10vw,100px)] pl-32 font-normal">
                <p className="clamp(1.5rem,2vw,2rem)">
                    Today the Eximpak-Equipment company is the largest Russian supplier of high-performance equipment for the production and processing of polymer products and packaging. Together with partners from Taiwan, China and Italy, we have been supplying quality equipment to the packaging and processing industry since 1997. Among our exclusive partners are world-famous manufacturers who have repeatedly confirmed the reliability and quality of their equipment.
                </p>
                <p className="clamp(1.5rem,2vw,2rem) mt-2">
                    Long-term contracts with these equipment manufacturers are the result of many years of careful selection of partners based on the criteria of reliability - price - quality . An indicator of the reliability and quality of the equipment we supply can be the fact that more than 2,500 units of equipment were installed and launched in Russia alone.
                </p>
            </section>
        </main>
    );
};

export default Page;
