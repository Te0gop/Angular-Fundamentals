import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  toggleHighlightHandler() {
    this.isHighlighted = !this.isHighlighted; 
  }
}
