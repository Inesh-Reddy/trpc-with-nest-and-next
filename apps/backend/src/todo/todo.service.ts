import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getAllTodos(): object {
    return {
      title: 'gym',
      description: 'now..',
    };
  }
}
