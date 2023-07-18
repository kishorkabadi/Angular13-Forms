import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,NgForm } from '@angular/forms'
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  title = 'Reactive Driven Form';
  formDetails: FormGroup;
  constructor(private frmBuilder: FormBuilder) {
    this.formDetails = frmBuilder.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()

    })
  }
  ngOnInit()
  {}
  submitFormData(regForm:any)
  {
    console.log(regForm.controls);
  }
}
