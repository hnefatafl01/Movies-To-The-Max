import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  private filter = new Subject<any>();
  private search = new Subject<any>();

  constructor(private http: Http) {}

  searchService(movieName: string): Observable<any[]> {
    console.log(movieName);
    return this.http.post(`http://localhost:3000/search`, movieName)
      .map(
        (response: Response) => {
          console.log(response.json().Search);
          return response.json().Search;
          // const movies = response.json().Search;
          // this.search.next({ 'movies': movies });
        }
      );
      // .catch(
      //   (error) => {
      //     return Observable.throw(error);
      //   }
      // );
  }

  getMovieData(id: string) {
    // return this.http.get()
      // .map((r) => {
      //   return r.json();
      // })
      // .catch(
      //   (error) => {
      //     return Observable.throw(error);
      //   }
      // );
  }

  retrieveMovies() {
    return this.search.asObservable();
  }

  setOrderBy(filter: string) {
    return this.filter.next({ filter: filter });
  }

  getOrderBy(): Observable<any> {
    return this.filter.asObservable();
  }

}
