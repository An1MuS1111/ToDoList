/*
  Warnings:

  - You are about to drop the column `taskEndedAt` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `taskUpdatedAt` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "taskEndedAt",
ADD COLUMN     "taskUpdatedAt" TIMESTAMP(3) NOT NULL;
