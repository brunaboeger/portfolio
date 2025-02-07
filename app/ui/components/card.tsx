import Image from "next/image";
import Link from "next/link";
import { font } from "@/app/ui/fonts";
import { CardProps } from "@/app/lib/types";

export default function Card({
  title,
  text,
  className,
  navigateTo,
  image,
}: CardProps) {
  return (
    <div className={`card round-3 ${className} border-gray-100 z-index-20`}>
      <Link href={navigateTo?.link || ""}>
        <div
          className="round-half bg-white"
          style={{
            background: "linear-gradient(180deg, #ffffff00, #ffeef84d)",
          }}
        >
          <div className="flex-column position-relative justify-end">
            {image ? (
              <div className="flex align-end justify-center position-relative round-top-3">
                <Image
                  src={image?.src || ""}
                  alt={image?.alt || ""}
                  width={image?.width || 300}
                  height={image?.height || 520}
                  className={`${image?.className} w-auto mw-full object-contain`}
                  unoptimized
                />
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
