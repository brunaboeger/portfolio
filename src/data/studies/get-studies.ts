import { db } from "@/src/lib/prisma";

export const getStudies = async () => {
  const studies = await db.study.findMany();
  return studies;
};
