import { getProjectById } from "@/src/data/projects/get-project-by-id";
import { notFound } from "next/navigation";
import ProjectCards from "@/src/app/admin/edit/project/[id]/components/project-cards";

interface EditProjectProps {
  params: { id: string };
}

const EditProject = async ({ params }: EditProjectProps) => {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) return notFound();

  return (
    <ProjectCards project={project} />
  );
}

export default EditProject;