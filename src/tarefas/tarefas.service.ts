import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TarefasService{
    constructor(private prismaService: PrismaService){}

    async listAll(){
        return await this.prismaService.tarefa.findMany(); 
    }

}