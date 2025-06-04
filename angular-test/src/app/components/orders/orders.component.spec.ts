import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Order } from 'src/app/models/Order.interface';
import { OrdersComponent } from './orders.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { OrdersService } from 'src/app/services/orders.service';
import { of } from 'rxjs';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let orderServiceMock: jest.Mocked<OrdersService>;

  const mockOrders: Order[] = [
    {
      id: 1, name: 'Order 1'
    },
    {
      id: 2, name: 'Order 2'
    }
  ]

  beforeEach(async () => {

    orderServiceMock = {
      getOrders: jest.fn()
    } as unknown as jest.Mocked<OrdersService>;

    await TestBed.configureTestingModule({
      declarations: [OrdersComponent, LoadingComponent],
      providers: [{ provide: OrdersService, useValue: orderServiceMock }],
    }).compileComponents;

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch orders successfully on init', () => {
    orderServiceMock.getOrders.mockReturnValue(of(mockOrders));

    component.ngOnInit();

    expect(orderServiceMock.getOrders).toHaveBeenCalled();
    expect(component.orders).toEqual(mockOrders);
    expect(component.loading).toBe(false);
  });

});
