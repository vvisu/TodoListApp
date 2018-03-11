import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ItemService } from '../../services/todo-service/item.service';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {


itemName :string;
todo: Todo;
dueDate : string;
  constructor(public itemService: ItemService) { }

  ngOnInit() {
  }


  addItem()
  {
    this.todo = {
      'id' : Math.random()*100,
       'title' : this.itemName,
    'date': this.dueDate,
  'status' : 'Incomplete' };

     this.itemService.addNewTodo(this.todo);
  }

  clearText()
  {
    console.log("clear todo item");
  }
}
