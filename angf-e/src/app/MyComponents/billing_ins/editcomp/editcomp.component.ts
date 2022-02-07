import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { ClientApiService } from 'src/app/Services/client-api.service';

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
  
    constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){ }
    
    ngOnInit(): void {
      
      this.getdata();
      
    }
     
    
    getdata(){
    this.id = this.route.snapshot.params['billingId'];
    this.itemId=this.route.snapshot.params['itemId'];
    this.service.getclientbyid(this.id).subscribe(data=>{
      this.item=data;
      for(let m of this.item.client_inv_del.$values){
        if(m.inv_delivery.id==this.itemId)
        {
          this.x=m;
        }
      }
    });
    }   
  
    submit(){
      this.itemId=this.route.snapshot.params['itemId'];
      this.x.inv_delivery.client_inv_del=null;
      console.log(this.itemId,this.x.inv_delivery);

      this.service.clientinvupdate( this.itemId,this.x.inv_delivery).subscribe(res => {
           console.log('Post updated successfully!');
           this.router.navigateByUrl('billing-instruction');
      })
    }
  }

