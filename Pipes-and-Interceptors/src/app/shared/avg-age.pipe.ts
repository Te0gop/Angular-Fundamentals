import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avgAge',
  // pure: false
})
export class AvgAgePipe implements PipeTransform {

  transform(users: any[]): number {
    return users.reduce((acc: any, curr: { age: any; }) =>  acc + curr.age, 0) / users.length;
  }

}
