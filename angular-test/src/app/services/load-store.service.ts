import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class LoadStoreService {

  private readonly _isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading$ = this._isLoading.asObservable

  private readonly _products = new BehaviorSubject<Product[]>([]);
  readonly products$ = this._products.asObservable();

  setProducts(products: Product[]) {
    this._products.next(products);
  }

  setLoading(loading: boolean): void {
    this._isLoading.next(loading);
  }

}
