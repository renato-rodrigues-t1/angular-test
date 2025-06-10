import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tranding-movie-card',
  templateUrl: './tranding-movie-card.component.html',
  styleUrls: ['./tranding-movie-card.component.css']
})
export class TrandingMovieCardComponent {

  @Input() movie?: Movie;

  constructor(private router: Router) { }

  openMovie() {
    this.router.navigate(['/movie', this.movie?.title]);
  }

}
