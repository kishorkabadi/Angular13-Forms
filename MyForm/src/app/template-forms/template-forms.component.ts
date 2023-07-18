import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  title = 'Template Driven Form';
  ngOnInit() {

  }
  Register(regForm: any) {
    console.log(regForm.value);
    console.log(regForm.controls.firstName.value);
  }
}
