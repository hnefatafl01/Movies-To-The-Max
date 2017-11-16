import { Component, OnInit, OnChanges } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {
  movie = { name: '' };
  movies;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnChanges() { }

  ngOnInit() { }

  search(form: NgForm) {
    const search = form.value.search;
    this.movieService.searchService(search)
      .subscribe((res) => {
        this.movies = res;
        console.log(res);
      });
    form.reset();
    this.router.navigate(['/results']);
  }

}
