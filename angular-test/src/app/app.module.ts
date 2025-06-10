import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { TrandingMovieCardComponent } from './components/movies/tranding-movie-card/tranding-movie-card.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    LoadingComponent,
    MoviesComponent,
    MovieCardComponent,
    TrandingMovieCardComponent,
    MovieComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
