"use server";

import { db } from "@/src/lib/prisma";

interface ProjectContentDataProps {
  id: number;
  client: string;
  duration: string;
  role: string;
  about: string;
  aboutLinks: string[];
  insights: string;
  insightsImages: string[];
  challenges: string;
  challengesImages: string[];
  results: string;
  resultsImages: string[];
}

export async function updateProjectContent(data: ProjectContentDataProps) {
  try {
    const updateProjectContent = await db.projectContent.update({
      where: { id: data.id },
      data,
    });

    return updateProjectContent;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create project");
  }
}
