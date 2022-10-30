import { PrductsDetailsComponent } from './products/components/prducts-details/prducts-details.component';
import { CartComponent } from './cards/component/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"details/:id",component:PrductsDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"},
  {path:"cards",}



]

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes),CommonModule],

})
export class AppRoutingModule { }
