import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

 async create(createTodoDto: CreateTodoDto) {
    
  return await this.todoRepository.save(createTodoDto) ;
  }

 async findAll() {
    return await this.todoRepository.find();
  }

async findOne(id: number) {
    return await this.todoRepository.findOne(id);
  }

 async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOne(id);
    Object.assign(todo, updateTodoDto);
    return await this.todoRepository.save(todo);
  }

 async remove(id: number) {
    return await this.todoRepository.delete(id);
  }
}
