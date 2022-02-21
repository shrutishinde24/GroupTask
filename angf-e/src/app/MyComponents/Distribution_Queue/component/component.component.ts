import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientApiService } from 'src/app/Services/client-api.service';

import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  obj!:any
  item!:any
  invoice_name!:string;
  client_name!:string;

  constructor( public service: ClientApiService,
    private router: Router) { 
      
    }
    

  ngOnInit(): void {
  }
  excel=[]; 
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

  


markedCm(status:string){
    
  this.service.getdistributionbystatus(status).subscribe(res=>{
    this.item=res;
    console.log("inside ",this.item)
  })
}



searching(invname:string,clientname:string){
  
  this.service.getdistributionbysearch(invname,clientname).subscribe(res=>{
    this.item=res;
    console.log("inside ",this.item)
  
  })

}
exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

 
}