import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { UpdateBillsPageRoutingModule } from './update-bills-routing.module';

import { UpdateBillsPage } from './update-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBillsPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [UpdateBillsPage]
})
export class UpdateBillsPageModule {}
