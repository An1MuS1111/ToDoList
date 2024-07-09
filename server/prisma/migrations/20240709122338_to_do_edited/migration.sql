/*
  Warnings:

  - You are about to drop the column `subTask` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "subTask",
ADD COLUMN     "subTasks" JSONB NOT NULL DEFAULT '[]';
