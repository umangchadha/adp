import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatToolbar, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FilmGridComponent } from './film-grid/film-grid.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { ErrorCardComponent } from './error-card/error-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageStructureComponent,
    FilmGridComponent,
    FilmCardComponent,
    ErrorCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
