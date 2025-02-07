import Banner from "@/app/ui/components/projects/banner";
import Content from "@/app/ui/components/projects/content";
import Screens from "@/app/ui/components/projects/screens";
import store from "@/app/lib/store";

export default function Page() {
  const simplificaProject = store.projects[0].work?.[1];
  const banner = simplificaProject?.content?.banner;
  const context = simplificaProject?.content?.context;
  const goals = simplificaProject?.content?.goals;
  // const challenges = simplificaProject?.content?.challenges;
  const process = simplificaProject?.content?.process;
  const results = simplificaProject?.content?.results;

  return (
    <>
      <Banner
        heading={banner?.title}
        subheading={banner?.subtitle}
        tags={banner?.tags}
        image={banner?.image}
      />

      <section className="mb-6">
        <Content
          heading={context?.title}
          texts={context?.texts}
          actions={context?.actions}
        />

        <Content heading={goals?.title} lists={goals?.lists} />

        <Content heading={process?.title} texts={process?.texts} />

        <Content heading={results?.title} texts={results?.texts} />
      </section>

      <Screens screens={simplificaProject?.screens} />
    </>
  );
}
