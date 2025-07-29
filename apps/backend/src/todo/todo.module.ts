import { Module } from '@nestjs/common';
import { TodoRouter } from './todo.router';
import { TodoService } from './todo.service';

@Module({
  providers: [TodoRouter, TodoService],
})
export class TodoModule {}
