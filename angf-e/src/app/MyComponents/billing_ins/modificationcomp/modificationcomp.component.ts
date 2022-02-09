import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  ViewEncapsulation, ViewChild } from "@angular/core";
import { FieldSettingsModel,ToolbarSettingsModel} from "@syncfusion/ej2-dropdowns";

@Component({
  selector: 'app-modificationcomp',
  templateUrl: './modificationcomp.component.html',
  styleUrls: ['./modificationcomp.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ModificationcompComponent implements OnInit {
  @Input() item!:any;
  date!:Date
  desc!:string
  glob!:string
  contact_name!:string
  email!:string
  id!:number
  instr_level!:string
  
  public ird_account:boolean=true
  public ird_contact:boolean=false
  constructor(public service: ClientApiService,private router: Router) { }
 
  ngOnInit(): void {
  }
  submit(){
    var data={
      instr_level:this.instr_level,
      agency_code:'test code',
      s_id:'01',
      contact_name:this.item.client_name,
      glob:this.glob,
      desc:this.desc,
      updated_by:'test user',
      updated_on:this.date,
      client_inv_del:null,
      email:this.item.email,
      
    }
    console.log(data)
    this.id=this.item.id
    this.service.clientmeta(this.id,data).subscribe(res=>{

      console.log(data,this.id);
      this.router.navigateByUrl('Home');
    })
  }
   ird(){
    this.ird_account=true;
    this.ird_contact=false;
}
      irds(){
    this.ird_account=false;
    this.ird_contact=true;
}


}