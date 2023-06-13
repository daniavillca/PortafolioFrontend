import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SeExperienciaLaboralService } from 'src/app/servicio/se-experiencia-laboral.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string ='';
  descripcionE: string = '';

  constructor(private seExperienciaLaboral: SeExperienciaLaboralService,  private router: Router){}

  ngOnInit(): void {
    
  }
  onCreate(){
    const expe = new ExperienciaLaboral(this.nombreE, this.descripcionE);
    this.seExperienciaLaboral.save(expe).subscribe(data =>{
      alert("Experiencia Añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )

  }

}
