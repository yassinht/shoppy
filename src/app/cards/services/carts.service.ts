import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  URL=environment.urlBackend

  constructor(private http:HttpClient ) { }
  createNewCart(model:any){
    return this.http.post(this.URL+'carts',model)

  }
}
