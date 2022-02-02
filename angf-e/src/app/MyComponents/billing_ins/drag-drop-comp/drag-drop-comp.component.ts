import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-comp',
  templateUrl: './drag-drop-comp.component.html',
  styleUrls: ['./drag-drop-comp.component.css']
})
export class DragDropCompComponent{

  items = ['InlandMarine', 'Casualty', 'Other', 'Package', 'Executive Risk','Aviation','Surety','Marine','Enviornmental'];

  basket = [''];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
