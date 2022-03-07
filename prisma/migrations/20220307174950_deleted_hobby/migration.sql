/*
  Warnings:

  - You are about to drop the `Hobby` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HobbyToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hobby";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_HobbyToUser";
PRAGMA foreign_keys=on;
