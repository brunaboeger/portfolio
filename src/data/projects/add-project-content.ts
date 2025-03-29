"use server";

import { db } from "@/src/lib/prisma";

export async function addProjectContent(data: {
  id?: number;
  projectId: string;
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
}) {
  try {
    const addProjectContent = await db.projectContent.create({
      data: data,
    });

    return addProjectContent;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create project");
  }
}
