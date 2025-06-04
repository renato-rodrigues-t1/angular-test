import { TestBed } from '@angular/core/testing';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch orders', (done) => {
    const mockOrders = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockOrders)
      } as Response)
    );

    service.getOrders().subscribe(orders => {
      expect(orders).toEqual(mockOrders);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/orders');
      done();
    });
  });
});
