import Link from "next/link";
import { getAllProjects } from "@/src/data/get-all-projects";

const HomePage = async () => {
  const projects = await getAllProjects();

  if (!projects) return null;

  return (
    <main className="p-[36px] h-screen z-10 relative">
      <div className="bg-gray-100 p-4 h-full">
        {/* Temporário */}
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <Link key={project.id} href={project.slug}>{project.name}</Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HomePage;