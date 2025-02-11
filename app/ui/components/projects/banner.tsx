import Tag from "@/app/ui/components/tag";
import Image from "next/image";
import { font } from "@/app/ui/fonts";
import { ImageProps } from "@/app/lib/types";

export default function Banner({
  heading,
  subheading,
  description,
  tags,
  image,
  backgroundImageSrc,
}: {
  heading?: string;
  subheading?: string;
  description?: string;
  tags?: string[];
  image?: ImageProps;
  backgroundImageSrc?: string;
}) {
  const placeholder = "/images/projects/placeholder.png";

  return (
    <div className="overflow-hidden">
      <section
        className="banner flex-column p-container align-center justify-center text-center container-sm"
        style={{ height: 450 }}
      >
        <h1 className={font.heading}>{heading}</h1>
        {subheading && (
          <h3 className={`${font.heading} mtb-4`}>{subheading}</h3>
        )}
        {description && (
          <p className={`${font.paragraph} text-italic`}>{description}</p>
        )}
        <div className="flex gap-2 mt-5 mobile:flex-wrap justify-center">
          {tags?.map((tag, index) => (
            <Tag key={index} className="hover-translateY-1">
              {tag}
            </Tag>
          ))}
        </div>
      </section>

      {/* Image */}
      <section className="section-image p-container-top-0 h-500x">
        <div
          className="flex w-100 justify-center align-center shadow-1 round-4 h-100 object-cover"
          style={{
            backgroundImage: `url(${backgroundImageSrc || placeholder})`,
            maxWidth: "100%",
            backgroundPositionX: "center",
          }}
        >
          <Image
            src={image?.src || placeholder}
            alt={image?.alt || "Imagem de capa"}
            width={700}
            height={530}
            className={`object-cover w-auto mw-full hover-translateY-3 ${image?.className}`}
          />
        </div>
      </section>
    </div>
  );
}
