import { db } from "@/app/lib/prisma";

export const getProjectBySlug = async (slug: string) => {
  const project = await db.project.findUnique({ where: { slug } });
  return project;
};
