import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  private filter = new Subject<any>();
  private searchSubject = new Subject<any>();
  private API_URL = 'https://mtmserver.herokuapp.com';
  // private API_URL = 'http://localhost:3000';
  private headers = new Headers({'Accept' : '*/*', 'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  searchService(term: string) {
    return this.http.post(`${this.API_URL}/search`, { search: term }, { headers: this.headers })
      .map(
        (response: Response) => {
          this.searchSubject.next({ movies: response.json().Search });
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
    return this.http.get(`${this.API_URL}/result/${id}`)
      .map((res) => {
        return res.json();
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
