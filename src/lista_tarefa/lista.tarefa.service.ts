import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateListaTarefaDto } from './dto/create.lista.tarefa.dto';
import { IListaTarefaRepository } from './repository/ilista.tarefas.repository';
import { ResponseListaTarefaDto } from './dto/response.lista.tarefa.dto';
import { ListaTarefaEntity } from './entity/lista.tarefa.entity';

@Injectable()
export class ListaTarefaService {

  constructor(private ilistaTarefaRepository: IListaTarefaRepository){}

  async criar(idUserAuth: number, createListaTarefaDto: CreateListaTarefaDto): Promise<ResponseListaTarefaDto> {
    return await this.ilistaTarefaRepository.create({
      nome: createListaTarefaDto.nome,
      user_id: idUserAuth
    });
  }

  async retornePorId(idlista: number, idUserAuth: number){
    const lista: ListaTarefaEntity = await this.ilistaTarefaRepository.findById(idlista);

    if(lista.userId != idUserAuth) throw new UnauthorizedException();

    return await this.ilistaTarefaRepository.findById(idlista);
  }

  async ListasDeTarefaDoUsuario(idUserAuth: number): Promise<ResponseListaTarefaDto[]> {
    return await this.ilistaTarefaRepository.findByUsersId(idUserAuth);
  }

/*
  async update(id: number, updateListaTarefaDto: UpdateListaTarefaDto) {
    return `This action updates a #${id} listaTarefa`;
  }
*/
  async remove(id: number) {
    return `This action removes a #${id} listaTarefa`;
  }
}
