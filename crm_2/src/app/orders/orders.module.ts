import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrderComponent } from './views/page-list-order/page-list-order.component';
import { PageListOrdersComponent } from './views/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './views/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './views/page-edit-order/page-edit-order.component';


@NgModule({
  declarations: [
    PageListOrderComponent,
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
