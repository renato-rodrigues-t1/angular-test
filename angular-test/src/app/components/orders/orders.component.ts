import { Component, OnInit } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';
import { Order } from 'src/app/models/Order.interface';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = []
  loading = true;

  constructor(private readonly ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().pipe(
      finalize(() => this.loading = false),
      catchError((error) => {
        console.error('Error fetching orders:', error);
        this.loading = false;
        return throwError(() => new Error('Failed to fetch orders'));
      })
    ).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      }
    })
  }
}
