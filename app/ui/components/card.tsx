import Image from "next/image";
import Link from "next/link";
import { font } from "@/app/ui/fonts";

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

interface CardProps {
  title?: string;
  text?: string;
  image?: ImageProps;
  className?: string;
  imageSrc?: string;
  imageTexture?: string;
  navigateTo?: string;
}

export default function Card({
  title,
  text,
  className,
  imageSrc,
  imageTexture,
  navigateTo,
}: CardProps) {
  return (
    <div className={`card round-3 ${className} border-gray-100`}>
      <Link href={navigateTo ? navigateTo : "#"}>
        <div
          className="round-half bg-white h-100"
          style={{
            background: "linear-gradient(180deg, #ffffff00, #ffeef84d)",
          }}
        >
          <div className="flex-column justify-end h-100">
            {imageSrc ? (
              <div className="flex h-100 position-relative round-top-3">
                <Image
                  src={imageSrc}
                  alt={imageSrc}
                  width={300}
                  height={520}
                  className="w-100 object-contain position-absolute bottom-0 z-index-20"
                />
                {/* <div
                  id="texture"
                  className="position-absolute top-0 w-100 h-100 round-top-3"
                  style={{
                    backgroundImage: `url(${imageTexture || ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.5,
                  }}
                /> */}
              </div>
            ) : null}
            {title || text ? (
              <div className="flex-column w-100 hover-ease p-5 round-bottom-3 z-index-20">
                <h3 className={`${font.heading}`}>{title}</h3>
                <p className="paragraph mt-2">{text}</p>
              </div>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}
