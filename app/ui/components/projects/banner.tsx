import Tag from "@/app/ui/components/tag";
import Image from "next/image";
import { font } from "@/app/ui/fonts";

export default function Banner({
  heading,
  subheading,
  description,
  tags,
  mainImageSrc,
  mainImageAlt,
  backgroundImageSrc,
}: {
  heading?: string;
  subheading?: string;
  description?: string;
  tags?: string[];
  mainImageSrc?: string;
  mainImageAlt?: string;
  backgroundImageSrc?: string;
}) {
  const placeholder = "/images/projects/placeholder.png";

  return (
    <>
      <section
        className="banner flex-column align-center justify-center text-center h-400x container-sm"
        style={{ marginTop: "-116px" }}
      >
        <h1 className={font.heading}>{heading}</h1>
        <h3 className={`${font.heading} mtb-4`}>{subheading}</h3>
        <p className={`${font.paragraph} text-italic`}>{description}</p>
        <div className="flex gap-2 mt-5">
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
          className="flex justify-center align-center shadow-1 round-4 overflow-hidden h-100"
          style={{
            backgroundImage: `url(${backgroundImageSrc || placeholder})`,
            maxWidth: "100%",
          }}
        >
          <Image
            src={mainImageSrc || placeholder}
            alt={mainImageAlt || "Imagem de capa"}
            width={700}
            height={600}
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
