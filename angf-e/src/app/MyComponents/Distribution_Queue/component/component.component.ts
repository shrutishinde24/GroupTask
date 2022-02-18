import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/app/Services/client-api.service';


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  obj!:any
  item!:any
  cli_li:any=[]
  c_name!:string

  constructor(public service: ClientApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.client_list();
  }

  client_list(){
    this.service.getqueuedata().subscribe(res=>{
      this.cli_li=res;
    })
  }

 onSubmit(){
  this.c_name = this.c_name.toLowerCase();
  console.log(this.c_name)
  this.obj=this.cli_li.$values.find((z: { client_name: string; })=>z.client_name==this.c_name)  
    
  }
  
  loading(id:number){
    this.get(id)
    
  }
  get(id:number){
    
    this.service.getdatabyid(id).subscribe(res=>{
      this.item=res;
      console.log("inside ",this.item)
    })
    
  }
  scroll1(el: HTMLElement) {
    el.scrollIntoView();
}
  }
 
  