import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Movies } from 'src/app/shared/models/movies.interfaces';
import { Results } from '../../shared/models/movies.interfaces';





@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = environment.url;
  header = environment.headers;
  params = environment.params;
  account_id = environment.account_id;

  constructor(private http: HttpClient) { }
  getNowplayingMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.url}/movie/now_playing`, {headers: this.header});
  }

  getFavoriteMovies(): Observable<Movies[]> {
      
  return this.http.get<Movies[]>(`${this.url}/account/${this.account_id}/favorite/movies`,{ params: this.params});
  }

  markAsFavorite(media_id: number, favorite: boolean): Observable<any> {
    return this.http.post<any[]>(`${this.url}/account/${this.account_id}/favorite`,{media_type:'movie', media_id, favorite},{ params: this.params});
  }

}
