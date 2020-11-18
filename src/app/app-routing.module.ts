import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'save-articles',
    loadChildren: () => import('./pages/articles/save-articles/save-articles.module').then( m => m.SaveArticlesPageModule)
  },
  {
    path: 'save-bills',
    loadChildren: () => import('./pages/bills/save-bills/save-bills.module').then( m => m.SaveBillsPageModule)
  },
  {
    path: 'update-bills',
    loadChildren: () => import('./pages/bills/update-bills/update-bills.module').then( m => m.UpdateBillsPageModule)
  },
  {
    path: 'delete-bills',
    loadChildren: () => import('./pages/bills/delete-bills/delete-bills.module').then( m => m.DeleteBillsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
