import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveArticlesPage } from './save-articles.page';

const routes: Routes = [
  {
    path: '',
    component: SaveArticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveArticlesPageRoutingModule {}
