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
          heading="Contexto"
          texts={[
            "Empresas com área recreativa, muitas das vezes, não conseguem preencher seus espaços com horários para os colaboradores, devido a baixa adesão e falta de facilidade para agendamentos.",
            "Dessa forma, o aplicativo surgiu com o propósito de facilitar a reserva de quadras e campos de esportes para essas empresas.",
          ]}
          buttonText="Site institucional"
          buttonLink="https://allp.digital/"
        />

        <Content
          heading="Objetivos"
          texts={[
            "👉 Facilidade de busca e reserva de um local ou serviço",
            "👉 Ambiente administrativo para os fornecedores-parceiros configurarem os horários, valores e demais informações dos espaços",
            "👉 Processo de pagamento de forma simplificada",
            "👉 Opção de escolha das quadras, locais, horários e frequência",
            "👉 ",
          ]}
        />

        <Content
          heading="Desafios"
          texts={[
            "Foi criado um MVP para que as empresas-parceiras pudessem incentivar o uso do aplicativo para seus colaboradores.",
            "Outras empresas demonstraram interesse no aplicativo, permitindo que planejássemos novas perspectivas e recursos para atender outras áreas além do esporte.",
          ]}
        />

        <Content
          heading="Processo"
          texts={[
            "Os primeiros rascunhos das interações do aplicativo visavam suprir a necessidade de alocação de quadras e campos de esportes.Assim, o foco foi criar uma experiência simplificada para o usuário bem como para o fornecedor-parceiro em seu ambiente administrativo.",
            "Como novas demandas surgiram após o lançamento do MVP, adicionamos novos recursos para fornecer aos usuários modalidades diferentes de agendamentos.",
          ]}
        />

        <Content
          heading="Resultados"
          texts={[
            "As empresas parceiras do projeto obtiveram bons resultados após o lançamento do aplicativo. Houve bastante interesse na reserva das quadras e campos de esportes por parte dos colaboradores, quanto dos cidadãos.",
            "Como resultado, o projeto expandiu para agregar outros serviços além da reservas para esportes, atendendo consultórios, farmácias, e outros serviços disponiilizados.",
          ]}
        />
      </section>

      <Screens screens={screens} />
    </>
  );
}
