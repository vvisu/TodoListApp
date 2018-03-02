import { Injectable } from '@angular/core';
import {Todo} from '../../models/todo';



@Injectable()
export class ItemService {

  todos : Todo[] =  [{
  title:'Call Amazon',
  date : '02/28/2018 10:00 PM',
  status : 'Complete'
  },

  {
  title:'Go to Laundry',
  date : '02/03/2018 05:00 PM',
  status : 'Incomplete',
  },

  {
  title:'UPS Store Pickup',
  date : '03/28/2018 03:00 PM',
  status : 'Complete'
  },

  {
  title:'Book Tickets',
  date : '03/08/2018 01:00 PM',
  status : 'Incomplete'
  }

  ];

  constructor() { }



  getListOfTodos()
  {
  console.log("fRom service");
    return this.todos;
  }

  deleteTodo(todo: Todo)
  {
     for(let t of this.todos)
     {
     console.log(t.title);
        if(t.title === todo.title)
        {
          console.log(t.title);
          // this.todos.splice(t, 1);

         }
     
     }
  }


}
