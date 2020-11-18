import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveBillsPage } from './save-bills.page';

const routes: Routes = [
  {
    path: '',
    component: SaveBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveBillsPageRoutingModule {}
