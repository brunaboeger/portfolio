import { db } from "@/src/lib/prisma";

export const getExperienceById = async (id: string) => {
  const experience = await db.experience.findUnique({ where: { id } });
  return experience;
};
