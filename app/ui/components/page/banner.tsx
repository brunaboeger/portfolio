import Image from "next/image";
import { font } from "@/app/ui/fonts";

export default function Banner() {
  return (
    <section className="p-container">
      <h1 className={font.heading}>
        A dedicated UI designer and frontend developer.
      </h1>
      <p className="paragraph mt-4 mb-5">
        I design and code beautiful things, and I love what I do. My inspiration
        comes from the desire to turn{" "}
        <span className="highlight">
          <strong>ideas</strong>
        </span>{" "}
        into{" "}
        <span className="highlight">
          <strong>reality</strong>
        </span>
        .
      </p>
      <Image
        src="/images/placeholder.jpg"
        alt="An UX/UI Designer and Frontend Developer"
        width={500}
        height={375}
        className="w-100 h-auto"
      />
    </section>
  );
}
