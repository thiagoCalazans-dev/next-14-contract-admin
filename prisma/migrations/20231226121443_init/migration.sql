/*
  Warnings:

  - You are about to drop the column `zipCode` on the `Supplier` table. All the data in the column will be lost.
  - Added the required column `zip_code` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Supplier" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" INTEGER,
    "observation" TEXT NOT NULL
);
INSERT INTO "new_Supplier" ("address", "city", "cnpj", "id", "name", "number", "observation") SELECT "address", "city", "cnpj", "id", "name", "number", "observation" FROM "Supplier";
DROP TABLE "Supplier";
ALTER TABLE "new_Supplier" RENAME TO "Supplier";
CREATE UNIQUE INDEX "Supplier_cnpj_key" ON "Supplier"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
