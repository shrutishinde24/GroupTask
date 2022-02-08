import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { ClientApiService } from 'src/app/Services/client-api.service';
  import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-editcomp',
  templateUrl: './editcomp.component.html',
  styleUrls: ['./editcomp.component.css']
})
export class EditcompComponent implements OnInit {

  id!:number;
  itemId!:number;
  x!:any
  item!:any

    constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router ,public datepipe: DatePipe){ 
      let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
    }
    
    ngOnInit(): void {
      
      this.getdata();
      
    }
     
    
    getdata(){
      let currentDateTime =this.datepipe.transform((new Date), 'yyyy-mm-dd');
    this.id = this.route.snapshot.params['billingId'];
    this.itemId=this.route.snapshot.params['itemId'];    
    this.service.getclientbyid(this.id).subscribe(data=>{
      this.item=data;
      for(let m of this.item.client_inv_del.$values){
        if(m.inv_delivery.id==this.itemId)
        {
          this.x=m;
          this.x.inv_delivery.updated_on=currentDateTime;
        }
      }
    });
    }   
  
    submit(){
      //let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
      this.itemId=this.route.snapshot.params['itemId'];
      this.x.inv_delivery.client_inv_del=null;
      //this.x.inv_delivery.updated_on=currentDateTime;
      console.log(this.itemId,this.x.inv_delivery);

      this.service.clientinvupdate( this.itemId,this.x.inv_delivery).subscribe(res => {
           console.log('Post updated successfully!');
           this.router.navigateByUrl('billing-instruction');
      })
    }
  }

