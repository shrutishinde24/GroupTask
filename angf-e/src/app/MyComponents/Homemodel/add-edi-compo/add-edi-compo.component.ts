import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NetApiService } from 'src/app/Services/net-api.service';

@Component({
  selector: 'app-add-edi-compo',
  templateUrl: './add-edi-compo.component.html',
  styleUrls: ['./add-edi-compo.component.css']
})
export class AddEdiCompoComponent implements OnInit {
  hom!:home
  @Input() lob!:string
  @Input() cre!:string
  updatedBy!:string
  
  constructor(public service: NetApiService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    const hom={
      lobCategoryName:this.lob,
      createdBy:this.cre,
      updatedBy:'',
      isActive:true
    }
    console.log(hom)
    this.service.addHome(hom).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('Lobcat');
    })
  }
}
interface home {
  lobCategoryName: string;
  createdBy: string;
  updatedBy: string;
  isActive:boolean
}
