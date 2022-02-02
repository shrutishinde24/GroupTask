import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';


@Component({
  selector: 'app-modificationcomp',
  templateUrl: './modificationcomp.component.html',
  styleUrls: ['./modificationcomp.component.css']
})
export class ModificationcompComponent implements OnInit {
  modi!:modification
  @Input() acc!:string
  @Input() body!:string
  @Input() glo!:string
  id!:number
  @Input() email!:string

  
  constructor(public service: NetApiService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    const modi={
      instr_level: '',
      agency_code: this.acc,
      s_id: 1,
      contact_name : '',
      glob : '',
      desc : this.body,
      updated_by : '',
      updated_on : '',
      client_inv_del: ''
    }
    console.log(modi)
    this.service.inv_addpost(modi).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('billing-instruction');
  })

  }
}


interface modification {
  instr_level: string;
  agency_code: string;
  s_id: number;
  contact_name : string;
  glob : string;
  desc : string;
  updated_by : string;
  updated_on : string;
  client_inv_del: string;
}
