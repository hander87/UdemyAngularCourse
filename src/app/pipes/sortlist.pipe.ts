import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortlist',
  pure: false
})
export class SortlistPipe implements PipeTransform {
  transform(value: any, propName: string) {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
