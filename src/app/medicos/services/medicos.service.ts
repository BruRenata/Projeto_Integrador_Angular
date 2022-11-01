import { Medico } from './../models/medico';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly API: string = 'https://localhost:44351/Medico';

  constructor(private httpClient: HttpClient) { }

  getAllMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.API);
  }

  deleteMedico(id: number) : Observable<string>{
    return this.httpClient.delete<string>(this.API+"/"+id);
  }

  criarMedico(medico: Medico){
    return this.httpClient.post<string>(this.API+"/", medico);
  }
}
