import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-editcomp',
  templateUrl: './editcomp.component.html',
  styleUrls: ['./editcomp.component.css']
})
export class EditcompComponent implements OnInit {

  id!: number;
  item!:any;

  
  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){ }
  
  ngOnInit(): void {
    
    this.getdata();
    
  }
   
  
  getdata(){
    this.id = this.route.snapshot.params['billingId'];
    this.service.getclientbyid(this.id).subscribe(data=>{
      this.item=data;
    });
  }   

  submit(){
    console.log();
    this.service.clientmeta(this.item, this.id).subscribe(res => {
         this.router.navigateByUrl('billing-instruction');
    })
  }
}


