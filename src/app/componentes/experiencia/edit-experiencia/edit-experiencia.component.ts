import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SeExperienciaLaboralService } from 'src/app/servicio/se-experiencia-laboral.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab : ExperienciaLaboral = null;

  constructor(private seExperienciaLaboral: SeExperienciaLaboralService, private activateRouter: ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.seExperienciaLaboral.datail(id).subscribe(
      data =>{
        this.expLab = data;
      }
    )
   
  }
  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.seExperienciaLaboral.update(id, this.expLab).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

}
