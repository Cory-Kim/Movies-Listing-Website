import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChildComponent } from './app.child';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './app.highlight.directive';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './app.header';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './app.main';
import { AboutComponent } from './app.about';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, HighlightDirective, HeaderComponent, MainComponent, AboutComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

