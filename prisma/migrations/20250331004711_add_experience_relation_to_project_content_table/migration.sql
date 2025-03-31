/*
  Warnings:

  - A unique constraint covering the columns `[experienceId]` on the table `ProjectContent` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ProjectContent" ADD COLUMN     "experienceId" TEXT NOT NULL DEFAULT '3668e233-8f91-44a7-9506-e4f9a7cd1791';

-- CreateIndex
CREATE UNIQUE INDEX "ProjectContent_experienceId_key" ON "ProjectContent"("experienceId");

-- AddForeignKey
ALTER TABLE "ProjectContent" ADD CONSTRAINT "ProjectContent_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
