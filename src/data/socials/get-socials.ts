import { db } from "@/src/lib/prisma";

export const getSocials = async () => {
  const socials = await db.social.findMany();
  return socials;
};
