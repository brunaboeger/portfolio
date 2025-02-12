import { font } from "@/app/ui/fonts";
import store from "@/app/lib/store";

export default function Hero() {
  const heroTexts = store.home.hero;

  return (
    <>
      <section
        id="banner"
        className="p-container-lr flex-column justify-center align-center text-center h-100vh z-index-20"
        style={{ maxWidth: "54rem", margin: "auto" }}
      >
        <p className="paragraph">{heroTexts.pretitle}</p>
        <h1 className={`${font.heading} mtb-5 w-100`}>{heroTexts.title}</h1>
        <p className="paragraph mw-600x">{heroTexts.description}</p>
      </section>
    </>
  );
}
