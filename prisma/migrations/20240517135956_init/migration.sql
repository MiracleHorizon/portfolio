-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link_demo" TEXT NOT NULL,
    "link_repo" TEXT NOT NULL,
    "cover" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);
