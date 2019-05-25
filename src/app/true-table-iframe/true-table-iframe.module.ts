import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrueTableIframePage } from './true-table-iframe.page';

const routes: Routes = [
  {
    path: '',
    component: TrueTableIframePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrueTableIframePage]
})
export class TrueTableIframePageModule {}
