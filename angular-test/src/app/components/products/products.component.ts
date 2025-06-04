import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Product } from 'src/app/models/Product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  loading = false;

  constructor(private readonly productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.productsService.fetchAllProducts()
      .pipe(
        finalize(() => this.loading = false))
      .subscribe(data => {
        this.products = data;
        this.loading = false;
      })
  }

}
