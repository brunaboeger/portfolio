// import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/src/data/projects/get-projects";
// import { Button } from "@/src/components/ui/button";
import { font } from "@/src/app/fonts";
import { Card } from "@/src/components/ui/card";
import Link from "next/link";


const HomePage = async () => {
  const projects = await getProjects();

  if (!projects) return null;

  return (
    <>
      {/* Hero */}
      <section id="home" className="h-full mb-6 flex flex-col justify-center items-center gap-4 text-center">
        <p data-scroll className={`${font.heading} text-primary`}>
          Hello there! I’m Bruna
        </p>
        <h1 data-scroll className="text-6xl text-primary">
          Designer <span className="text-slate-50 text-5xl">&</span> Developer
        </h1>
        <h3 className="text-2xl">Passionate about creating new experiences, my motivation comes <br /> from the desire to transform a simple idea into reality.</h3>
      </section>

      {/* Projects */}
      <section id="projects" className="h-full">
        <div className="h-full grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
          {projects.map((project) => (
            <Link key={project.id} href={project.slug} className="flex flex-col h-full justify-start overflow-hidden">
              <Card className="flex flex-col h-full justify-start overflow-hidden">
                {project.thumbImageSrc.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt={project.name}
                    width={600}
                    height={600}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                ))}
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;