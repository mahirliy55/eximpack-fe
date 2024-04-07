import Image from "next/image";

import Owl1 from "@/public/owl1.svg";
import Owl2 from "@/public/owl2.svg";
import Owl3 from "@/public/owl3.svg";
import Owl4 from "@/public/owl4.svg";
import Owl5 from "@/public/owl5.svg";

import ServiceCard from "@/components/ui/service-card";
import { getServices } from "@/lib/data";

export default async function Home() {
  const services = await getServices();

  return (
    <main>
      <div className="min-w-80 bg-red-400 bg-hero bg-no-repeat bg-cover h-96 md:h-screen overflow-hidden bg-center relative">
        <div className="absolute flex flex-col gap-y-5 top-[clamp(85px,22vw,190px)] lg:left-[85px] text-[#E2E2E2]">
          <h4 className="md:text-[1.7rem] font-bold max-w-[33rem] text-center md:text-left">
            Professional counseling Remote and on-site counseling
          </h4>
          <h3 className="text-[clamp(2rem,4vw,5rem)] font-bold max-w-[61rem] text-center md:text-left">
            CONSUMERS IN THE WORLD OF PACKAGING
          </h3>
        </div>
      </div>
      <section className="px-8">
        <h3 className="text-3xl font-semibold mt-8 text-center max-w-[902px] mx-auto">
          WHAT IS CONSULTING THE EQUIPMENT CUSTOMER ABOUT?
        </h3>
        <div className="flex items-center justify-center mt-5 flex-wrap gap-4">
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl1} alt="owl" />
            <span className="font-medium w-[250px] text-center">
              It&apos;s about reducing production costs
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl2} alt="owl" width={175} height={175} />
            <span className="font-medium w-[250px] text-center">
              It&apos;s about improving product quality
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl3} alt="owl" width={175} height={175} />
            <span className="font-medium w-[250px] text-center">
              It&apos;s about a strong competitive position
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl4} alt="owl" width={175} height={175} />
            <span className="font-medium w-[250px] text-center">
              This is about effective investment in production
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl5} alt="owl" width={175} height={175} />
            <span className="font-medium w-[250px] text-center">
              This is about the production development strategy
            </span>
          </div>
        </div>
      </section>
      <hr className="mt-8" />
      <section className="px-8 mt-8">
        <h4 className="text-[#333333] font-semibold text-3xl text-center">
          EXPERIENCE AND GUARANTEE
        </h4>
        <div className="flex md:flex-row flex-col items-center justify-center gap-x-28 mt-4">
          <div className="flex flex-col gap-y-4 md:w-[600px] w-full">
            <p className="text-xl">
              Our company has almost a quarter of a century of experience. With
              each new contract, this experience is converted into your
              confidence that the equipment will bring profit.
            </p>
            <p className="text-xl">
              Therefore, each customer of our equipment can have a 100%
              guarantee of the right investment.
            </p>
          </div>
          <div className="flex flex-col relative">
            <span className="absolute top-[50px] md:left-[235px] left-[216px] bg-[#EB0000] w-[70px] rotate-45 text-center rounded-lg text-white">
              client
            </span>
            <h3 className="text-[#333333] text-[10rem] font-bold">120</h3>
            <span className="text-lg md:w-[515px] w-full">
              passed our consultations and increased production efficiency by at
              least 40%
            </span>
          </div>
        </div>
      </section>
      <hr className="mt-8" />

      <section className="px-8">
        <h3 className="text-3xl font-semibold mt-8 text-center">
          OTHER SERVICE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-4 mt-8">
          {services?.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.name}
              color={service.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
