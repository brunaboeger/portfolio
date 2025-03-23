import { db } from "@/src/lib/prisma";

export const getStudyById = async (id: string) => {
  const study = await db.study.findUnique({ where: { id } });
  return study;
};
