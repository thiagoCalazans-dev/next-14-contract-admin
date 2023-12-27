/*
  Warnings:

  - You are about to drop the `Amendment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Amendment";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "amendments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "value" DECIMAL NOT NULL,
    "subscription_date" DATETIME NOT NULL,
    "due_date" DATETIME NOT NULL,
    "signature_date" DATETIME NOT NULL,
    "contract_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "amendments_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
