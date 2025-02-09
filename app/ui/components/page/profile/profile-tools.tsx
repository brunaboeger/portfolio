import Image from "next/image";
import CardOutline from "@/app/ui/components/card-outline";
import { ImageProps } from "@/app/lib/types";
import { font } from "@/app/ui/fonts";

interface LogosProps {
  image?: ImageProps;
}

interface ToolsProps {
  tools?: LogosProps[];
}

export default function ProfileTools(listItems: ToolsProps) {
  return (
    <CardOutline>
      <div className="p-container">
        <h4 className={`${font.heading} text-light mb-4`}>Ferramentas</h4>
        <div className="flex wrap align-center gap-4">
          {listItems.tools?.map((tool, index) => (
            <Image
              key={index}
              src={tool.image?.src || "/icons/cat.svg"}
              alt={tool.image?.alt || "Ícone"}
              width={tool.image?.width || 40}
              height={tool.image?.height || 40}
              className={`${tool.image?.className} hover-translateY-1`}
            />
          ))}
        </div>
      </div>
    </CardOutline>
  );
}
