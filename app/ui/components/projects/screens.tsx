import Image from "next/image";

interface Screens {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface ScreensProps {
  screens?: Screens[];
}

export default function Screens({ screens }: ScreensProps) {
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
      <div className="p-container-tb section-screens gap-5">
        {screens
          ? screens.map((screen, index) => (
              <Image
                key={index}
                src={screen.src || ""}
                alt={screen.alt || "Imagem"}
                width={screen.width || "300"}
                height={600}
                className="round-3 shadow-1 hover-translateY-2 m-auto"
              />
            ))
          : placeholderList.map((placeholder, index) => (
              <div
                key={index}
                className={`h-600x ${placeholder} round-3 shadow-3 hover-translateY-2`}
              />
            ))}
      </div>
    </section>
  );
}
