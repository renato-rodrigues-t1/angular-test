import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order.interface';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = []

  constructor(private readonly ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe({
      next: (orders) => {
        console.log('>>>>>>>>>', orders);
        this.orders = orders
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
