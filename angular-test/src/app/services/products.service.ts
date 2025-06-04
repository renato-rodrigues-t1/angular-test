import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = 'https://fakestoreapi.com/products/';

  constructor(private readonly http: HttpClient) { }

  fetchAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
