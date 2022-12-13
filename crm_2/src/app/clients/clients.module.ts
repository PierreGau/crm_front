import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientsRoutingModule } from './clients-routing.module';
import { PagesAddClientComponent } from './views/pages-add-client/pages-add-client.component';
import { PagesEditClientComponent } from './views/pages-edit-client/pages-edit-client.component';
import { PagesListClientsComponent } from './views/pages-list-clients/pages-list-clients.component';

@NgModule({
  declarations: [
    PagesListClientsComponent,
    PagesAddClientComponent,
    PagesEditClientComponent,
  ],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
