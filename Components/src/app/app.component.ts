import { Component, Inject } from '@angular/core';
import { IUser } from './interfaces/user';
import { API_URL_TOKEN, MyService, MY_SERVICE } from './providers';
import { UserService } from './user.service';

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

users: IUser[] | null = null;

  welcomeMessage = 'Hello!';

  isVisible = false;

  nameInput = 'Test test';

  nameInputBtnHandler(data: {inputEl: HTMLInputElement}) : void {
    console.log(data.inputEl.value);
  }

  // constructor(@Inject(API_URL_TOKEN) public apiURL: string, @Inject(MY_SERVICE) MyService: MyService,
  //  userService: UserService) {
  //   console.log(MyService.value); 
  //   console.log(userService); 

  // }

  constructor(userService: UserService) {
    userService.loadUsers().subscribe(users => { this.users = users });
  }

  toggleHandler() : void {
    this.isVisible = !this.isVisible;
  }
}
