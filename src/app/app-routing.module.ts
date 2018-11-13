import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'load/:data', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
