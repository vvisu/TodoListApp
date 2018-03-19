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


itemName: string;

  id: number;
  isNewTodo: boolean;
  date: any;
  status: boolean;




dueDate: string;
  constructor(public itemService: ItemService) { }

  ngOnInit() {

    this.itemService.selectedTodo.subscribe((todo)=> {
      if (   todo.id === null) {
        this.isNewTodo = true;
        console.log( 'New' );
      } else {
        console.log( 'old' );
        this.isNewTodo = false;
        this.id = todo.id;
        this.itemName = todo.title;
        this.date = todo.date;
        this.status = todo.status;
      }
    });
  }


  addItem() {
  // {
  //   this.todo = {
  //     'id' : Math.random() * 100,
  //      'title' : this.itemName,
  //   'date': this.dueDate,
  // 'status' : false };
  if(this.isNewTodo){
  this.id =  Math.ceil(Math.random() * 1000);
   this.status = false;
   const addNewTodo = {id: this.id, title: this.itemName,
    status: this.status, date: this.date} ;
     this.itemService.addNewTodo(addNewTodo);
     console.log(this.id+'kjkj'+ addNewTodo);
  } else {
    const updateExistingTodo = {id: this.id, title: this.itemName,
      status: this.status, date: this.date};
    this.itemService.updateTodo(updateExistingTodo);
      console.log('updated todo'+ updateExistingTodo);
  }
    this.clearText();
  }

  clearText() {
    this.id = null,
    this.itemName = '';
    this.status = false;
    this.date = null;
    console.log('clear todo item');
  }
}
