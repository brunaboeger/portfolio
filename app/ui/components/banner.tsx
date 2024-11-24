import Image from "next/image";

export default function Banner() {
  return (
    <section className="padding-container">
      <h1 className="heading">
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
        className="w-full h-auto"
      />
    </section>
  );
}
