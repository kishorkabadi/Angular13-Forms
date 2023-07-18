import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,NgForm,Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form-with-validators',
  templateUrl: './reactive-form-with-validators.component.html',
  styleUrls: ['./reactive-form-with-validators.component.css']
})
export class ReactiveFormWithValidatorsComponent {
  title = 'Reactive Driven Form with Validator';
  formDetails: FormGroup;
//Syntax of validator in Angular 13 version
  constructor(private frmBuilder: FormBuilder) {
    this.formDetails = frmBuilder.group({
      firstName: ['',[Validators.required,Validators.minLength(6)]],
      lastName:  ['',[Validators.required,Validators.minLength(6)]],
      email:  ['',[Validators.required,Validators.email]]
    })
  }

  // Syntax of validator in Angular 16 version
  // constructor(private frmBuilder: FormBuilder) {
  //   this.formDetails = frmBuilder.group({
  //     firstName:new FormControl('', [Validators.required,Validators.minLength(6)]),
  //     lastName: new FormControl('',[Validators.required,Validators.minLength(6)]),
  //     email: new FormControl('',[Validators.required,Validators.email])
  //   })
  // }
  ngOnInit()
  {}
  submitFormData(regForm:any)
  {
    console.log(regForm.get('firstName').value);
    console.log(regForm.controls);
  }
  GetFirstName()
  {
    
  }
  ResetForm()
  {
    this.formDetails.reset();
  }
}
