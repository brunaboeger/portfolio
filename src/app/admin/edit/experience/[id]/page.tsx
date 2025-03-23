import { getExperienceById } from "@/src/data/experiences/get-experience-by-id";
import { notFound } from "next/navigation";

interface EditProjectProps {
  params: { id: string };
}

const EditProject = async ({ params }: EditProjectProps) => {
  const { id } = await params;
  const experience = await getExperienceById(id);

  if (!experience) return notFound();

  return (
    <div className="h-full flex flex-col gap-5 justify-center items-center">
      <h1 className="font-sans text-5xl font-semibold">Edit Experience</h1>
      <p className="font-sans">{experience?.name}</p>
    </div>
  );
}

export default EditProject;