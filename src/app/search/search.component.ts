import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movie = { name: '' };
  movies;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movie.name = '';
  }

  search(form: NgForm) {
    const movieName = form.value.movieName;
    this.movieService.searchService(movieName).subscribe((res) => {
      console.log(res);
    })
    // console.log(this.route.params['search'])
    // this.router.navigate(
    //   ['/search']
      // {
      //   relativeTo: this.route,
        // queryParams: {
        //   query: this.movie.name,
        // }
      // }
    // );
    // form.reset();
  }

}
