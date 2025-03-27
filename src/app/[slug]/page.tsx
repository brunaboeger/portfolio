import Image from "next/image";
import { Separator } from "@/src/components/ui/separator";

const Page = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <header className="w-[500px] flex flex-col gap-1 pt-10 pb-2 justify-center text-center">
        <h1 className="text-5xl text-primary">Simplifica+</h1>
        <p>Automatiza os processos das empresas e fornece autonomia para os clientes.</p>
      </header>

      <section className="border-b border-b-gradient bg-gradient-to-r from-transparent via-primary to-transparent w-full h-[250px] overflow-hidden pt-6">
        <div className="w-full flex justify-center">
          <Image
            src="/images/projects/simplifica/thumb.webp"
            alt=""
            width={600}
            height={440}
            className="h-auto rounded bg-gradient-shadow"
          />
        </div>
      </section>

      <section className="w-[500px] py-2">
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Client</h3>
            <p className="text-slate-300">Adapcon Software & Inovação</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Duration</h3>
            <p className="text-slate-300">1 month / 2024</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Role</h3>
            <p className="text-slate-300">UX/UI Designer</p>
          </div>
        </div>
      </section>

      <Separator className="border" />

      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">About the project</h2>
          <p className="text-slate-300">Simplifica+ é uma plataforma B2B com o intuito de fornecer autonomia e praticidade na obtenção de 2ª vias de boletos, abertura de devoluções, emissão de notas fiscais, entre outros recursos.</p>
          <p className="text-slate-300">O objetivo desse projeto era criar o site da plataforma focado em conversão, utilizando ferramenta de última geração como o Webflow. </p>
        </div>
      </section>

      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">About the project</h2>
          <p className="text-slate-300">Simplifica+ é uma plataforma B2B com o intuito de fornecer autonomia e praticidade na obtenção de 2ª vias de boletos, abertura de devoluções, emissão de notas fiscais, entre outros recursos.</p>
          <p className="text-slate-300">O objetivo desse projeto era criar o site da plataforma focado em conversão, utilizando ferramenta de última geração como o Webflow. </p>
        </div>
      </section>
    </div>
  );
}

export default Page;