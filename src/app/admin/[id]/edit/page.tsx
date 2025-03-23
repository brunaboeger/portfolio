import { getProjectById } from "@/src/data/projects/get-project-by-id";
import { notFound } from "next/navigation";

interface EditProjectProps {
  params: { id: string };
}

const EditProject = async ({ params }: EditProjectProps) => {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) return notFound();

  return (
    <div className="h-full flex flex-col gap-5 justify-center items-center">
      <h1>Edit project</h1>
      <p>{project.name}</p>
    </div>
  );
}

export default EditProject;