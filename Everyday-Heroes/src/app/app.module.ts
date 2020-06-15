// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { InterventionListComponent } from './intervention-list/intervention-list.component';
import { InterventionListBodyComponent } from './intervention-list/intervention-list-body/intervention-list-body.component';
import { InterventionListCounterComponent } from './intervention-list/intervention-list-counter/intervention-list-counter.component';
import { InterventionListNavbarComponent } from './intervention-list/intervention-list-navbar/intervention-list-navbar.component';
import { InterventionListPaginationComponent } from './intervention-list/intervention-list-pagination/intervention-list-pagination.component';
import { InterventionListRangeComponent } from './intervention-list/intervention-list-range/intervention-list-range.component';
import { InterventionListSearchComponent } from './intervention-list/intervention-list-search/intervention-list-search.component';
import { InterventionCreateComponent } from './intervention-create/intervention-create.component';
import { InterventionButtonComponent } from './intervention-button/intervention-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InterventionListComponent,
    InterventionListBodyComponent,
    InterventionListCounterComponent,
    InterventionListNavbarComponent,
    InterventionListPaginationComponent,
    InterventionListRangeComponent,
    InterventionListSearchComponent,
    InterventionCreateComponent,
    InterventionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
