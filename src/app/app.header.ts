import { Component } from '@angular/core';

@Component({
  selector: 'header-root',
  template:
    `
    <nav>
      <a routerLink="" routerLinkActive="active">HOME</a>&nbsp;
      <a routerLink="about" routerLinkActive="active">ABOUT</a>
    </nav>
  
    `
})
export class HeaderComponent { }