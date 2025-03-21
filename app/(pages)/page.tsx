import Link from "next/link";
import { getAllProjects } from "@/app/data/get-all-projects";

const HomePage = async () => {
  const projects = await getAllProjects();

  if (!projects) return null;

  return (
    <div className="container gap-5 position-relative">
      {/* Temporário */}
      <div className="p-5 flex flex-column gap-4">
        {projects.map((project) => (
          <Link key={project.id} href={project.slug}>{project.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;