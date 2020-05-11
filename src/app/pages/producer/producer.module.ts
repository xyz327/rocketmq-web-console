import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducerRoutingModule } from './producer-routing.module';
import { ProducerComponent } from './producer.component';


@NgModule({
  declarations: [ProducerComponent],
  imports: [
    CommonModule,
    ProducerRoutingModule
  ]
})
export class ProducerModule { }
