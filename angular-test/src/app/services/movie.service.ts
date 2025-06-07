import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private readonly moviesUrl = "http://127.0.0.1:8000/";
  private readonly ACCESS_KEY = "cfJSbOhoPv4JIkZqbpBjBhxKk2eRCQI6mOUH5L9DPKk";

  private readonly thumbnailsTrandingUrl = `https://api.unsplash.com/photos?client_id=${this.ACCESS_KEY}&per_page=29&page=2`

  private readonly thumbnailsRecomendedUrl = `https://api.unsplash.com/photos/random?client_id=${this.ACCESS_KEY}&count=29`


  constructor(private readonly http: HttpClient) { }

  getTrandinglMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl + "movies/tranding");
  }

  getRecomendedlMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl + "movies/recomendend");
  }

  getTrandingThumbnails(): Observable<any> {
    return this.http.get<any>(this.thumbnailsTrandingUrl);
  }

  getThumbnails(): Observable<any> {
    return this.http.get<any>(this.thumbnailsRecomendedUrl);
  }

}
