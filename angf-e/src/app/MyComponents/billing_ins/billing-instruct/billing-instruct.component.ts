import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-billing-instruct',
  templateUrl: './billing-instruct.component.html',
  styleUrls: ['./billing-instruct.component.css']
})
export class BillingInstructComponent implements OnInit {
  
  object!:any
  item!:any
  client_data:any=[]
  client_name!:string

  constructor(public service: ClientApiService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.client_list();

  }
  client_list(){
    this.service.getClient().subscribe(res=>{
      this.client_data=res;
    })
  }
  onSubmit(){
    this.client_name = this.client_name.toLowerCase();
    console.log(this.client_name)
    this.object=this.client_data.$values.find((z: { client_name: string; })=>z.client_name==this.client_name)
    
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
  loading(id:number){
    this.getdata(id)
  }
  getdata(id:number){
    
    this.service.getclientbyid(id).subscribe(res=>{
      this.item=res;
      console.log("inside ",this.item)
    })
    
  }
  scroll1(el: HTMLElement) {
    el.scrollIntoView();
}
  }
 
  

