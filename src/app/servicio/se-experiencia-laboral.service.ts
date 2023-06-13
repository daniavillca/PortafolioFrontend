import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../model/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class SeExperienciaLaboralService {
  expURL = 'http://localhost:8080/explab/'

  constructor(private httpClient:HttpClient) { }

  public list():Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.expURL + 'lista');

  }
  public datail(id:number): Observable<ExperienciaLaboral>{
    return this.httpClient.get<ExperienciaLaboral>(this.expURL + `detail${id}` );
}
public save(experienciaLaboral:ExperienciaLaboral): Observable<any>{
  return this.httpClient.post<any>(this.expURL + 'create',experienciaLaboral);
}
public update(id: number, experienciaLaboral:ExperienciaLaboral): Observable<any>{
  return this.httpClient.put<any>(this.expURL + `update/${id}`, experienciaLaboral);

}
public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
}
}
