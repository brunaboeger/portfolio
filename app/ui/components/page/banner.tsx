import { font } from "@/app/ui/fonts";

export default function Banner() {
  return (
    <>
      <section
        id="banner"
        className="p-container-lr container-sm flex-column justify-center text-center h-800x z-index-20"
      >
        <p className="paragraph">Hello, there! I'm Bruna.</p>
        <h1 className={`${font.heading} mtb-5`}>
          A dedicated UI designer and front-end developer.
        </h1>
        <p className="paragraph">
          I design and code beautiful things, and I love what I do. <br /> My
          inspiration comes from the desire to turn{" "}
          <span className="highlight">
            <strong>ideas</strong>
          </span>{" "}
          into{" "}
          <span className="highlight">
            <strong>reality</strong>
          </span>
          .
        </p>
      </section>
    </>
  );
}
