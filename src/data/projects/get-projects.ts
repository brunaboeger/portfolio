import { db } from "@/src/lib/prisma";

export const getProjects = async () => {
  const projects = await db.project.findMany();
  return projects;
};
