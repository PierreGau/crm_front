import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PagesListClientsComponent } from './views/pages-list-clients/pages-list-clients.component';
import { PagesAddClientsComponent } from './views/pages-add-clients/pages-add-clients.component';
import { PagesAddClientComponent } from './views/pages-add-client/pages-add-client.component';
import { PagesEditClientComponent } from './views/pages-edit-client/pages-edit-client.component';


@NgModule({
  declarations: [
    PagesListClientsComponent,
    PagesAddClientsComponent,
    PagesAddClientComponent,
    PagesEditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
