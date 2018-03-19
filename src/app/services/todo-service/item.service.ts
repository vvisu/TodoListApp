import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class ItemService {

  todo: Todo;
  todos: Todo[];

  private behaviorSubject = new BehaviorSubject<Todo>({
    id: null, title: null,
    date: null, status: null
  });

  selectedTodo = this.behaviorSubject.asObservable();
  constructor() {
    this.todos = [{
      id: 1,
      title: 'Call Amazon',
      date: '02/28/2018 10:00 PM',
      status: true
    },
    {
      id: 2,
      title: 'Go to Laundry',
      date: '02/03/2018 05:00 PM',
      status: false,
    },
    {
      id: 3,
      title: 'UPS Store Pickup',
      date: '03/28/2018 03:00 PM',
      status: true
    },
    {
      id: 4,
      title: 'Book Tickets',
      date: '03/08/2018 01:00 PM',
      status: false
    }];

  }

  updateTodo(updateTodo: Todo) {
    this.todos.forEach((cur, index) => {
      if (cur.id === updateTodo.id) {
        this.todos.splice(index, 1);
      }
    });
    this.todos.unshift(updateTodo);
  }


  
  addNewTodo(todo: Todo) {
    console.log('testing' + todo.date);
    this.todos.unshift(todo);
  }


  getListOfTodos(): Observable<Todo[]> {
    console.log('fRom service');
    return of(this.todos);
  }

  deleteTodo(todo: Todo) {
    this.todos.forEach((cur, index) => {

      if (cur.id === todo.id) {
        this.todos.splice(index, 1);
      }
    });
  }


  setFormTodo(todo: Todo) {
    this.behaviorSubject.next(todo);
  }
}
