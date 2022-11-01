import { Exame } from './../models/exame';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class ExameService {

    private readonly API: string = 'https://localhost:44351/Exame';

    constructor(private httpClient: HttpClient) { }

    getAllExames(): Observable<Exame[]> {
      return this.httpClient.get<Exame[]>(this.API);
    }

    getAllExamesMaisPedidos(): Observable<Exame[]> {
      return this.httpClient.get<Exame[]>(this.API + "/Ordem/MaisPedido");
    }

    getAllExamesMenosPedidos(): Observable<Exame[]> {
      return this.httpClient.get<Exame[]>(this.API + "/Ordem/MenosPedido");
    }

    deleteExame(id: Number) : Observable<string>{
      return this.httpClient.delete<string>(this.API+"/"+id);
    }

    criarExame(paciente: Exame){
      return this.httpClient.post<string>(this.API+"/", paciente);
    }
  }
