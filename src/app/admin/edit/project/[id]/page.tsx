import { getProjectById } from "@/src/data/projects/get-project-by-id";
import { notFound } from "next/navigation";
import ProjectEditCards from "@/src/components/admin/project/edit/project-edit-cards";
import { getExperiences } from "@/src/data/experiences/get-experiences";

interface EditProjectProps {
  params: { id: string };
}

const EditProject = async ({ params }: EditProjectProps) => {
  const { id } = await params;
  const project = await getProjectById(id);
  const experiences = await getExperiences();

  const experiencesIdAndName: Pick<typeof experiences[number], "id" | "name">[] = experiences.map(({ id, name }) => (
    {
      id, name
    }
  ))

  if (!project) return notFound();

  return (
    <ProjectEditCards project={project} experiences={experiencesIdAndName} />
  );
}

export default EditProject;