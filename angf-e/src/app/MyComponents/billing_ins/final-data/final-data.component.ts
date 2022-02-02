import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-data',
  templateUrl: './final-data.component.html',
  styleUrls: ['./final-data.component.css']
})
export class FinalDataComponent implements OnInit {
  @Input() item!:any
  constructor() { }

  ngOnInit(): void {
  }

}
