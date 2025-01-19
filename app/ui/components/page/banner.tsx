import { font } from "@/app/ui/fonts";
import UserDayTime from "@/app/ui/components/daytime";

export default function Banner() {
  return (
    <>
      <section className="grid-area:banner p-container-lr flex-column justify-center text-center h-75vh z-index-10">
        <p className="paragraph mb-5">Hello, there! I'm Bruna.</p>
        <h1 className={font.heading}>
          A dedicated UI designer and front-end developer.
        </h1>
        <p className="paragraph mt-5">
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
      <UserDayTime />
    </>
  );
}
