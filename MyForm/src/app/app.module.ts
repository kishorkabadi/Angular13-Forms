import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormWithValidatorsComponent } from './reactive-form-with-validators/reactive-form-with-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    ReactiveFormWithValidatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
