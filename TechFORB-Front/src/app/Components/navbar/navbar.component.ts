import { Component } from '@angular/core';
import { AppComponent } from './../../app.component'
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  @ViewChild('navbar')
  navbarRef!: ElementRef;


  constructor(private router: Router) { }

  logo: string = "LOGO";


  inicio(event: Event) {
    event.preventDefault();
    this.router.navigate(['home/inicio']);
  }


  mostrado: boolean = false;

  salir() {
    if (!this.mostrado) {
      const elementoDOM = this.navbarRef.nativeElement;
      elementoDOM.style.transform = 'translate(0)';
      this.mostrado = true;
      console.log(this.mostrado);
    }else{
      const elementoDOM = this.navbarRef.nativeElement;
      elementoDOM.style.transform = 'translate(-100%)';
      this.mostrado = false;
    }
  }
}
