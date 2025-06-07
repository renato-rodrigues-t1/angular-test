import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-tranding-movie-card',
  templateUrl: './tranding-movie-card.component.html',
  styleUrls: ['./tranding-movie-card.component.css']
})
export class TrandingMovieCardComponent {

  @Input() movie?: Movie;
  @Input() thumbnails?: any;
  @Input() index: number = 0;

}
