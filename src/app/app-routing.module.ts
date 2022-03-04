import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {path: '', redirectTo:"home", pathMatch: "full"},
  {path: "home", component:HomeComponent},
  {path: "single", component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
