import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EducacaionComponent } from './componentes/educacaion/educacaion.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaComponent,
    EducacaionComponent,
    PresentacionComponent,
    ExperienciaComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
