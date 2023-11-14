-- CreateTable
CREATE TABLE "Matematika" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Matematika_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sejarah" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sejarah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inggris" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "rumus" TEXT NOT NULL,
    "contoh" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inggris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jawa" (
    "id" SERIAL NOT NULL,
    "indonesia" TEXT NOT NULL,
    "jawa" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jawa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puisi" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Puisi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Inggris_rumus_key" ON "Inggris"("rumus");
