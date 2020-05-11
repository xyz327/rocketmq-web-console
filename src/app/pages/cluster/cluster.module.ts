import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClusterRoutingModule } from './cluster-routing.module';
import { ClusterComponent } from './cluster.component';


@NgModule({
  declarations: [ClusterComponent],
  imports: [
    CommonModule,
    ClusterRoutingModule
  ]
})
export class ClusterModule { }
