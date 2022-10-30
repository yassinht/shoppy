import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { PrductsDetailsComponent } from './components/prducts-details/prducts-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllProductsComponent,
    PrductsDetailsComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  exports:[
  ]
})
export class ProductsModule { }
