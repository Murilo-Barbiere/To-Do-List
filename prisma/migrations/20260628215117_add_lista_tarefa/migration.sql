/*
  Warnings:

  - You are about to drop the column `descricao` on the `tarefa` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `tarefa` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `tarefa` table. All the data in the column will be lost.
  - Added the required column `lista_id` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `realizada` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `tarefa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tarefa" DROP CONSTRAINT "tarefa_user_id_fkey";

-- AlterTable
ALTER TABLE "tarefa" DROP COLUMN "descricao",
DROP COLUMN "name",
DROP COLUMN "user_id",
ADD COLUMN     "lista_id" INTEGER NOT NULL,
ADD COLUMN     "realizada" BOOLEAN NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "lista_tarefa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "lista_tarefa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tarefa" ADD CONSTRAINT "tarefa_lista_id_fkey" FOREIGN KEY ("lista_id") REFERENCES "lista_tarefa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lista_tarefa" ADD CONSTRAINT "lista_tarefa_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
