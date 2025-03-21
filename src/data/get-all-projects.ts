import { db } from "@/src/lib/prisma";

export const getAllProjects = async () => {
  const projects = await db.project.findMany();
  return projects;
};
