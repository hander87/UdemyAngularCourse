import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortlist'
})
export class SortlistPipe implements PipeTransform {

  transform(value: any) {
    // for (const stringArray of value) {
    //   console.log(stringArray);
    // }

    console.log(value);

  }

}
