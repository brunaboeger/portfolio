"use server";

import { db } from "@/src/lib/prisma";

export async function createProject(data: {
  name: string;
  slug: string;
  description: string;
  coverImageSrc: string[];
  thumbImageSrc: string[];
  screens: string[];
}) {
  try {
    const profile = await db.profile.findFirst();
    const projectData = { ...data, profileId: profile!.id };

    const newProject = await db.project.create({
      data: projectData,
    });

    return newProject;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create project.");
  }
}
