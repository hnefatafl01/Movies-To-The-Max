import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnChanges, OnInit, OnDestroy {
  query;
  movies;
  selectedMovie;
  movieId;
  searchError;
  searchResponse;
  moviesSubscription: Subscription;
  subscription: Subscription;
  type: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnChanges() {
    this.movieService.retrieveMovies().subscribe(
      (movies) => {
        this.movies = movies;
        console.log(movies);
      }
    );
  }

  ngOnInit() {


    // this.type = '';
    // this.route.queryParams.subscribe(
    //   (queryParams) => {
    //     console.log(queryParams['query']);
    //     this.movieService.searchService(queryParams['query'])
    //     .subscribe(
    //       (movieSearchData: any) => {
    //         this.movies = movieSearchData.Search;
    //         this.searchError = movieSearchData.Error;
    //         this.searchResponse = movieSearchData.Response;
    //         return this.movies;
    //       }
    //     );
    //   }
    // );
    // this.subscription = this.movieService.getOrderBy().subscribe(
    //   (sub) => {
    //     this.type = sub;
    //     console.log(this.type);
    //   }
    // );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  findType(filter, $event) {
    $event.preventDefault();
    console.log(filter);
    this.movieService.setOrderBy(filter);
    return false;
  }

  onSelectMovie(movie) {
    this.selectedMovie = movie;
    this.movieId = this.selectedMovie.imdbID;
    this.router.navigate(['/search', this.movieId]);
  }

}
