import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAddClientComponent } from './views/pages-add-client/pages-add-client.component';
import { PagesEditClientComponent } from './views/pages-edit-client/pages-edit-client.component';
import { PagesListClientsComponent } from './views/pages-list-clients/pages-list-clients.component';

const routes: Routes = [
  { path: '', component: PagesListClientsComponent },
  { path: 'add', component: PagesAddClientComponent },
  { path: 'edit', component: PagesEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
