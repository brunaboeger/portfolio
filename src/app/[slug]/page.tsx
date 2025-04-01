import { Separator } from "@/src/components/ui/separator";
import { getProjectBySlug } from "@/src/data/projects/get-project-by-slug";
import { notFound } from "next/navigation";

import Image from "next/image";
import Markdown from "react-markdown";

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
        <h3 className="text-xl">{project.description}</h3>
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
            <h3 className="text-2xl">Client</h3>
            <p className="text-slate-300">{project.content?.client}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl">Duration</h3>
            <p className="text-slate-300">{project.content?.duration}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl">Role</h3>
            <p className="text-slate-300">{project.content?.role}</p>
          </div>
        </div>
      </section>

      <Separator className="border" />

      {/* About */}
      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <div>
            <Markdown
              components={{
                h2: ({ ...props }) => (
                  <h2 className="text-3xl mb-3" {...props} />
                ),
                p: ({ ...props }) => (
                  <p className="mb-4 font-sans" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul className="mb-4" {...props} />
                )
              }}
            >
              {project.content?.about}
            </Markdown>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <Markdown
            components={{
              h2: ({ ...props }) => (
                <h2 className="text-3xl mb-3" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-4 font-sans" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="mb-4" {...props} />
              )
            }}
          >
            {project.content?.insights}
          </Markdown>
        </div>
      </section>

      {/* Challenges */}
      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <Markdown
            components={{
              h2: ({ ...props }) => (
                <h2 className="text-3xl mb-3" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-4 font-sans" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="mb-4" {...props} />
              )
            }}
          >
            {project.content?.challenges}
          </Markdown>
        </div>
      </section>

      {/* Results */}
      <section className="w-[500px] py-2">
        <div className="flex flex-col gap-2">
          <Markdown
            components={{
              h2: ({ ...props }) => (
                <h2 className="text-3xl mb-3" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-4 font-sans" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="mb-4" {...props} />
              )
            }}
          >
            {project.content?.results}
          </Markdown>
        </div>
      </section>
    </div>
  );
}

export default Page;