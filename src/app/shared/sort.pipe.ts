import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, criterion: string): any {
    if (criterion) {
      return value.filter((el) => {
        if (el.Type === criterion) {
          return el;
        }
      });
    } else {
      return value;
    }
  }

}
