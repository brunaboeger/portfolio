import { db } from "@/src/lib/prisma";

export const getProjectById = async (id: string) => {
  const project = await db.project.findUnique({
    where: { id },
    include: {
      content: true,
    },
  });
  return project;
};
