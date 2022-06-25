import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HighlightDirective } from './shared/highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('paragraphHighlight') pDirective: HighlightDirective | undefined;


  ngAfterViewInit(): void {
    console.log(this.pDirective)
  }

  title = 'Forms';

  users = [
    {
      name: 'Ivan',
      age: 20
    }, {
      name: 'Peter',
      age: 30
    }
  ]

  isHighlighted = false;

  toggleHighlightHandler(p: HighlightDirective) {
    console.log(p);
    this.isHighlighted = !this.isHighlighted; 
  }
}
 

