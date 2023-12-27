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
    "observation" TEXT
);
INSERT INTO "new_Supplier" ("address", "city", "cnpj", "id", "name", "number", "observation", "zip_code") SELECT "address", "city", "cnpj", "id", "name", "number", "observation", "zip_code" FROM "Supplier";
DROP TABLE "Supplier";
ALTER TABLE "new_Supplier" RENAME TO "Supplier";
CREATE UNIQUE INDEX "Supplier_cnpj_key" ON "Supplier"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
