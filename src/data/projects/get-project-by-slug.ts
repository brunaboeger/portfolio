import { db } from "@/src/lib/prisma";

export const getProjectBySlug = async (slug: string) => {
  const project = await db.project.findUnique({ where: { slug } });
  return project;
};
