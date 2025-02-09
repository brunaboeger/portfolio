import Link from "next/link";
import Image from "next/image";

interface Icon {
  id: number;
  name: string;
  src: string;
  alt: string;
  size: number;
  navigateTo: string;
  className?: string;
}

interface IconsProps {
  iconList: Icon[];
}

export default function IconList({ iconList }: IconsProps) {
  if (!Array.isArray(iconList)) {
    return null;
  }

  return (
    <>
      {iconList
        .sort((a, b) => a.id - b.id)
        .map((icon) => (
          <Link
            href={icon?.navigateTo}
            target="_blank"
            key={icon?.id}
            className="flex mr-2 position-relative hover-translateY-2"
          >
            <Image
              src={icon?.src}
              alt={icon?.alt}
              width={icon.size ? icon.size : 24}
              height={icon.size ? icon.size : 24}
              className={icon?.className}
            />
          </Link>
        ))}
    </>
  );
}
