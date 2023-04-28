-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProjectsOnUsers" (
    "projectId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "joinAt" TEXT,

    PRIMARY KEY ("userId", "projectId"),
    CONSTRAINT "ProjectsOnUsers_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProjectsOnUsers" ("joinAt", "projectId", "userId") SELECT "joinAt", "projectId", "userId" FROM "ProjectsOnUsers";
DROP TABLE "ProjectsOnUsers";
ALTER TABLE "new_ProjectsOnUsers" RENAME TO "ProjectsOnUsers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
