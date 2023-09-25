import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

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
      elementoDOM.style.backgroundColor = "rgba(53, 53, 53, 0.5)";
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
      elementoDOM.style.backgroundColor = "transparent";
      const optionAll = document.querySelectorAll('.option');
      optionAll.forEach((e) => {
        // e.style.backgroundColor = 'red';
        e.classList.remove("no-hidden");
      });

      this.abierto = !this.abierto;
      console.log(this.abierto);
    }
  }

  inProcess(e:Event, dato:any){

    let who = dato;
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: who,
      footer: 'Esta funcion esta en desarrollo'
    })


  }
}


