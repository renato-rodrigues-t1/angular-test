import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  @Input() movie!: Movie;
  @Output() bookmarkToggled = new EventEmitter<Movie>();

  constructor() { }

  toggleBookmark(event: Event) {
    if (this.movie) this.movie.isBookmarked = !this.movie.isBookmarked;
    this.bookmarkToggled.emit(this.movie);
  }

}