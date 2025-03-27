/*
  Warnings:

  - Added the required column `projectContentId` to the `ProjectSkill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectSkill" ADD COLUMN     "projectContentId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ProjectContent" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImages" TEXT[],
    "client" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "about" TEXT[],
    "aboutLinks" TEXT[],
    "insights" TEXT[],
    "insightsImages" TEXT[],
    "challenges" TEXT[],
    "challengesImages" TEXT[],
    "results" TEXT[],
    "resultsImages" TEXT[],

    CONSTRAINT "ProjectContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectContent_projectId_key" ON "ProjectContent"("projectId");

-- AddForeignKey
ALTER TABLE "ProjectSkill" ADD CONSTRAINT "ProjectSkill_projectContentId_fkey" FOREIGN KEY ("projectContentId") REFERENCES "ProjectContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectContent" ADD CONSTRAINT "ProjectContent_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
