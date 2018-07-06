import {  Directive, ElementRef, HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appActiveHighlight]',
  exportAs: 'highlight'
})
export class ActiveHighlightDirective {

  private elClass = '';
  constructor(private el: ElementRef) { }


 

  @HostListener('focus') onFocus() {
    console.log('focus');
    
    this.elClass = 'active hightlight';
  }

  @HostListener('blur') onblur() {
    console.log('blur');
    
    if (!(this.el.nativeElement as HTMLInputElement).value)  this.elClass = '';
  }

  public get activeClasses():string {return this.elClass; }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   
  }
}
