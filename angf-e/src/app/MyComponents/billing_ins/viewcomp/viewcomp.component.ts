import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-viewcomp',
  templateUrl: './viewcomp.component.html',
  styleUrls: ['./viewcomp.component.css']
})
export class ViewcompComponent implements OnInit {
  id!:number;

  @Input() x:any
  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){ }

  ngOnInit(): void {
    console.log(this.x.inv_delivery.id);
  }
  

}
