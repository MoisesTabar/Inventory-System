import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { IonicModule } from '@ionic/angular';

import { SaveArticlesPageRoutingModule } from './save-articles-routing.module';

import { SaveArticlesPage } from './save-articles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveArticlesPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [SaveArticlesPage]
})
export class SaveArticlesPageModule {}
