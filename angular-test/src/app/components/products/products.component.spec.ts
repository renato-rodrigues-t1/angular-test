import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsComponent } from './products.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { ProductsService } from 'src/app/services/products.service';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productServiceMock: ProductsService

  const mockProducts = [
    { id: 1, title: 'Product 1', price: 10, description: 'Description 1' },
    { id: 2, title: 'Product 2', price: 20, description: 'Description 2' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent, LoadingComponent],
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productServiceMock = TestBed.inject(ProductsService);

    jest.spyOn(productServiceMock, 'fetchAllProducts').mockReturnValue(of(mockProducts));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on init', () => {
    expect(productServiceMock.fetchAllProducts).toHaveBeenCalled();
    expect(component.products).toEqual(mockProducts);
  });
});
