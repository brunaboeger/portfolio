/*
  Warnings:

  - You are about to drop the column `coverImages` on the `ProjectContent` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ProjectContent` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ProjectContent` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `ProjectContent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectContent" DROP COLUMN "coverImages",
DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "about" SET NOT NULL,
ALTER COLUMN "about" SET DATA TYPE TEXT,
ALTER COLUMN "insights" SET NOT NULL,
ALTER COLUMN "insights" SET DATA TYPE TEXT,
ALTER COLUMN "challenges" SET NOT NULL,
ALTER COLUMN "challenges" SET DATA TYPE TEXT,
ALTER COLUMN "results" SET NOT NULL,
ALTER COLUMN "results" SET DATA TYPE TEXT;
