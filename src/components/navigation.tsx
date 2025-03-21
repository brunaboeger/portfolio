import Image from "next/image";
import { Separator } from "@/src/components/ui/separator"

const Navigation = () => {
  return (
    <div className="absolute w-screen h-screen">
      <div className="p-1 h-full w-full flex flex-col">
        {/* Top */}
        <div className="h-[32px] flex">
          <div className="w-[32px] h-[32px] border">A</div>
          <div className="flex-grow border-y text-center flex justify-center gap-3 items-center p-1">
            <p className="text-slate-400">bruna boeger</p>
            <Separator orientation="vertical" className="border" />
            <p className="text-slate-400">designer & developer</p>
          </div>
          <div className="w-[32px] h-[32px] border" />
        </div>

        {/* Middle */}
        <div className="w-full flex flex-grow">
          <div className="top-8 w-[32px] border-x">D</div>
          <div className="flex flex-col flex-grow justify-between">
            <div className="flex justify-end">
              <Image src="/images/details/detail-2.png" alt="Detail" width={194} height={194} className="object-contain mr-6" />
            </div>
            <Image src="/images/details/detail-1.png" alt="Detail" width={194} height={194} className="object-contain ml-6" />
          </div>
          <div className="top-8 w-[32px] right-8 border-x">E</div>
        </div>

        {/* Bottom */}
        <div className="h-[32px] flex">
          <div className="w-[32px] border" />
          <div className="flex-grow border-y text-center flex justify-center gap-3 items-center p-1">
            <p className="text-slate-400">Based in Brazil</p>
            <Separator orientation="vertical" className="border" />
            <p className="text-slate-400">Let’s work together</p>
          </div>
          <div className="w-[32px] border" />
        </div>
      </div>
      <div className="bg-texture w-full h-full absolute top-0" />
    </div>
  );
}

export default Navigation;