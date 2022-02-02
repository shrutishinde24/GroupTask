import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NetApiService } from 'src/app/Services/net-api.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  id!:number;
  item!:any;
  constructor( public service: NetApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.showde();
  }
  showde(){
    this.id = this.route.snapshot.params['LobcatId'];
    this.service.getbyid(this.id).subscribe(data=>{
      this.item=data;
    });
  }
}
