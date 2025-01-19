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
  border?: string;
  imageSrc?: string;
  imageTexture?: string;
  navigateTo?: string;
}

export default function Card({
  title,
  text,
  className,
  border,
  imageSrc,
  imageTexture,
  navigateTo,
}: CardProps) {
  return (
    <div className={`card round-3 ${className} ${border}`}>
      <Link href={navigateTo || "/"}>
        <div
          className="overflow-hidden round-half bg-white h-100"
          style={{
            backgroundImage: `url(${imageTexture || ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex-column justify-between overflow-hidden h-100">
            {text || title ? (
              <>
                <div className="flex-column align-end w-100 hover-ease p-5">
                  <h3 className={`${font.heading}`}>{title}</h3>
                  <p className="paragraph mt-2">{text}</p>
                </div>
                {imageSrc ? (
                  <Image
                    src={imageSrc || "/images/placeholder.webp"}
                    alt={imageSrc || ""}
                    width={300}
                    height={500}
                    className="w-100 object-contain"
                  />
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}
