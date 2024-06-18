import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort';  
import { MatPaginatorModule } from '@angular/material/paginator'; 

import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { TableCardComponent } from './table-card/table-card.component';
import { LineChartCardComponent } from './line-chart-card/line-chart-card.component';
import {
  provideCharts,
  withDefaultRegisterables,
  } from 'ng2-charts';
import { IconService } from './services/icon-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CardListComponent,
    TableCardComponent,
    LineChartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
 }
