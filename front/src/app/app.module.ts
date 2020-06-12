import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InterventionCreateComponent } from './intervention/intervention-create/intervention-create.component';

@NgModule({
  declarations: [
    AppComponent,
    InterventionCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
