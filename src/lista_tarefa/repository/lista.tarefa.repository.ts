import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { lista_tarefa } from "generated/prisma/client";
import { CreateListaTarefaDto } from "../dto/create.lista.tarefa.dto";
import { UpdateListaTarefaDto } from "../dto/update.lista.tarefa.dto";
import { ListaTarefaEntity } from "../entity/lista.tarefa.entity";
import { Ilista_tarefa } from "./ilista.tarefas.repository";

@Injectable()
export class ListaTarefaRepository implements Ilista_tarefa {
    constructor(private readonly prismaService: PrismaService) {}

    async findById(id: number): Promise<ListaTarefaEntity> {
        const lista: lista_tarefa = await this.prismaService.lista_tarefa.findUniqueOrThrow({
            where: { id }
        });

        return this.toEntity(lista);

    }

    async create(data: CreateListaTarefaDto): Promise<ListaTarefaEntity> {
        const lista: lista_tarefa = await this.prismaService.lista_tarefa.create({
            data: data
        });

        return this.toEntity(lista);
    }

    async update(id: number, data: UpdateListaTarefaDto): Promise<ListaTarefaEntity> {
        const lista: lista_tarefa = await this.prismaService.lista_tarefa.update({
            where: { id },
            data: data
        });

        return this.toEntity(lista);
    }

    async delete(id: number): Promise<void> {
        await this.prismaService.lista_tarefa.delete({
            where: { id }
        });
    }

    private toEntity(lista: lista_tarefa): ListaTarefaEntity {
        return new ListaTarefaEntity(
            lista.id,
            lista.nome
        );
    }
}
