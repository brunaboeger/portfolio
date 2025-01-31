import Banner from "@/app/ui/components/projects/banner";
import Content from "@/app/ui/components/projects/content";
import Screens from "@/app/ui/components/projects/screens";

export default function Page() {
  const screens = [
    {
      src: "/images/projects/allp/screens/allp-tela-1.png",
      alt: "Tela de login do aplicativo Allp",
    },
    {
      src: "/images/projects/allp/screens/allp-tela-2.png",
      alt: "Tela de busca de locais no aplicativo Allp",
    },
    {
      src: "/images/projects/allp/screens/allp-tela-3.png",
      alt: "Tela de detalhes de um local no aplicativo Allp",
    },
    {
      src: "/images/projects/allp/screens/allp-tela-4.png",
      alt: "Tela de login do fornecedor no aplicativo Allp",
    },
    {
      src: "/images/projects/allp/screens/allp-tela-5.png",
      alt: "Tela de dashboard do fornecedor no aplicativo Allp",
    },
    {
      src: "/images/projects/allp/screens/allp-tela-7.png",
      alt: "Tela de dashboard do fornecedor no aplicativo Allp",
    },
    {
      src: "/images/projects/allp/screens/allp-tela-9.png",
      alt: "Tela de dashboard do fornecedor no aplicativo Allp",
    },
    {
      src: "/images/projects/allp/screens/allp-tela-8.png",
      alt: "Tela de dashboard do fornecedor no aplicativo Allp",
    },
  ];

  return (
    <>
      <Banner
        heading="Allp"
        subheading="Aplicativo de reservas"
        description="Uma plataforma que conecta pessoas, lugares e serviços para a promoção de saúde e bem-estar."
        tags={["2023", "UI Designer", "Adapcon Software & Inovação"]}
        mainImageSrc="/images/projects/allp/allp-1.png"
        mainImageAlt="Allp, aplicativo de reservas"
      />

      <section className="mb-6">
        <Content
          heading="Descrição"
          texts={[
            "O projeto surgiu por meio de solicitações de clientes que tinham locais disponíveis para reservas, e buscavam um maior engajamento de seus funcionários.",
            "Dessa forma, o aplicativo tem como propósito facilitar a reserva de locais e serviços, bem como promover qualidade de vida - saúde, educação e entretenimento - para os colaboradores e para os demais indivíduos da sociedade.",
          ]}
          buttonText="Site institucional"
          buttonLink="https://allp.digital/"
        />

        <Content
          heading="Discovery"
          texts={[
            "Com base em pesquisas, entrevistas quantitativas e qualitativas, benchmarking e mapa de jornada do usuário, foram mapeados 2 principais objetivos para o projeto:",
            "👉 Facilidade de busca e reserva de um local ou serviço (usuários)",
            "👉 Área do fornecedor-parceiro para administração dos locais (cliente).",
          ]}
        />

        <Content
          heading="Delivery"
          texts={[
            "Em seguida, com base dos resultados de discovery, por meio de wireframes e tests de usabilidade foram definidos fluxos de jornada do usuário, tanto no aplicativo quanto na versão web do fornecedor-parceiro.",
            "Abaixo estão algumas telas do aplicativo e da versão web.",
          ]}
        />
      </section>

      <Screens screens={screens} />
    </>
  );
}
