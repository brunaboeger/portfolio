import { db } from "@/src/lib/prisma";

export const getExperiences = async () => {
  const experiences = await db.experience.findMany();
  return experiences;
};
