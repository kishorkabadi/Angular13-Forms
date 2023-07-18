import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyForm';
  ngOnInit()
  {



  }
  Register(regForm:any)
  {
console.log(regForm.value);
console.log(regForm.controls.firstName.value);
  }
}
