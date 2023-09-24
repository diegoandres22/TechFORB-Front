import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {

  vewOperations: boolean = true;

  fVewOperations(event: Event, state: boolean) {

    event.preventDefault();
    if (state == false) {

      this.vewOperations = false;
    }
    if (state == true) {

      this.vewOperations = true;
    }
  }

}
