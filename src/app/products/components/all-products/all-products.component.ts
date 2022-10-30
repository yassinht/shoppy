import { ProductsModule } from './../../products.module';
import { Component, OnInit } from '@angular/core';
import { PrductsService } from '../../services/prducts.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:Product[] =[]
  categories:string[] =[]
  load:boolean=false
  cartProducts:any[]=[]
  constructor( private service:PrductsService) { }

  ngOnInit(): void {
    this.getProduct()
    this.getCategories()
  }
  getProduct(){
    this.load=true

    this.service.getAllProducts().subscribe((res:any)=>
    {
       this.load=false

      console.log(res)
      this.products=res
    },err=>{
      this.load=false

console.log(err)    })
  }


  getCategories(){
    this.load=true
    this.service.getAllCategories().subscribe((res:any)=>
    {
      this.load=false

      console.log(res)
      this.categories=res
    },err=>{
      this.load=false

console.log(err)    })
  }


  filterCategory(event:any){
    let value= event.target.value
    console.log(value)
    this.getProductsByCategories(value)



  }

  getProductsByCategories(key:string){
    this.load=true

    this.service.getProductsByCategories(key).subscribe((res:any)=>
    {
      this.load=false

      this.products=res
      if(key==""){
        this.getProduct()
      }

    },err=>{
      this.load=false

console.log(err)    })
  }

  addToCart(event:any){

if("cart" in localStorage){

  this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
  let exist =this.cartProducts.find(item=>item.item.id==event.item.id)
  if(exist){
    alert("product already added")
  }
  this.cartProducts.push(event)
 localStorage.setItem("cart",JSON.stringify(this.cartProducts))
 console.log(this.cartProducts)
} else{
this.cartProducts.push(event)
localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}

  }
}
