import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() color = 'green';

  @Input() appHighlight = false;

  @HostListener('mouseenter') onMouseListener() {
    if(this.appHighlight) { return; }
    this.appHighlight = !this.appHighlight; 
    this.highlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(!this.appHighlight) { return; }
    this.appHighlight = !this.appHighlight; 
    this.highlight();
  }

  constructor(
    private render: Renderer2,
    private elementRef: ElementRef) { }

  highlight() {
    this.render.setStyle(
      this.elementRef.nativeElement, 'backgroundColor', this.appHighlight ? this.color : 'inherit'
    )
  }

  ngOnChanges(): void {
    this.highlight();
  }
}
