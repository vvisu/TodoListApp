import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';
import {ItemService} from '../../services/todo-service/item.service';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {

  todos : Todo[] ;
  action : string ="Show";
  
  isExpanded : boolean = false;


  constructor(public itemService: ItemService) { }

  ngOnInit() {
   this.todos =  this.itemService.getListOfTodos();
  
  }

  

  getListOfTodos()
  {
    this.isExpanded = !(this.isExpanded);
     
    this.action = (this.action === "Hide") ? "Show" : "Hide";
   
  }

  deleteTodo(todo: Todo)
  {
    this.itemService.deleteTodo(todo);
  }


  showCheckCircle(todo: Todo)
  {
    if(todo.status === 'Complete')
    {
    return "fa fa-check-circle size-big text-success";
    }

    else{
      return "fa fa-check-circle size-big text-secondary";
    }

  }
    markComplete(todo: Todo)
    {
      if(todo.status==='Complete')
      {
        todo.status = 'Incomplete';
      }
      else{
        todo.status = 'Complete';
      }
     
    }
    
}
