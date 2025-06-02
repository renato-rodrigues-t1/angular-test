import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
  },
  {
    path: 'orders', component: OrdersComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
