import Image from "next/image";
import Link from "next/link";
import Tag from "@/app/ui/components/tag";
import { font } from "@/app/ui/fonts";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
// import Button from "@/app/ui/components/button";

export default function Page() {
  return (
    <>
      {/* Navigation */}
      <section className="navigation position-fixed right-0 z-index-20">
        <div className="p-container flex-column gap-5">
          <Link href="/" className="flex align-center gap-2">
            <ArrowLeftIcon className="size-1" /> Go back
          </Link>
          <Link href="/" className="flex align-center gap-2">
            Next project <ArrowRightIcon className="size-1" />
          </Link>
        </div>
      </section>

      {/* Banner */}
      <section
        className="banner flex-column align-center justify-center text-center h-400x container-sm"
        style={{ marginTop: "-116px" }}
      >
        <h1 className={font.heading}>Allp</h1>
        <h3 className={`${font.heading} mtb-4`}>Aplicativo de reservas</h3>
        <p className={`${font.paragraph} text-italic`}>
          Uma plataforma que conecta pessoas, lugares e serviços para a promoção
          de saúde e bem-estar.
        </p>
        <div className="flex gap-2 mt-5">
          <Tag>2023</Tag>
          <Tag>UI Designer</Tag>
          <Tag>Adapcon Software & Inovação</Tag>
        </div>
      </section>

      {/* Image */}
      <section className="section-image p-container-top-0 h-500x">
        <div
          className="flex justify-center align-center shadow-1 round-4 overflow-hidden h-100"
          style={{
            backgroundImage: "url(/images/projects/placeholder.png)",
            maxWidth: "100%",
          }}
        >
          <Image
            src="/images/projects/allp/allp-screen-1.png"
            alt="allp"
            width={700}
            height={600}
            className="object-cover"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="container-sm flex-column p-container mb-5 gap-5">
        <h2 className={font.heading}>Overview</h2>
        <p className={font.paragraph}>
          Allp é um aplicativo de reservas de quadras de esportes. Inicialmente
          foi projetado para atender aos requisitos de empresas na região de
          Jaraguá do Sul que fornecem serviços de saúde e bem-estar.
        </p>
        {/* <Button>Confira o site</Button> */}
        <Link href="https://allp.digital/" target="_blank">
          Confira o site
        </Link>
      </section>
    </>
  );
}
