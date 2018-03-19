import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AdditemComponent } from './components/additem/additem.component';
import { ShowitemComponent } from './components/showitem/showitem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemService } from './services/todo-service/item.service';
import { DatePickerComponent } from './components/date-picker/date-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    ShowitemComponent,
    NavbarComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:
  [
  ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
