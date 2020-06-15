import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterventionListComponent} from './intervention-list/intervention-list.component';
import {InterventionCreateComponent} from './intervention-create/intervention-create.component';


const routes: Routes = [
  {
    path: 'intervention',
    children: [
      { path: 'list/:page', component: InterventionListComponent },
      { path: 'create', component: InterventionCreateComponent },
      { path: '', redirectTo: 'intervention/list/1', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'intervention/list/1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
