import { Injectable } from '@angular/core';
import {Todo} from '../../models/Todo';



@Injectable()
export class ItemService {


  todos =  [{
    id : 1,
  title: 'Call Amazon',
  date : '02/28/2018 10:00 PM',
  status : 'Complete'
  },

  {
    id : 2,
  title: 'Go to Laundry',
  date : '02/03/2018 05:00 PM',
  status : 'Incomplete',
  },

  {
    id : 3,
  title: 'UPS Store Pickup',
  date : '03/28/2018 03:00 PM',
  status : 'Complete'
  },

  {
    id : 4,
  title: 'Book Tickets',
  date : '03/08/2018 01:00 PM',
  status : 'Incomplete'
  }

  ];

  constructor() { }


  
  updateTodo(todo: Todo): Todo[] {
    for ( const t of this.todos){
      console.log("testing"+t.id);
      if(t.id == todo.id){
        console.log("tbvnvbvesting"+t.id);
        this.todos.splice(t.id);
        this.todos.unshift(todo);
      }
      return this.todos;
    }
  }

  addNewTodo(todo?: Todo): Todo[] {
    console.log('testing' + todo.date);
    this.todos.unshift(todo);
    return this.todos;
  }


  getListOfTodos()
  {
  console.log('fRom service');
    return this.todos;
  }

  deleteTodo(todo: Todo) {
     for ( const t of this.todos) {
     console.log(t.title);
        if (t.title === todo.title){
          console.log(t.title);
          // this.todos.splice(t, 1);

         }
     }
  }
}
