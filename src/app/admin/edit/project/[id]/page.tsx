import { getProjectById } from "@/src/data/projects/get-project-by-id";
import { notFound } from "next/navigation";
import ProjectEditCards from "@/src/components/admin/project/edit/project-edit-cards";

interface EditProjectProps {
  params: { id: string };
}

const EditProject = async ({ params }: EditProjectProps) => {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) return notFound();

  return (
    <ProjectEditCards project={project} />
  );
}

export default EditProject;