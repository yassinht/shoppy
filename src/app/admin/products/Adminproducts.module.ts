import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminproductsRoutingModule } from './Adminproducts-routing.module';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    AdminproductsRoutingModule
  ]
})
export class AdminproductsModule { }
