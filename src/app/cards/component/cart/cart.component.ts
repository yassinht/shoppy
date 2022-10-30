import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:any[]=[]
  total:any=0
  success:boolean=false
  constructor(private service:CartsService) { }

  ngOnInit(): void {
    this.getCartProducts()
  }
  getCartProducts(){
    if  ("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.cartProducts)
    this.getCartToTal()
  }


  plus(i:any){
    this.cartProducts[i].quantity++
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.getCartToTal()

  }
  moins(i:any){
    this.cartProducts[i].quantity--
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.getCartToTal()


  }
  getCartToTal(){
    this.total=0
    for(let x in this.cartProducts)
    this.total +=this.cartProducts[x].item.price * this.cartProducts[x].quantity;

  }
  detectChange(){
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.getCartToTal()


  }
  deleteProduct(i:number){
    this.cartProducts.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.getCartToTal()

  }
  Clear(){
    this.cartProducts=[]
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    this.getCartToTal()

  }
  addcart()
{
let products=this.cartProducts.map(item=>{
  return {productId:item.item.id,quantity:item.quantity}
})
  let Model={
    userId:5,
    date:new Date(),
    products:products

  }
  this.service.createNewCart(Model).subscribe(res=>
    this.success=true
    )
  console.log(Model)

}
}
