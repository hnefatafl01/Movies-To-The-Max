import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';

import { MovieService } from './movie.service';
import { AlignMoviesPipe } from './align-movies.pipe';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchStartComponent } from './search/search-start/search-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { SortPipe } from './shared/sort.pipe';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/search'
  // },
  {
    path: '',
    component: SearchComponent,
    children: [
      { path: '', component: SearchStartComponent },
      { path: 'search', component: SearchResultComponent },
      { path: 'search/:id', component: MovieDetailComponent }
    ]
  },
  { path: '**', component: SearchComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    AlignMoviesPipe,
    MovieDetailComponent,
    SearchStartComponent,
    DropdownDirective,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
