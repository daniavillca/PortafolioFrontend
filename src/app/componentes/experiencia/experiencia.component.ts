import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SeExperienciaLaboralService } from 'src/app/servicio/se-experiencia-laboral.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe:ExperienciaLaboral[]=[];



  constructor( private seExperienciaLarboral:SeExperienciaLaboralService,private tokenService:TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargaExperienciaLaboral();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }
  cargaExperienciaLaboral():void{
    this.seExperienciaLarboral.list().subscribe(
      data => {this.expe = data});
  }

}

