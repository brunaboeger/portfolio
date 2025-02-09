import { TimelineProps } from "@/app/lib/types";
import { font } from "@/app/ui/fonts";
import Image from "next/image";

interface Props {
  items?: TimelineProps[];
}

export default function Timeline(listItems: Props) {
  return (
    <div className="flex-column">
      {listItems.items?.map((item) => (
        <div
          key={item.id}
          className="flex align-center gap-5 p-tb-4 hover-translateY-2 border-top:nf"
        >
          <Image
            width={item.image?.width || 64}
            height={item.image?.height || 64}
            src={item.image?.src || ""}
            alt={item.image?.alt || "Ícone"}
            className={`round-full ${item.image?.className}`}
          />
          <div className="flex-column gap-2">
            <h4 className={`${font.heading} text-light`}>{item.title}</h4>
            <small className={`${font.paragraph} text-light`}>
              {item.subtitle}
            </small>
            <small className={`${font.small} text-light color-muted`}>
              {item.date}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}
