import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent  implements OnInit{
  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
