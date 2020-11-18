import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule } from '@ionic/angular';

import { SaveBillsPageRoutingModule } from './save-bills-routing.module';

import { SaveBillsPage } from './save-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveBillsPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [SaveBillsPage]
})
export class SaveBillsPageModule {}
