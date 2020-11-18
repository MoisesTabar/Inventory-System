import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteBillsPage } from './delete-bills.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteBillsPageRoutingModule {}
