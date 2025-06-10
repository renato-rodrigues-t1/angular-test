import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movie: Movie | undefined;
  playing = false;

  constructor(
    private route: ActivatedRoute,
    private store: MovieService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.store.getTrendingMovies().subscribe(movies => {
      this.movie = movies.find(m => m.title === id);
    });
  }
}
