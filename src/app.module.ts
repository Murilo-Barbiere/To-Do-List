import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { TarefaModulo } from './tarefas/tarefas.module';


@Module({
  imports: [PrismaModule, TarefaModulo],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
