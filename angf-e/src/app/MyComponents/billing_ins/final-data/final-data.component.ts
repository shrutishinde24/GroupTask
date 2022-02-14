import { Component,Input, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientApiService } from 'src/app/Services/client-api.service';
import {  MatSort ,Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

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

//const Element_Data :finalData[]=[];

@Component({
  selector: 'app-final-data',
  templateUrl: './final-data.component.html',
  styleUrls: ['./final-data.component.css']
})
export class FinalDataComponent implements OnInit {
  @Input() item!:any
  x:any
  
  displayedColumns: string[]=['level','code','siteId','contact','glob','desc','updatedby','updatedon'];
  dataTableElements:finalData[]=[];
  //dataSource=new MatTableDataSource(Element_Data);
  dataSubject = new BehaviorSubject<Element[]>([]);

  //@ViewChild(MatSort) sort!: MatSort;
  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){ }

  ngOnInit(): void {
    //this.dataSource.sort=this.sort;
  }

  show(data:any){
    this.x=data
  }
  
  onSortData(sort: Sort) {
    let data = this.dataTableElements.slice();
    if (sort.active && sort.direction !== '') {
        data = data.sort((a: finalData, b: finalData) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'level': return this.compare(a.instr_level, b.instr_level, isAsc);
                case 'code': return this.compare(+a.agency_code, +b.agency_code, isAsc);
                case 'siteId': return this.compare(+a.s_id, +b.s_id, isAsc);
                case 'contact': return this.compare(+a.contact_name, +b.contact_name, isAsc);
                default: return 0;
            }
        });
    }
    this.dataSubject.next;
}

private compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

}
