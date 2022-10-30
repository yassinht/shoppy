import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincardsRoutingModule } from './Admincards-routing.module';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    AdmincardsRoutingModule
  ]
})
export class AdmincardsModule { }
