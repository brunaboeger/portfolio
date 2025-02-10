import { font } from "@/app/ui/fonts";
import store from "@/app/lib/store";

export default function Hero() {
  const heroTexts = store.home.hero;

  return (
    <>
      <section
        id="banner"
        className="p-container-lr container-sm flex-column justify-center align-center text-center h-100vh z-index-20"
      >
        <p className="paragraph">{heroTexts.pretitle}</p>
        <h1 className={`${font.heading} mtb-5`}>{heroTexts.title}</h1>
        <p className="paragraph mw-600x">{heroTexts.description}</p>
      </section>
    </>
  );
}
