import Banner from "@/app/ui/components/projects/banner";
import Overview from "@/app/ui/components/projects/content";
import Screens from "@/app/ui/components/projects/screens";

export default function Page() {
  return (
    <>
      <Banner
        heading="Site S+"
        subheading="Site comercial para o produto Simplifica+"
        description="Lorem ipsum dolor simet"
        tags={["2024", "Developer", "Adapcon Software & Inovação"]}
        mainImageSrc="/images/projects/allp/allp-screen-1.png"
        mainImageAlt="Allp, aplicativo de reservas"
      />

      <Overview
        heading="Overview"
        texts={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
        ]}
        buttonText="Site institucional"
        buttonLink="https://www.simplificamais.com.br/"
      />

      <Screens />
    </>
  );
}
