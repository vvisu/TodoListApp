import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {


itemName :string;
  constructor() { }

  ngOnInit() {
  }


  addItem()
  {
        
  }

  clearText()
  {
    console.log("clear todo item");
  }
}
