import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ChildComponent } from './template/child/child.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './dependency_injection/user/user.component';
import { TasksComponent } from './change_detection/tasks/tasks.component';
import { TodolistComponent } from './change_detection/tasks/todolist/todolist.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { RouterComponent } from './routing/router/router.component';
import { HelloworldComponent } from './life_cycle_hooks/helloworld/helloworld.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ChildComponent,
    DirectivesComponent,
    UserComponent,
    TasksComponent,
    TodolistComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    RouterComponent,
    HelloworldComponent,
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
