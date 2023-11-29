/*
  Warnings:

  - You are about to drop the column `R_identifier` on the `Bus` table. All the data in the column will be lost.
  - Added the required column `prefixId` to the `Bus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bus" DROP COLUMN "R_identifier",
ADD COLUMN     "prefixId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "RegPrefix" (
    "id" SERIAL NOT NULL,
    "prefix" TEXT NOT NULL,

    CONSTRAINT "RegPrefix_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_prefixId_fkey" FOREIGN KEY ("prefixId") REFERENCES "RegPrefix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
