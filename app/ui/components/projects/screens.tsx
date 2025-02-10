import Image from "next/image";

interface ImagesProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

interface ScreensProps {
  type?: string;
  images?: ImagesProps[];
}

export default function Screens({ images, type }: ScreensProps) {
  const placeholderList = [
    "bg-orange-100",
    "bg-orange-200",
    "bg-orange-300",
    "bg-orange-400",
    "bg-orange-500",
    "bg-orange-600",
  ];

  return (
    <section className="p-container bg-blue-100">
      <div className={`screens-${type} p-container-tb gap-5`}>
        {images
          ? images?.map((image, index) => (
              <Image
                key={index}
                src={image.src || ""}
                alt={image.alt || "Imagem"}
                width={image.width || 300}
                height={image.height || 600}
                className={`hover-translateY-2 ${image.className}`}
              />
            ))
          : placeholderList.map((placeholder, index) => (
              <div
                key={index}
                className={`${placeholder} hover-translateY-2`}
              />
            ))}
      </div>
    </section>
  );
}
