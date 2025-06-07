import { Component } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  trandingMovies: Movie[] = [];
  recomendedMovies: Movie[] = [];
  trandingThumbnails: any[] = [];
  recomendedThumbnails: any[] = [];

  constructor(private readonly service: MovieService) { }

  ngOnInit(): void {
    this.service.getTrandinglMovies().subscribe(data => {
      this.trandingMovies = data;
      this.recomendedMovies = data;
    });

    this.service.getTrandingThumbnails().subscribe(data => {
      this.trandingThumbnails = data;
    })

    this.service.getThumbnails().subscribe(data => {
      this.recomendedThumbnails = data;
    })
  }

}
