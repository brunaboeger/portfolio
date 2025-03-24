"use server";

import { db } from "@/src/lib/prisma";

export async function updateProject(data: {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}) {
  try {
    const profile = await db.profile.findFirst();

    const projectData = {
      name: data.name,
      slug: data.slug,
      description: data.description,
      coverImageSrc: data.coverImageSrc,
      thumbImageSrc: data.thumbImageSrc,
      screens: data.screens,
      profileId: profile!.id,
    };

    const updateProject = await db.project.update({
      where: { id: data.id },
      data: projectData,
    });

    return updateProject;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create project.");
  }
}
