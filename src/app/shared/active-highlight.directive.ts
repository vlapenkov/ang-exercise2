import {  Directive, ElementRef, HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appActiveHighlight]',
  exportAs: 'highlight'
})
export class ActiveHighlightDirective {

  private nameOfCssClass='';
  private elClass = '';
  constructor(private el: ElementRef) { }

 
 @Input()
  public set appActiveHighlight(value: string) {
    console.log(`value is ${value}`);
    if (!value) {
      return;
    }
    this.nameOfCssClass = value;
  }

  @HostListener('focus') onFocus() {
        
   // this.elClass = 'active hightlight';
   this.elClass = this.nameOfCssClass;
  }

  @HostListener('blur') onblur() {
   
    if (!(this.el.nativeElement as HTMLInputElement).value)  this.elClass = '';
  }

  public get activeClasses():string {return this.elClass; }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   
  }
}
