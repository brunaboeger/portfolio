import { getStudyById } from "@/src/data/studies/get-study-by-id";
import { notFound } from "next/navigation";

interface EditProjectProps {
  params: { id: string };
}

const EditProject = async ({ params }: EditProjectProps) => {
  const { id } = await params;
  const study = await getStudyById(id);

  if (!study) return notFound();

  return (
    <div className="h-full flex flex-col gap-5 justify-center items-center">
      <h1 className="font-sans text-5xl">Edit Study</h1>
      <p className="font-sans">{study?.name}</p>
    </div>
  );
}

export default EditProject;