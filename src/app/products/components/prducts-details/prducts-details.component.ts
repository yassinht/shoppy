import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrductsService } from '../../services/prducts.service';

@Component({
  selector: 'app-prducts-details',
  templateUrl: './prducts-details.component.html',
  styleUrls: ['./prducts-details.component.css']
})
export class PrductsDetailsComponent implements OnInit {
  id:any
data:any
loading:boolean=false
  constructor(private route:ActivatedRoute,private service:PrductsService) {
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.loading=true
    this.service.getProductById(this.id).subscribe(res=>{
      this.loading=false
      this.data=res
    })

  }

}
