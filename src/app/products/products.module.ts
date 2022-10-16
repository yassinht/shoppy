import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { PrductsDetailsComponent } from './components/prducts-details/prducts-details.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    PrductsDetailsComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsModule
  ]
})
export class ProductsModule { }
