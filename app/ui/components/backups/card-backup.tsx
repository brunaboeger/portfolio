import Image from "next/image";

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
}

export default function Card({ title, text, image, className }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="flex-column round overflow-hidden">
        <Image
          src={image?.src || "/images/placeholder.webp"}
          alt={image?.alt || ""}
          width={image?.width || 300}
          height={image?.height || 400}
          className={image?.className || "w-100"}
        />
        {text || title ? (
          <div className="bg-blue-100 w-100 hover-ease p-5">
            <h3 className="heading">{title}</h3>
            <p className="mt-2">{text}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
