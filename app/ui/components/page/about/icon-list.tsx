import Link from "next/link";
import Image from "next/image";
import Tooltip from "@/app/ui/components/page/about/tooltip";
import { useState } from "react";

interface Icon {
  id: number;
  name: string;
  src: string;
  alt: string;
  size: number;
  navigateTo: string;
  description: string;
  className?: string;
}

interface IconsProps {
  iconList: Icon[];
}

export default function IconList({ iconList }: IconsProps) {
  if (!Array.isArray(iconList)) {
    return null;
  }

  const [tooltip, setTooltip] = useState<boolean>(false);

  const toggleMenu = (id: number) => {
    setTooltip(tooltip === false ? true : false);
  };

  return (
    <>
      {iconList
        .sort((a, b) => a.id - b.id)
        .map((icon) => (
          <Link
            href={icon?.navigateTo}
            target="_blank"
            key={icon?.id}
            className="flex mr-2 position-relative"
            onMouseEnter={() => toggleMenu(icon.id)}
          >
            <Image
              src={icon?.src}
              alt={icon?.alt}
              width={icon.size ? icon.size : 24}
              height={icon.size ? icon.size : 24}
              className={icon?.className}
            />
            {tooltip ? <Tooltip icon={icon} /> : null}
          </Link>
        ))}
    </>
  );
}
