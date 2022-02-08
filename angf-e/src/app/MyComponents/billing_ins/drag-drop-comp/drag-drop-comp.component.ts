import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { FieldSettingsModel,ToolbarSettingsModel} from "@syncfusion/ej2-dropdowns";

@Component({
  selector: 'app-drag-drop-comp',
  templateUrl: './drag-drop-comp.component.html',
  styleUrls: ['./drag-drop-comp.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DragDropCompComponent{

  @ViewChild("listbox1", { static: false }) public listObj1:any;
  @ViewChild("listbox2", { static: false }) public listObj2:any;
  public dataA: { [key: string]: Object }[] = [
    { Name: "Australia", Code: "AU" },
    { Name: "Bermuda", Code: "BM" },
    { Name: "Canada", Code: "CA" },
    { Name: "Cameroon", Code: "CM" },
    { Name: "Denmark", Code: "DK" },
    { Name: "France", Code: "FR" },
    { Name: "Finland", Code: "FI" },
    { Name: "Germany", Code: "DE" },
    { Name: "Hong Kong", Code: "HK" }
  ];
  public dataB: { [key: string]: Object }[] = [
    { Name: "India", Code: "IN" },
    { Name: "Italy", Code: "IT" },
    { Name: "Japan", Code: "JP" },
    { Name: "Mexico", Code: "MX" },
    { Name: "Norway", Code: "NO" },
    { Name: "Poland", Code: "PL" },
    { Name: "Switzerland", Code: "CH" },
    { Name: "United Kingdom", Code: "GB" },
    { Name: "United States", Code: "US" }
  ];
  public fields: FieldSettingsModel = { text: "Name" };
  public toolbarSettings: ToolbarSettingsModel = {
    items: [
      "moveUp",
      "moveDown",
      "moveTo",
      "moveFrom",
      "moveAllTo",
      "moveAllFrom"
    ]
  };
  click() {
    var data = this.listObj2.getDataList();
    console.log(data);
  }
  
}
