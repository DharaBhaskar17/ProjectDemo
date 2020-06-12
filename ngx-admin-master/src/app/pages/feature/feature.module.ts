import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path : '',
    component : FeatureComponent
  }
]

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class FeatureModule { }
