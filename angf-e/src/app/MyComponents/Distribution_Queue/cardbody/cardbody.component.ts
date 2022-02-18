import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cardbody',
  templateUrl: './cardbody.component.html',
  styleUrls: ['./cardbody.component.css']
})
export class CardbodyComponent implements OnInit {

  @Input() obj!:any
  x:any
  
  constructor() { }

  ngOnInit(): void {
  }

  show(data:any){
    this.x=data
  }

}
