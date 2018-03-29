import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CustomersComponent} from './components/customers/customers.component';
import {HomeComponent} from './components/home/home.component';
import {OrdersComponent} from './components/orders/orders.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'HomeComponent', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'orders/:id',
    component: OrdersComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/:id',
    component: CustomersComponent,
  },
  {path: '**', redirectTo: 'HomeComponent', pathMatch: 'full'},
];

export const appRouterModule = RouterModule.forRoot(routes, {useHash: false});
