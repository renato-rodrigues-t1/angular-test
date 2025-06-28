import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, finalize, Subject, switchMap, take, tap } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  loadingTranding = false;
  loadingRecomendations = false;

  trandingMovies: Movie[] = [];
  recomendedMovies: Movie[] = [];
  searchedMovies: Movie[] = [];

  trandingThumbnails: any[] = [];
  recomendedThumbnails: any[] = [];

  searchQuery = '';
  searchQuery$ = new Subject<string>();

  constructor(private readonly service: MovieService) { }

  ngOnInit(): void {
    this.loadingTranding = true;
    this.loadingRecomendations = true;

    this.service.getTrendingMovies().
      pipe(
        take(1),
        finalize(() => this.loadingTranding = false)).
      subscribe(data => {
        this.trandingMovies = data;
      });

    this.service.getRecommendedMovies().
      pipe(
        take(1),
        finalize(() => this.loadingRecomendations = false)).
      subscribe(data => {
        this.recomendedMovies = data;
      });

    this.searchQuery$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.loadingRecomendations = true),
      switchMap(query =>
        this.service.searchForMovies(query).pipe(
          take(1),
          finalize(() => this.loadingRecomendations = false)
        )
      )
    ).subscribe(res => {
      this.searchedMovies = res;
    });

  }

  onSearchChange(query: string) {
    this.searchQuery$.next(query);
  }

  onUpdateMovie(updatedMovie: Movie) {
    console.log('Received from child', updatedMovie); // <-- must log!
    this.service.updateRecommendedMovie(updatedMovie);
  }

}
