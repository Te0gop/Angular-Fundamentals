import { Component } from '@angular/core';

const users = [
  {
    firstName: 'First name 1',
    lastName: 'Last name 1',
    age: 30
  },
  {
    firstName: 'First name 2',
    lastName: 'Last name 2',
    age: 31
  },
  {
    firstName: 'First name 3',
    lastName: 'Last name 3',
    age: 32
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeMessage = 'Hello!';

  isVisible = false;

  nameInput = 'Test test';

  users = users;

  nameInputBtnHandler(data: {inputEl: HTMLInputElement}) : void {
    console.log(data.inputEl.value);
  }

  constructor() {

  }

  toggleHandler() : void {
    this.isVisible = !this.isVisible;
  }
}
