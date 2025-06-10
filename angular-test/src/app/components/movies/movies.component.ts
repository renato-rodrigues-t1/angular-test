import { Component } from '@angular/core';
import { finalize, take } from 'rxjs';
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
  trandingThumbnails: any[] = [];
  recomendedThumbnails: any[] = [];

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
      })
  }

  onUpdateMovie(updatedMovie: Movie) {
    console.log('Received from child', updatedMovie); // <-- must log!
    this.service.updateRecommendedMovie(updatedMovie);
  }

}
