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
      <div className="flex rounded overflow-hidden">
        <Image
          src={image?.src || ""}
          alt={image?.alt || ""}
          width={image?.width || 350}
          height={image?.height || 200}
          className={image?.className || "w-full"}
        />
        <div className="card_content p-5 bg-blue-100">
          <h3 className="heading">{title}</h3>
          <p className="mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
}