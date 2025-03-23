// import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/src/data/projects/get-projects";
// import { Button } from "@/src/components/ui/button";
import { font } from "@/src/app/fonts";


const HomePage = async () => {
  const projects = await getProjects();

  if (!projects) return null;

  return (
    <>
      {/* Hero */}
      <section data-scroll-section className="h-full mb-6 flex flex-col justify-center items-center gap-4 text-center">
        <p data-scroll className={`${font.heading} text-primary`}>
          Hello there! I’m Bruna
        </p>
        <h1 data-scroll className="text-6xl text-primary">
          Designer <span className="text-slate-50 text-5xl">&</span> Developer
        </h1>
        <h3 className="text-2xl">Passionate about creating new experiences, my motivation comes <br /> from the desire to transform a simple idea into reality.</h3>
      </section>

      {/* Projects */}
      <section data-scroll-section className="h-full grid grid-cols-2 gap-4">
        {projects.map((project) => (
          // Card
          <div key={project.id} className="flex flex-col">
            <div>
              <div className="h-11">
                {project.coverImageSrc.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt={project.name}
                    width={233}
                    height={500}
                    className="w-full object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default HomePage;