import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('click') onElementClick(){
    this.toggleHighlight()
  }

  @Input('appHighlight') color: string

  constructor(private el: ElementRef) { 
  }

  toggleHighlight(){
    this.el.nativeElement.style.color == ''
      ? this.highlight(this.color)
      : this.highlight(null);
  }

  highlight(color: string){
    this.el.nativeElement.style.color = color
  }

}
