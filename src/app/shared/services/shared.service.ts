import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies.interfaces';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url = environment.url;
  header = environment.headers;
  params = environment.params;
  account_id = environment.account_id;
  constructor(private http: HttpClient) { }


 
}
