import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  @ViewChild('options', { static: true })
  optionsRef!: ElementRef;

  abierto: boolean = false;


  abrir() {

    if (!this.abierto) {
      const elementoDOM = this.optionsRef.nativeElement;
      elementoDOM.style.height = '200px';
      const optionAll = document.querySelectorAll('.option');
      optionAll.forEach((e) => {
        // e.style.backgroundColor = 'red';
        e.classList.add("no-hidden");
      });

      this.abierto = !this.abierto;
      console.log(this.abierto);

    } else {
      const elementoDOM = this.optionsRef.nativeElement;
      elementoDOM.style.height = '50px';
      const optionAll = document.querySelectorAll('.option');
      optionAll.forEach((e) => {
        // e.style.backgroundColor = 'red';
        e.classList.remove("no-hidden");
      });

      this.abierto = !this.abierto;
      console.log(this.abierto);
    }
  }
}


