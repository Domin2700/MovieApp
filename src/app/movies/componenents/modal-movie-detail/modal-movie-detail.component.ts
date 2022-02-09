import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  Results } from '../../../shared/models/movies.interfaces';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-modal-movie-detail',
  templateUrl: './modal-movie-detail.component.html',
  styleUrls: ['./modal-movie-detail.component.css']
})
export class ModalMovieDetailComponent implements OnInit {
  @Input() favorite?: boolean;
  @Input()  movie: Results;
  @Output() ejecutar = new  EventEmitter(); 
  poster = environment.urlPoster;


  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
  }
  
  markAsFavorite(media_id: number,favorite: boolean): void {
    this.moviesService.markAsFavorite(media_id,favorite).subscribe((resp) => {
     this.ejecutar.emit();
     this.favorite = !this.favorite;
    }),
    ((error) => {
      console.log(error)
    });;
    
  }

}
