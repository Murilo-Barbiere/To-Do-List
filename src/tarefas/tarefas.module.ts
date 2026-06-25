import { Module } from "@nestjs/common";
import { TarefasService } from "./tarefas.service";
import { TarefasController } from "./tarefas.controller"
import { AppModule } from "src/app.module";

@Module({imports: [],
  controllers: [TarefasController],
  providers: [TarefasService],})
export class TarefaModulo{} 