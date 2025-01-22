import Image from "next/image";
import Link from "next/link";

interface TooltipProps {
  icon: {
    src?: string;
    description?: string;
  };
}

export default function Tooltip({ icon }: TooltipProps) {
  return (
    <>
      <div
        className="position-absolute top-0 p-4 right-0 bg-blue-100 round-2 border-gray-100"
        style={{ top: "-200px", width: 300 }}
      >
        <Image
          src={icon?.src || "/images/work.svg"}
          alt="work"
          width={64}
          height={32}
          className="w-auto mt-1"
        />
        <p className="mt-4">{icon?.description}</p>
      </div>
    </>
  );
}
