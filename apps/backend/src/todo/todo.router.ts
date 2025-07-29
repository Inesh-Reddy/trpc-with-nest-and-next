import { Query, Router } from 'nestjs-trpc';
import { todoSchema } from './todo.schema';
import { Inject } from '@nestjs/common';
import { TodoService } from './todo.service';

@Router({ alias: 'todo' })
export class TodoRouter {
  constructor(@Inject(TodoService) private todoService: TodoService) {}
  @Query({ output: todoSchema })
  getTodo(): object {
    return this.todoService.getAllTodos();
  }
}
