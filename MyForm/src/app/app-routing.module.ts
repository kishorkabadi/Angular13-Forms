import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormWithValidatorsComponent } from './reactive-form-with-validators/reactive-form-with-validators.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {
    path:'',component:TemplateFormsComponent
  },
  {
    path:'TemplateForms',component:TemplateFormsComponent
  },
  {
    path:'ReactiveForms',component:ReactiveFormsComponent
  },
  {
    path:'ReactiveFormsWithValidator',component:ReactiveFormWithValidatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
