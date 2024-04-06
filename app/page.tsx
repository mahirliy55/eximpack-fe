import Image from "next/image";
import Owl1 from "@/public/owl1.svg";
import Owl2 from "@/public/owl2.svg";
import Owl3 from "@/public/owl3.svg";
import Owl4 from "@/public/owl4.svg";
import Owl5 from "@/public/owl5.svg";
import Tech from "@/public/tech.png";
import Mod from "@/public/mod.png";
import Doc from "@/public/doc.png";

export default function Home() {
  return (
    <main>
      <div className="min-w-80 bg-red-400 bg-hero bg-no-repeat bg-cover h-screen overflow-hidden bg-center relative">
        <div className="absolute flex flex-col gap-y-5 top-[clamp(85px,22vw,190px)] left-[85px] text-[#E2E2E2]">
          <h4 className="text-[1.7rem] font-bold w-[33rem]">
            Professional counseling Remote and on-site counseling
          </h4>
          <h3 className="text-[clamp(2rem,4vw,5rem)] font-bold w-[61rem]">
            CONSUMERS IN THE WORLD OF PACKAGING
          </h3>
        </div>
      </div>
      <div className="px-8">
        <h3 className="text-3xl font-semibold mt-8 text-center w-[902px] mx-auto">
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
            <Image src={Owl2} alt="owl" />
            <span className="font-medium w-[250px] text-center">
              It&apos;s about improving product quality
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl3} alt="owl" />
            <span className="font-medium w-[250px] text-center">
              It&apos;s about a strong competitive position
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl4} alt="owl" />
            <span className="font-medium w-[250px] text-center">
              This is about effective investment in production
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-lg h-[300px] p-4 gap-y-4 shadow-sm">
            <Image src={Owl5} alt="owl" />
            <span className="font-medium w-[250px] text-center">
              This is about the production development strategy
            </span>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="px-8">
        <h3 className="text-3xl font-semibold mt-8 text-center">
          OTHER SERVICE
        </h3>
        <div className="flex items-center justify-center gap-x-4 mt-8">
          <div className="bg-[#0059C9] max-w-[350px] min-w-[320px] rounded-lg h-[287px] p-5 flex flex-col justify-between">
            <Image src={Tech} alt="tech" />
            <span className="text-white text-lg">Commissioning works</span>
          </div>
          <div className="bg-[#A90201] max-w-[350px] min-w-[320px] rounded-lg h-[287px] p-5 flex flex-col justify-between">
            <Image src={Mod} alt="mod" />
            <span className="text-white text-lg">Equipment modernization</span>
          </div>
          <div className="bg-[#656565] max-w-[320px] min-w-[320px] rounded-lg h-[287px] p-5 flex flex-col justify-between w-full">
            <Image src={Doc} alt="doc" />
            <span className="text-white text-lg">
              Translations of technical documentation{" "}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
