import { Paciente } from './../models/paciente';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class PacienteService {

    private readonly API: string = 'https://localhost:44351/Paciente';

    constructor(private httpClient: HttpClient) { }

    getAllPacientes(): Observable<Paciente[]> {
      return this.httpClient.get<Paciente[]>(this.API);
    }

    deletePaciente(id: Number) : Observable<string>{
      return this.httpClient.delete<string>(this.API+"/"+id);
    }

    criarPaciente(paciente: Paciente){
      return this.httpClient.post<string>(this.API+"/", paciente);
    }

    getHistoricoPaciente(id: any){
      return this.httpClient.get<Paciente>(this.API+ "/Historico/" + id);
    }
  }
