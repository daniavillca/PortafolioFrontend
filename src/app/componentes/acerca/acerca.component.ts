import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent  implements OnInit{
    constructor(private datosPorfolio:PorfolioService){}
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos();
    }
    }

