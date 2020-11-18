import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { DeleteBillsPageRoutingModule } from './delete-bills-routing.module';

import { DeleteBillsPage } from './delete-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteBillsPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [DeleteBillsPage]
})
export class DeleteBillsPageModule {}
