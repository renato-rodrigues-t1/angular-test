import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, shareReplay, switchMap, tap } from 'rxjs';
import { Movie, UnsplashImage } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly moviesUrl = "http://127.0.0.1:8000/";
  private readonly ACCESS_KEY = "cfJSbOhoPv4JIkZqbpBjBhxKk2eRCQI6mOUH5L9DPKk";

  private trandingMovies$ = new BehaviorSubject<Movie[] | null>(null);

  private recomendedMovies$ = new BehaviorSubject<Movie[] | null>(null);

  constructor(private readonly http: HttpClient) { }
  private loadMovieList(
    movieUrl: string,
    imageUrlFactory: (count: number) => string,
    subject: BehaviorSubject<Movie[] | null>
  ): Observable<Movie[]> {
    if (subject.value !== null) {
      return subject.asObservable().pipe(
        filter((movies): movies is Movie[] => movies !== null)
      );
    }

    return this.http.get<Movie[]>(movieUrl).pipe(
      map((movies) => {
        if (!Array.isArray(movies)) throw new Error('Invalid movies data');
        return { movies, count: movies.length };
      }),
      switchMap(({ movies, count }) =>
        this.http.get<UnsplashImage[]>(imageUrlFactory(count)).pipe(
          map((images) =>
            movies.map((movie, i) => ({ ...movie, image: images[i] }))
          )
        )
      ),
      tap((enriched) => subject.next(enriched)),
      shareReplay(1)
    );
  }

  getTrendingMovies(): Observable<Movie[]> {
    return this.loadMovieList(
      this.moviesUrl + 'movies/tranding',
      (count) => `https://api.unsplash.com/photos?client_id=${this.ACCESS_KEY}&per_page=${count}&page=1`,
      this.trandingMovies$
    );
  }

  getRecommendedMovies(): Observable<Movie[]> {
    return this.loadMovieList(
      this.moviesUrl + 'movies/recomended',
      (count) => `https://api.unsplash.com/photos/random?client_id=${this.ACCESS_KEY}&count=${count}`,
      this.recomendedMovies$
    );
  }
}
