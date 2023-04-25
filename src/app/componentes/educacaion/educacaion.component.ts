import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacaion',
  templateUrl: './educacaion.component.html',
  styleUrls: ['./educacaion.component.css']
})
export class EducacaionComponent implements OnInit{
  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
