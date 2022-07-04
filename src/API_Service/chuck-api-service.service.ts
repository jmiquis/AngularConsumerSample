import { Inject, Injectable } from '@angular/core';
//importar el cliente http
import { HttpClient } from '@angular/common/http';
import { ChuckObject } from 'src/models/chuck-object';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChuckApiServiceService {

  serviceUrl:string ='https://api.chucknorris.io/jokes/random';

  //inyectar cliente http en el constructor 
  constructor(
    private http: HttpClient
  ) { }

  //  utilizar el modelo creado en el paso 2 y recoger observables del modelo en un metodo 

  getInfo():Observable<ChuckObject> {
    return this.http.get<ChuckObject>(this.serviceUrl);
  }
}
