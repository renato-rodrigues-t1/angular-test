import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from './users.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent, LoadingComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [UserService]
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
