import Navigation from "@/app/ui/components/projects/navigation";
import Banner from "@/app/ui/components/projects/banner";
import Overview from "@/app/ui/components/projects/overview";
import Screens from "@/app/ui/components/projects/screens";

export default function Page() {
  return (
    <>
      <Navigation nextLink="/simplificamais" />

      <Banner
        heading="Polar Bear"
        subheading="Component library for Vue.js"
        description="A library of components for Vue 3, used in Simplifica+ project."
        tags={[
          "2023 & 2024",
          "UI Designer & Developer",
          "Adapcon Software & Inovação",
        ]}
        mainImageSrc="/images/projects/allp/allp-screen-1.png"
        mainImageAlt="Vue Polar Bear Library"
      />

      <Overview
        heading="Overview"
        texts={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
        ]}
        buttonText="Library website"
        buttonLink="https://vuepb.com/"
      />

      <Screens />
    </>
  );
}
