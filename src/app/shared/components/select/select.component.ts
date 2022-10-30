import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
 @Input() title:string=''
 @Input() data:any[]=[]
 @Output() selectedOption= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  detectechanges(event:any){
    this.selectedOption.emit(event)

  }

}
