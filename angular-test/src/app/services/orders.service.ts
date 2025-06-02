import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiURL = 'http://localhost:8080/';

  constructor(private readonly httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.apiURL}orders`);
  }


}
