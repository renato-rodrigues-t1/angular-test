import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarkedMovies: Movie[] = [];
  loadingBookmarks = false;

  constructor(private readonly moviesService: MovieService) { }

  ngOnInit(): void {
    this.loadingBookmarks = true;
    this.moviesService.getRecommendedMovies().pipe(finalize(() => this.loadingBookmarks = false)).subscribe((data) => {
      console.log('Received recommended movies>>>>>>>>>:', data);
      this.bookmarkedMovies = data.filter(movie => movie.isBookmarked);
    });
  }

  onUpdateMovie(updatedMovie: Movie) {
    this.moviesService.updateRecommendedMovie(updatedMovie);
  }
}
