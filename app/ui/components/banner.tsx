import Image from "next/image";

export default function Banner() {
  return (
    <section className="padding-container">
      <h1 className="text-heading">
        An innovative UI designer and frontend developer.
      </h1>
      <p className="text-body margin-top-2 margin-bottom-4">
        I design and code beautiful things, and I love what I do. My inspiration
        comes from the desire to turn{" "}
        <span className="color-highlight text-bold">ideas</span> into{" "}
        <span className="color-highlight text-bold">reality</span>.
      </p>
      <Image
        src="/images/placeholder.jpg"
        alt="An UX/UI Designer and Frontend Developer"
        width={500}
        height={375}
        className="width-full height-auto"
      />
    </section>
  );
}
