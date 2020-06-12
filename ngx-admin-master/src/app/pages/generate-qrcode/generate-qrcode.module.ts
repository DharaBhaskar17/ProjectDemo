import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQrcodeComponent } from './generate-qrcode.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GenerateQrcodeComponent
  }
]

@NgModule({
  declarations: [GenerateQrcodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GenerateQRCodeModule { }
