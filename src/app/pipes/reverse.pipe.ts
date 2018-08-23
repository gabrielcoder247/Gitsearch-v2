import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) : string {
    let reversedStr=value.split(" ").reverse().join().replace(","," ")
    return reversedStr;
  }

}
