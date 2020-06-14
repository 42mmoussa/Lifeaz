import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { InterventionCreateComponent } from "./intervention/intervention-create/intervention-create.component";
import { InterventionListComponent } from "./intervention/intervention-list/intervention-list.component";
import { InterventionListBodyComponent } from './intervention/intervention-list/intervention-list-body/intervention-list-body.component';
import { InterventionListNavbarComponent } from './intervention/intervention-list/intervention-list-navbar/intervention-list-navbar.component';
import { InterventionListPaginationComponent } from './intervention/intervention-list/intervention-list-pagination/intervention-list-pagination.component';

const routes: Routes = [
  {
    path: 'intervention',
    children: [
      { path: ":page", component: InterventionListComponent },
      { path: "create", component: InterventionCreateComponent },
      { path: '', redirectTo: '1', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'intervention/1' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InterventionCreateComponent,
    InterventionListComponent,
    InterventionListBodyComponent,
    InterventionListNavbarComponent,
    InterventionListPaginationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
