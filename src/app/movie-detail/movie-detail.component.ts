import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieId;
  movie;
  metascore;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movie = '';
    this.movieId = this.route.snapshot.params['id'];
    this.movieService.getMovieData(this.movieId)
      // .subscribe((movie) => {
      //   this.movie = movie;
      //   this.metascore = this.movie.Metascore;
      // });
  }

}
