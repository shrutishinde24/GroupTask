import {ViewChild,Component} from '@angular/core';
import {Sort,MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface Dessert {
  code: number;
  s_id: number;
  Instruction_Level: string;
  glob:string;
}


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  desserts: Dessert[] = [
    {Instruction_Level: 'Billing', code: 159, s_id: 6, glob:'InlandMArine'},
    {Instruction_Level: 'Account', code: 237, s_id: 9, glob:'Casualty'},
    {Instruction_Level: 'Union', code: 262, s_id: 16, glob:'Executive Risk'},
    {Instruction_Level: 'Hdfc', code: 305, s_id: 4, glob:'Environmental'},
    {Instruction_Level: 'Insurance', code: 356, s_id: 16, glob:'Others'},
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }

  sortData(event: Sort) {
    const data = this.desserts.slice();
    if (!event.active || event.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = event.direction === 'asc';
      switch (event.active) {
        case 'Instruction_Level':
          return compare(a.Instruction_Level, b.Instruction_Level, isAsc);
        case 'code':
          return compare(a.code, b.code, isAsc);
        case 's_id':
          return compare(a.s_id, b.s_id, isAsc);
        case 'glob':
          return compare(a.glob, b.glob, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
