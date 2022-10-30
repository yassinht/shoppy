import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { AdminproductsModule } from './admin/products/Adminproducts.module';
import { AdmincardsModule } from './admin/cards/Admincards.module';

import { CardsModule } from './cards/cards.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CardsModule,
    RouterModule,
    AdminproductsModule,
    AdmincardsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
