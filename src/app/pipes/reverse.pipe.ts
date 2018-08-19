import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string)  {
    const stringToReverse: string = value;
    const stringArray = stringToReverse.split('').reverse().join('');

    return stringArray;
  }
}
