import Image from "next/image";
import { Separator } from "@/src/components/ui/separator";
import { getProjectBySlug } from "@/src/data/projects/get-project-by-slug";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { slug: string }
}

const Page = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <div className="flex flex-col gap-4 items-center">
      <header className="w-[500px] flex flex-col gap-1 pt-10 pb-2 justify-center text-center">
        <h1 className="text-5xl text-primary">{project.name}</h1>
        <p>{project.description}</p>
      </header>

      <section className="border-b border-b-gradient bg-gradient-to-r from-transparent via-primary to-transparent w-full h-[250px] overflow-hidden pt-6">
        <div className="w-full h-full flex items-end gap-3 justify-center">
          {project.coverImageSrc.map((coverImage) => (
            <Image
              key={coverImage}
              src={coverImage}
              alt={project.name}
              width={233}
              height={440}
              unoptimized
              className="h-auto rounded-t bg-gradient-shadow object-cover"
            />
          ))}
        </div>
      </section>

      <section className="w-[500px] py-2">
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Client</h3>
            <p className="text-slate-300">{project.content?.client}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Duration</h3>
            <p className="text-slate-300">{project.content?.duration}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Role</h3>
            <p className="text-slate-300">{project.content?.role}</p>
          </div>
        </div>
      </section>

      <Separator className="border" />

      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">About</h2>
          <p className="text-slate-300">{project.content?.about}</p>
        </div>
      </section>

      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Context</h2>
          <p className="text-slate-300">
            Quando comecei a trabalhar no ALLP, percebi que havia um grande problema no agendamento de quadras esportivas e serviços relacionados. Muitos locais ainda utilizavam métodos manuais para gerenciar reservas, causando conflitos de horário, falta de organização e dificultando a experiência dos usuários. A ideia do ALLP era mudar esse cenário, criando uma plataforma digital intuitiva que facilitasse o processo para jogadores e prestadores de serviço.
          </p>
        </div>
      </section>

      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Insights</h2>
          <p className="text-slate-300">{project.content?.insights}</p>
        </div>
      </section>

      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Challenges</h2>
          <div className="text-slate-300">{project.content?.challenges}</div>
        </div>
      </section>

      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Results</h2>
          <p className="text-slate-300">{project.content?.results}</p>
        </div>
      </section>
    </div>
  );
}

export default Page;