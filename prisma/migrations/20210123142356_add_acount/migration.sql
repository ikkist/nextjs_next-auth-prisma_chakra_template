/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[account]` on the table `users`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "account" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users.account_unique" ON "users"("account");
