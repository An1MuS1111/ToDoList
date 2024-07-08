-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('todo', 'urgent', 'done');

-- CreateEnum
CREATE TYPE "TaskCategory" AS ENUM ('Personal', 'Work', 'Shopping', 'Health', 'Education', 'Others');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accountCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountUpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "taskId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subTask" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "taskStartedAt" TIMESTAMP(3) NOT NULL,
    "taskEndedAt" TIMESTAMP(3) NOT NULL,
    "taskCreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "taskCompletedAt" TIMESTAMP(3),
    "taskStatus" "TaskStatus" NOT NULL,
    "taskCategory" "TaskCategory" NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("taskId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Todo_userId_idx" ON "Todo"("userId");

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
