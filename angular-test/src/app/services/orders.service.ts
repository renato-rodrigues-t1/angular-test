import { Injectable } from '@angular/core';
import { Order } from '../models/order.interface';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiURL = 'http://localhost:8080/';

  constructor() { }

  getOrders(): Observable<Order[]> {
    const promise = fetch(`${this.apiURL}orders`).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    });

    return from(promise);
  }

}
