import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alignMovies'
})
export class AlignMoviesPipe implements PipeTransform {

  transform(value: any, criteria): any {
    if (!value || (criteria !== 'even' && criteria !== 'odd')) {
      return value;
    }
    return value.filter((val, index) => {
      return criteria === 'even' ? index % 2 === 0 : index % 2 === 1;
    });
  }

}
