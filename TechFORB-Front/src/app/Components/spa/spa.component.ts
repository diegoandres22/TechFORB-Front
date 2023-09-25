import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.css']
})
export class SpaComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    let local = window.localStorage.length;

    const rutaActual = this.route.snapshot.routeConfig?.path;

    if (rutaActual === "home") {
      if (local === 0) {
        this.router.navigate(['/login']);
      }
    }

  }



}