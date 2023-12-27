/*
  Warnings:

  - You are about to drop the column `billingDay` on the `contracts` table. All the data in the column will be lost.
  - Added the required column `billing_day` to the `contracts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contracts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "process_number" INTEGER NOT NULL,
    "fixture" TEXT NOT NULL,
    "billing_day" INTEGER NOT NULL,
    "bidding_type_id" TEXT NOT NULL,
    "supplier_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "contracts_bidding_type_id_fkey" FOREIGN KEY ("bidding_type_id") REFERENCES "bidding_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "contracts_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_contracts" ("bidding_type_id", "created_at", "fixture", "id", "number", "process_number", "supplier_id", "updated_at") SELECT "bidding_type_id", "created_at", "fixture", "id", "number", "process_number", "supplier_id", "updated_at" FROM "contracts";
DROP TABLE "contracts";
ALTER TABLE "new_contracts" RENAME TO "contracts";
CREATE UNIQUE INDEX "contracts_number_process_number_supplier_id_key" ON "contracts"("number", "process_number", "supplier_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
