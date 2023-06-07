import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent  implements OnInit{
  persona: persona = new persona("","","");

    constructor(public personaServicio: PersonaService){}

    ngOnInit(): void {
      this.personaServicio.getPersona().subscribe(data =>{this.persona = data})
    }
    }

