// Directive allows use of the @Directive decorator.
// ElementRef allows access to element in HTML.
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // Name the attribute.
  selector: '[myHighlight]'
})
export class HighlightDirective
{

  constructor(private el: ElementRef) { }


}
