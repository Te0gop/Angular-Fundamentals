
import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightDirective(Renderer2.arguments, ElementRef.arguments);
    expect(directive).toBeTruthy();
  });
});
