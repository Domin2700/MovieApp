import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies, Results } from '../../../shared/models/movies.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesBillboard: Movies[] = [];
  favoriteMovies:  Movies[] = [];
  favorito?: boolean;
  loading = true;
  flag;
  field: string;
  poster = environment.urlPoster;
  movie: Results = {
    popularity: 0,
    vote_count: 0,
    video: false,
    poster_path: '',
    id: 0,
    adult: false,
    backdrop_path: '',
    original_language:'',
    original_title: '',
    genre_ids: null,
    title: '',
    vote_average: 0,
    overview: '',
    release_date: ''
   };
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.getFavoriteMovies();
   this.getMoviesBillboard();
  }



  getMoviesBillboard(): void {
    this.moviesService.getNowplayingMovies().subscribe((resp) => {
      this.moviesBillboard = resp;
      this.loading = false;
      this.flag = true;
      console.log(this.moviesBillboard);
    }),
    ((error) => {
      console.log(error)
    });
  }

  getFavoriteMovies(): void {
    this.moviesService.getFavoriteMovies().subscribe((resp) => {
      this.favoriteMovies = resp;
      this.flag = true;
      console.log(this.favoriteMovies);
    }),
    ((error) => {
      console.log(error)
    });;
  }

  markAsFavorite(media_id: number,favorite: boolean): void {
    this.moviesService.markAsFavorite(media_id,favorite).subscribe((resp) => {
      this.getFavoriteMovies();
    }),
    ((error) => {
      console.log(error)
    });;
    
  }


  favorite(media_id:number): boolean {
   if(this.favoriteMovies['total_results'] > 0) {
      return this.favoriteMovies['results'].some(movie => movie.id === media_id);
   }     
  }

  setMovie(item:Results, favorito: boolean ): void {
    this.favorito;
    this.favorito = favorito;
    this.movie = item;
  }
  orderBy(campo: string): void {
    this.field = campo;
}
}
