import Navigation from "@/app/ui/components/projects/navigation";
import Banner from "@/app/ui/components/projects/banner";
import Overview from "@/app/ui/components/projects/overview";
import Screens from "@/app/ui/components/projects/screens";

export default function Page() {
  return (
    <>
      <Navigation nextLink="/vue-polar-bear" />

      <Banner
        heading="Allp"
        subheading="Aplicativo de reservas"
        description="Uma plataforma que conecta pessoas, lugares e serviços para a promoção de saúde e bem-estar."
        tags={["2023", "UI Designer", "Adapcon Software & Inovação"]}
        mainImageSrc="/images/projects/allp/allp-screen-1.png"
        mainImageAlt="Allp, aplicativo de reservas"
      />

      <Overview
        heading="Overview"
        texts={[
          "Allp é um aplicativo de reservas de quadras de esportes. Inicialmente foi projetado para atender aos requisitos de empresas na região de Jaraguá do Sul que fornecem serviços de saúde e bem-estar.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quidem, repellat, quia,  quae quibusdam officia doloribus natus minima eum quos quisquam. Soluta, aperiam. Voluptatem, quod.",
        ]}
        buttonText="Site institucional"
        buttonLink="https://allp.digital/"
      />

      <Screens />
    </>
  );
}
