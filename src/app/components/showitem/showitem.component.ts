import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { ItemService } from '../../services/todo-service/item.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {

  todos: Todo[];
  todo: Todo;
  action = 'Show';
  incompleteTodos: Todo[];
  // tslint:disable-next-line:no-inferrable-types
  isExpanded: boolean = false;
  showIcon = 'fa fa-plus-circle';

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getListOfTodos().subscribe((todos) => {

      this.todos = todos;
    });

  }



  showIncTodos() {

    this.itemService.getListOfTodos().subscribe((todos) => {
      this.todos = todos;
    });
    this.incompleteTodos = [{ id: null }];
    this.todos.forEach((cur, index) => {
      console.log('todo status' + cur.title + '****' + cur.status);
      if (cur.id !== null && cur.status === false) {
        console.log('if' + cur.title);
        this.incompleteTodos.push(cur);
      }
    });

    this.todos = this.incompleteTodos;
  }
  getListOfTodos() {
    this.isExpanded = !(this.isExpanded);

    this.action = (this.action === 'Hide') ? 'Show' : 'Hide';
    if (this.action === 'Hide') {
      this.showIcon = 'fa fa-minus-circle';
      this.itemService.getListOfTodos().subscribe((todos) => this.todos = todos);
    } else {
      this.showIcon = 'fa fa-plus-circle';
    }
  }

  selectTodo(todo: Todo) {

    this.itemService.setFormTodo(todo);
    console.log(todo);

  }

  deleteTodo(todo: Todo) {
    this.itemService.deleteTodo(todo);
  }


  showCheckCircle(status: boolean) {
    if (status === true) {
      return 'fa fa-check-circle size-big text-success';
    } else {
      return 'fa fa-check-circle size-big text-secondary';
    }

  }

  changeStatus(todo: Todo) {
    if (todo.status === true) {
      todo.status = false;
    }
    else {
      todo.status = true;
    }
    this.itemService.updateTodo(todo);
  }


  // markComplete(todo: Todo)
  // {
  //   if(todo.status==='Complete')
  //   {
  //     todo.status = 'Incomplete';
  //   }
  //   else{
  //     todo.status = 'Complete';
  //   }
  //   console.log("hello"+todo.id+ todo.status);
  //  this.itemService.updateTodo(todo);
  // }

}
