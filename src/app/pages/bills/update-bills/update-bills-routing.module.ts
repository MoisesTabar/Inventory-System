import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBillsPage } from './update-bills.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBillsPageRoutingModule {}
