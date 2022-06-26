import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  users  = [
    {
      name: 'Test 1',
      age: 20
    },
    {
      name: 'Test 2',
      age: 30
    },
    {
      name: 'Test 3',
      age: 40
    }
  ];



  counter = 0;

  intervalSubscribtion: Subscription;

  constructor() { 
    this.intervalSubscribtion = interval(1000).subscribe(() => { this.counter++; });
  }


  ngOnDestroy(): void {
    this.intervalSubscribtion.unsubscribe();
  }

  calculateAvgAge(users: any[]): number {
    return users.reduce((acc: any, curr: { age: any; }) =>  acc + curr.age, 0) / users.length;
  }

}
