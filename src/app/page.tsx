import Link from "next/link";
import { ScrollArea } from "@/src/components/ui/scroll-area"
import { getAllProjects } from "@/src/data/get-all-projects";
import { Button } from "../components/ui/button";

const HomePage = async () => {
  const projects = await getAllProjects();

  if (!projects) return null;

  return (
    <>
      <ScrollArea className="h-full w-full">
        {/* Temporário */}
        <div className="flex flex-col gap-4 mb-5">
          {projects.map((project) => (
            <Button key={project.id} asChild>
              <Link href={project.slug}>{project.name}</Link>
            </Button>

          ))}
        </div>
      </ScrollArea>
    </>
  );
}

export default HomePage;