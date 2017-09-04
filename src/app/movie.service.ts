import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  private filter = new Subject<any>();
  private searchSubject = new Subject<any>();

  constructor(private http: Http) {}

  searchService(term: string) {
    return this.http.post(`http://localhost:3000/search`, { search: term } )
      .map(
        (response: Response) => {
          this.searchSubject.next({ movies: response.json().Search })
          return response.json().Search;
        }
      )
      .catch(
        (error) => {
          return Observable.throw(error);
        }
      );
  }

  getMovieData(id: string) {
    return this.http.get(`http://localhost:3000/search/${id}`)
      .map((r) => {
        console.log(r);
        return r.json();
      })
      .catch(
        (error) => {
          return Observable.throw(error);
        }
      );
  }

  retrieveMovies(): Observable<any> {
    return this.searchSubject.asObservable();
  }


  setOrderBy(filter: string) {
    return this.filter.next({ filter: filter });
  }

  getOrderBy(): Observable<any> {
    return this.filter.asObservable();
  }

}
