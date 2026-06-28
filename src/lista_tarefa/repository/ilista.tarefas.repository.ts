import { CreateListaTarefaDto } from "../dto/create.lista.tarefa.dto";
import { UpdateListaTarefaDto } from "../dto/update.lista.tarefa.dto";
import { ListaTarefaEntity } from "../entity/lista.tarefa.entity";

export abstract class Ilista_tarefa{
    abstract findById(id: number): Promise<ListaTarefaEntity>;
    abstract create(data: CreateListaTarefaDto): Promise<ListaTarefaEntity>;
    abstract update(id: number, data: UpdateListaTarefaDto): Promise<ListaTarefaEntity>;
    abstract delete(id: number): Promise<void>;
}