import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './views/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './views/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './views/page-list-orders/page-list-orders.component';

@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
