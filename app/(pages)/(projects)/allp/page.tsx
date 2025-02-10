import Banner from "@/app/ui/components/projects/banner";
import Content from "@/app/ui/components/projects/content";
import Screens from "@/app/ui/components/projects/screens";
import store from "@/app/lib/store";

export default function Page() {
  const allpProject = store.projects[0].work?.[0];
  const banner = allpProject?.content?.banner;
  const context = allpProject?.content?.context;
  const goals = allpProject?.content?.goals;
  const challenges = allpProject?.content?.challenges;
  const process = allpProject?.content?.process;
  const results = allpProject?.content?.results;
  const screens = allpProject?.screens;

  return (
    <>
      <Banner
        heading={banner?.title}
        subheading={banner?.subtitle}
        description={banner?.description}
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

        <Content heading={challenges?.title} texts={challenges?.texts} />

        <Content heading={process?.title} texts={process?.texts} />

        <Content heading={results?.title} texts={results?.texts} />
      </section>

      <Screens {...screens} />
    </>
  );
}
