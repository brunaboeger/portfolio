-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_experienceId_fkey";

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "experienceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE SET NULL ON UPDATE CASCADE;
