import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OrdersComponent } from './orders.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { OrdersService } from 'src/app/services/orders.service';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent, LoadingComponent],
      imports: [HttpClientTestingModule],
      providers: [OrdersService]
    });
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
