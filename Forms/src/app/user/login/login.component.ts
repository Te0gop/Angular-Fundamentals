import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errorMessage: string | undefined;

  form = {
    email: {
      touched: false,
      value: ''
    },
  
    password: {
      touched: false,
      value: ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
