import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PrductsService {
  URL=environment.urlBackend
  constructor( private http:HttpClient) { }


  getAllProducts(){
    return this.http.get(this.URL+'products')
  }

  getAllCategories(){
    return this.http.get(this.URL+'products/categories')

  }
  getProductsByCategories(key:string){
    return this.http.get(this.URL+'products/category/'+key)

  }
  getProductById(id:any){
    return this.http.get(this.URL+'products/'+id)

  }

}
