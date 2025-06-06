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

  constructor(private readonly service: MovieService) { }

  ngOnInit(): void {
    this.service.getAllMovies().subscribe(data => {
      this.trandingMovies = data;
      this.recomendedMovies = data;
    })
  }

}
