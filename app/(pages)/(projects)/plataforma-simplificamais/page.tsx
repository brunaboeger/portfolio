import Navigation from "@/app/ui/components/projects/navigation";
import Banner from "@/app/ui/components/projects/banner";
import Overview from "@/app/ui/components/projects/content";
import Screens from "@/app/ui/components/projects/screens";

export default function Page() {
  return (
    <>
      <Banner
        heading="Simplifica+"
        subheading="Portal do Cliente"
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
          "O projeto surgiu por meio de solicitações de clientes que tinham locais disponíveis para reservas, e buscavam um maior engajamento de seus funcionários.",
          "Dessa forma, o aplicativo tem como propósito facilitar a reserva de locais e serviços, bem como promover qualidade de vida - saúde, educação e entretenimento - para os colaboradores e para os demais indivíduos da sociedade.",
        ]}
        buttonText="Library website"
        buttonLink="https://vuepb.com/"
      />

      <Screens />
    </>
  );
}
