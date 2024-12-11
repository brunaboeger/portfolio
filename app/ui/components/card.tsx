import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
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
      <div className="flex round overflow-hidden">
        <Image
          src={image?.src || ""}
          alt={image?.alt || ""}
          width={image?.width || 350}
          height={image?.height || 200}
          className={image?.className || "w-100"}
        />
        <div className="bg-blue-100 w-100 hover-ease p-5">
          <h3 className="heading">{title}</h3>
          <p className="mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
}
