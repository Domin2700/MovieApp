import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './componenents/movies/movies.component';
import { BrowseComponent } from './componenents/browse/browse.component';
import { AboutComponent } from './componenents/about/about.component';
import { ModalMovieDetailComponent } from './componenents/modal-movie-detail/modal-movie-detail.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [MoviesComponent, BrowseComponent, AboutComponent, ModalMovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule

  ]
})
export class MoviesModule { }
