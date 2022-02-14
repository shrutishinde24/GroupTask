import { Component,Input, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientApiService } from 'src/app/Services/client-api.service';
import {  MatSort ,Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface finalData{
  instr_level:string;
  agency_code:string;
  s_id:number;
  contact_name:string;
  glob:string;
  desc:string;
  updated_by:string;
  updated_on:Date;
}

const Element_Data :finalData[]=[];

@Component({
  selector: 'app-final-data',
  templateUrl: './final-data.component.html',
  styleUrls: ['./final-data.component.css']
})
export class FinalDataComponent implements OnInit {
  @Input() item!:any
  x:any
  
  displayedColumns: string[]=['level','code','siteId','contact','glob','desc','updatedby','updatedon'];
  dataSource=new MatTableDataSource(Element_Data);

  @ViewChild(MatSort) sort!: MatSort;
  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){ }

  ngOnInit(): void {
    this.dataSource.sort=this.sort;
  }

  show(data:any){
    this.x=data
  }
 

}
