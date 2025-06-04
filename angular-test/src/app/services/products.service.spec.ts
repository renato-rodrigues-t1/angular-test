import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });

    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all products', () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 10, description: 'Description 1' },
      { id: 2, title: 'Product 2', price: 20, description: 'Description 2' },
    ];

    service.fetchAllProducts().subscribe(resp => {
      expect(resp).toEqual(mockProducts);
      expect(resp.length).toBe(2);
    });

    const req = httpMock.expectOne('https://fakestoreapi.com/products/');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  })
});
