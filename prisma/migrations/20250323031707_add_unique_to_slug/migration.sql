/*
  Warnings:

  - The `coverImageSrc` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `thumbImageSrc` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "coverImageSrc",
ADD COLUMN     "coverImageSrc" TEXT[],
DROP COLUMN "thumbImageSrc",
ADD COLUMN     "thumbImageSrc" TEXT[];
