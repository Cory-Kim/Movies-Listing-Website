import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './app.header';
import { AppComponent } from './app.component';
import { AboutComponent } from './app.about';
import { MainComponent } from './app.main';

const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
